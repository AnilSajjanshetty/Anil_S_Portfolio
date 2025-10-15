import React, { useState, useEffect } from 'react';
import { Mail, LogOut, Trash2, Eye, CheckCircle, Clock, MessageSquare, TrendingUp, Search, Filter } from 'lucide-react';

const AdminDashboard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [contacts, setContacts] = useState([]);
    const [stats, setStats] = useState({ total: 0, unread: 0, read: 0, replied: 0 });
    const [selectedContact, setSelectedContact] = useState(null);
    const [filterStatus, setFilterStatus] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(false);

    const API_BASE = import.meta.env.VITE_API_BASE;

    useEffect(() => {
        const savedToken = localStorage.getItem('adminToken');
        if (savedToken) {
            setToken(savedToken);
            setIsLoggedIn(true);
        }
    }, []);

    useEffect(() => {
        if (isLoggedIn && token) {
            fetchContacts();
            fetchStats();
        }
    }, [isLoggedIn, token, filterStatus]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        setLoading(true);

        try {
            const response = await fetch(`${API_BASE}/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });

            const data = await response.json();

            if (response.ok) {
                setToken(data.token);
                localStorage.setItem('adminToken', data.token);
                setIsLoggedIn(true);
                setPassword('');
            } else {
                setLoginError(data.message || 'Login failed');
            }
        } catch (error) {
            setLoginError('Connection error. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        setToken(null);
        localStorage.removeItem('adminToken');
    };

    const fetchContacts = async () => {
        try {
            const url = filterStatus
                ? `${API_BASE}/admin/contacts?status=${filterStatus}`
                : `${API_BASE}/admin/contacts`;

            const response = await fetch(url, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const data = await response.json();
                setContacts(data.contacts);
            }
        } catch (error) {
            console.error('Error fetching contacts:', error);
        }
    };

    const fetchStats = async () => {
        try {
            const response = await fetch(`${API_BASE}/admin/stats`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const data = await response.json();
                setStats(data?.stats);
            }
        } catch (error) {
            console.error('Error fetching stats:', error);
        }
    };

    const viewContact = async (contact) => {
        try {
            const response = await fetch(`${API_BASE}/admin/contacts/${contact.id}`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                const data = await response.json();
                setSelectedContact(data?.contact);
                fetchStats();
                fetchContacts();
            }
        } catch (error) {
            console.error('Error viewing contact:', error);
        }
    };

    const updateStatus = async (contactId, newStatus) => {
        try {
            const response = await fetch(`${API_BASE}/admin/contacts/${contactId}`, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });

            if (response.ok) {
                fetchContacts();
                fetchStats();
                if (selectedContact?.id === contactId) {
                    setSelectedContact({ ...selectedContact, status: newStatus });
                }
            }
        } catch (error) {
            console.error('Error updating status:', error);
        }
    };

    const deleteContact = async (contactId) => {
        if (!confirm('Are you sure you want to delete this message?')) return;

        try {
            const response = await fetch(`${API_BASE}/admin/contacts/${contactId}`, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (response.ok) {
                fetchContacts();
                fetchStats();
                if (selectedContact?.id === contactId) {
                    setSelectedContact(null);
                }
            }
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        contact.subject.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (!isLoggedIn) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
                <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-amber-500/20 w-full max-w-md">
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-8 h-8 text-white" />
                        </div>
                        <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
                        <p className="text-slate-400">Access your contact dashboard</p>
                    </div>

                    {loginError && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-sm">
                            {loginError}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label className="block text-slate-300 mb-2 text-sm font-medium">Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all"
                                placeholder="Enter username"
                            />
                        </div>

                        <div>
                            <label className="block text-slate-300 mb-2 text-sm font-medium">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-slate-900/50 border border-amber-500/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-all"
                                placeholder="Enter password"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-slate-900 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-amber-500/50 transition-all duration-300 disabled:opacity-50"
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
            {/* Header */}
            <header className="bg-slate-900/95 border-b border-amber-500/20 sticky top-0 z-50 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center">
                                <Mail className="w-5 h-5 text-white" />
                            </div>
                            <div>
                                <h1 className="text-white font-bold text-lg">Admin Dashboard</h1>
                                <p className="text-slate-400 text-xs">Contact Management</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="flex items-center gap-2 text-slate-300 hover:text-amber-500 transition-colors"
                        >
                            <LogOut className="w-5 h-5" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                {/* Stats Cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { label: 'Total', value: stats.total, icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
                        { label: 'Unread', value: stats.unread, icon: Clock, color: 'from-amber-500 to-orange-500' },
                        { label: 'Read', value: stats.read, icon: Eye, color: 'from-green-500 to-emerald-500' },
                        { label: 'Replied', value: stats.replied, icon: CheckCircle, color: 'from-purple-500 to-pink-500' }
                    ].map((stat, idx) => (
                        <div key={idx} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 border border-amber-500/20">
                            <div className={`w-10 h-10 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center mb-3`}>
                                <stat.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                            <div className="text-slate-400 text-sm">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-5 gap-6">
                    {/* Contact List */}
                    <div className="lg:col-span-2">
                        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-500/20 overflow-hidden">
                            <div className="p-4 border-b border-amber-500/20">
                                <div className="flex gap-2 mb-4">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400" />
                                        <input
                                            type="text"
                                            placeholder="Search contacts..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full bg-slate-900/50 border border-amber-500/20 rounded-lg pl-10 pr-4 py-2 text-white text-sm focus:outline-none focus:border-amber-500"
                                        />
                                    </div>
                                    <button
                                        onClick={() => setFilterStatus('')}
                                        className={`p-2 rounded-lg border transition-all ${filterStatus === ''
                                            ? 'bg-amber-500 border-amber-500 text-slate-900'
                                            : 'bg-slate-900/50 border-amber-500/20 text-slate-400 hover:border-amber-500/50'
                                            }`}
                                    >
                                        <Filter className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="flex gap-2">
                                    {['unread', 'read', 'replied'].map((status) => (
                                        <button
                                            key={status}
                                            onClick={() => setFilterStatus(status)}
                                            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${filterStatus === status
                                                ? 'bg-amber-500 text-slate-900'
                                                : 'bg-slate-900/50 text-slate-400 hover:bg-slate-900'
                                                }`}
                                        >
                                            {status.charAt(0).toUpperCase() + status.slice(1)}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-y-auto max-h-[600px]">
                                {filteredContacts.length === 0 ? (
                                    <div className="p-8 text-center text-slate-400">
                                        <MessageSquare className="w-12 h-12 mx-auto mb-3 opacity-50" />
                                        <p>No messages found</p>
                                    </div>
                                ) : (
                                    filteredContacts.map((contact) => (
                                        <div
                                            key={contact.id}
                                            onClick={() => viewContact(contact)}
                                            className={`p-4 border-b border-slate-700/50 hover:bg-slate-900/50 cursor-pointer transition-all ${selectedContact?.id === contact.id ? 'bg-slate-900/70 border-l-4 border-l-amber-500' : ''
                                                }`}
                                        >
                                            <div className="flex items-start justify-between mb-2">
                                                <div className="flex-1 min-w-0">
                                                    <h3 className="text-white font-semibold text-sm truncate">{contact?.name}</h3>
                                                    <p className="text-slate-400 text-xs truncate">{contact?.email}</p>
                                                    <p className="text-slate-400 text-xs truncate">{contact?.mobile}</p>
                                                </div>
                                                <span className={`px-2 py-1 rounded text-xs font-medium ${contact.status === 'unread' ? 'bg-amber-500/20 text-amber-400' :
                                                    contact.status === 'read' ? 'bg-green-500/20 text-green-400' :
                                                        'bg-purple-500/20 text-purple-400'
                                                    }`}>
                                                    {contact.status}
                                                </span>
                                            </div>
                                            <p className="text-slate-500 text-xs mb-2 truncate">{contact.subject}</p>
                                            <p className="text-slate-600 text-xs">
                                                {new Date(contact.createdAt).toLocaleDateString('en-US', {
                                                    month: 'short',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}
                                            </p>
                                        </div>
                                    ))
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Contact Detail */}
                    <div className="lg:col-span-3">
                        {selectedContact ? (
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-500/20 overflow-hidden">
                                <div className="p-6 border-b border-amber-500/20">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex-1">
                                            <h2 className="text-2xl font-bold text-white mb-2">{selectedContact.subject}</h2>
                                            <div className="flex items-center gap-4 text-sm text-slate-400">
                                                <span className="flex items-center gap-1">
                                                    <Mail className="w-4 h-4" />
                                                    {selectedContact.email}
                                                </span>
                                                <span>•</span>
                                                <span>{new Date(selectedContact.createdAt).toLocaleDateString('en-US', {
                                                    month: 'long',
                                                    day: 'numeric',
                                                    year: 'numeric',
                                                    hour: '2-digit',
                                                    minute: '2-digit'
                                                })}</span>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => deleteContact(selectedContact.id)}
                                            className="p-2 bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 rounded-lg text-red-400 transition-all"
                                        >
                                            <Trash2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex gap-2">
                                        {['unread', 'read', 'replied'].map((status) => (
                                            <button
                                                key={status}
                                                onClick={() => updateStatus(selectedContact.id, status)}
                                                disabled={selectedContact.status === status}
                                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedContact.status === status
                                                    ? 'bg-amber-500 text-slate-900 cursor-default'
                                                    : 'bg-slate-900/50 text-slate-400 hover:bg-slate-900 border border-amber-500/20'
                                                    }`}
                                            >
                                                {status.charAt(0).toUpperCase() + status.slice(1)}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="mb-6">
                                        <h3 className="text-amber-500 font-semibold mb-2">From:</h3>
                                        <p className="text-white font-medium">{selectedContact.name}</p>
                                        <p className="text-slate-400 text-sm">{selectedContact.email}</p>
                                        <p className="text-slate-400 text-sm">{selectedContact.mobile}</p>
                                    </div>

                                    <div className="mb-6">
                                        <h3 className="text-amber-500 font-semibold mb-2">Message:</h3>
                                        <div className="bg-slate-900/50 rounded-lg p-4 border border-amber-500/20">
                                            <p className="text-slate-300 leading-relaxed whitespace-pre-wrap">
                                                {selectedContact.message}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                                        <h3 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                                            <TrendingUp className="w-4 h-4" />
                                            Quick Actions
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            <a
                                                href={`mailto:${selectedContact.email}?subject=Re: ${selectedContact.subject}`}
                                                className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-slate-900 rounded-lg font-semibold text-sm transition-all"
                                            >
                                                Reply via Email
                                            </a>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(selectedContact.email);
                                                    alert('Email copied to clipboard!');
                                                }}
                                                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold text-sm transition-all"
                                            >
                                                Copy Email
                                            </button>
                                            <button
                                                onClick={() => {
                                                    navigator.clipboard.writeText(selectedContact.mobile);
                                                    alert('Mobile No. copied to clipboard!');
                                                }}
                                                className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold text-sm transition-all"
                                            >
                                                Copy Mobile No.
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-amber-500/20 h-full flex items-center justify-center p-12">
                                <div className="text-center text-slate-400">
                                    <Mail className="w-16 h-16 mx-auto mb-4 opacity-50" />
                                    <p className="text-lg">Select a message to view details</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;