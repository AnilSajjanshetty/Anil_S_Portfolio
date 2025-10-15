const API_BASE = import.meta.env.VITE_API_BASE; // read from env

// Get auth token
const getToken = () => localStorage.getItem("adminToken");

// Contact API
export const contactAPI = {
  submit: async (formData) => {
    const response = await fetch(`${API_BASE}/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    return response.json();
  },
};

// Admin API
export const adminAPI = {
  login: async (credentials) => {
    const response = await fetch(`${API_BASE}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return response.json();
  },

  createAdmin: async (adminData) => {
    const response = await fetch(`${API_BASE}/admin/create`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(adminData),
    });
    return response.json();
  },

  getContacts: async (filters = {}) => {
    const token = getToken();
    const queryParams = new URLSearchParams(filters).toString();
    const response = await fetch(`${API_BASE}/admin/contacts?${queryParams}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  getContactById: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_BASE}/admin/contacts/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  updateContact: async (id, updates) => {
    const token = getToken();
    const response = await fetch(`${API_BASE}/admin/contacts/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    return response.json();
  },

  deleteContact: async (id) => {
    const token = getToken();
    const response = await fetch(`${API_BASE}/admin/contacts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },

  getStats: async () => {
    const token = getToken();
    const response = await fetch(`${API_BASE}/admin/stats`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
  },
};
