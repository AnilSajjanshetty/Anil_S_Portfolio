const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Contact = require("../models/Contact");

// ---------------------- Admin Login ----------------------
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({
        success: false,
        message: "Username and password are required",
      });

    const admin = await Admin.findOne({ username: username.trim() });
    if (!admin)
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });

    const isValidPassword = await bcrypt.compare(password, admin.password);
    if (!isValidPassword)
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password" });

    admin.lastLogin = new Date();
    await admin.save();

    const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-key";
    const token = jwt.sign(
      { id: admin._id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      success: true,
      token,
      admin: {
        id: admin._id,
        username: admin.username,
        email: admin.email,
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ success: false, message: "Login failed. Please try again." });
  }
};

// ---------------------- Create Admin ----------------------
exports.createAdmin = async (req, res) => {
  try {
    const { username, password, email } = req.body;
    if (!username || !password || !email)
      return res.status(400).json({
        success: false,
        message: "Username, password, and email are required",
      });

    if (password.length < 6)
      return res.status(400).json({
        success: false,
        message: "Password must be at least 6 characters long",
      });

    const existingAdmin =
      (await Admin.findOne({ username })) || (await Admin.findOne({ email }));
    if (existingAdmin)
      return res.status(400).json({
        success: false,
        message: "Admin with this username or email already exists",
      });

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "Admin account created successfully",
      admin: { username: admin.username, email: admin.email },
    });
  } catch (error) {
    console.error("Error creating admin:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create admin account" });
  }
};

// ---------------------- Get All Contacts ----------------------
exports.getAllContacts = async (req, res) => {
  try {
    const { status, page = 1, limit = 20, search = "" } = req.query;
    const query = {};

    if (status && ["unread", "read", "replied"].includes(status))
      query.status = status;

    if (search) {
      query.$or = [
        { name: new RegExp(search, "i") },
        { email: new RegExp(search, "i") },
        { subject: new RegExp(search, "i") },
        { mobile: new RegExp(search, "i") },
      ];
    }

    const total = await Contact.countDocuments(query);
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(parseInt(limit));

    // Map _id to id
    const formattedContacts = contacts.map((contact) => ({
      id: contact._id,
      name: contact.name,
      email: contact.email,
      mobile: contact.mobile,
      subject: contact.subject,
      message: contact.message,
      status: contact.status,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    }));

    res.json({
      success: true,
      contacts: formattedContacts,
      pagination: {
        total,
        totalPages: Math.ceil(total / limit),
        currentPage: parseInt(page),
        perPage: parseInt(limit),
      },
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch contacts" });
  }
};

// ---------------------- Get Single Contact ----------------------
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact)
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });

    // Mark as read if unread
    if (contact.status === "unread") {
      contact.status = "read";
      contact.readAt = new Date();
      await contact.save();
    }

    // Format contact: _id → id
    const formattedContact = {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      mobile: contact.mobile,
      subject: contact.subject,
      message: contact.message,
      status: contact.status,
      readAt: contact.readAt,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    };

    res.json({ success: true, contact: formattedContact });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch contact" });
  }
};

// ---------------------- Update Contact ----------------------
exports.updateContact = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const contact = await Contact.findById(req.params.id);

    if (!contact)
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });

    if (status && ["unread", "read", "replied"].includes(status)) {
      contact.status = status;
      if (status === "read" && !contact.readAt) contact.readAt = new Date();
    }

    if (notes !== undefined) contact.notes = notes;

    await contact.save();
    // Format contact: _id → id
    const formattedContact = {
      id: contact._id,
      name: contact.name,
      email: contact.email,
      mobile: contact.mobile,
      subject: contact.subject,
      message: contact.message,
      status: contact.status,
      readAt: contact.readAt,
      createdAt: contact.createdAt,
      updatedAt: contact.updatedAt,
    };
    res.json({
      success: true,
      message: "Contact updated successfully",
      contact: formattedContact,
    });
  } catch (error) {
    console.error("Error updating contact:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update contact" });
  }
};

// ---------------------- Delete Contact ----------------------
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact)
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });

    res.json({ success: true, message: "Contact deleted successfully" });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete contact" });
  }
};

// ---------------------- Get Stats ----------------------
exports.getStats = async (req, res) => {
  try {
    const total = await Contact.countDocuments();
    const unread = await Contact.countDocuments({ status: "unread" });
    const read = await Contact.countDocuments({ status: "read" });
    const replied = await Contact.countDocuments({ status: "replied" });

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentCount = await Contact.countDocuments({
      createdAt: { $gte: sevenDaysAgo },
    });

    res.json({
      success: true,
      stats: { total, unread, read, replied, recentCount },
    });
  } catch (error) {
    console.error("Error fetching stats:", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch statistics" });
  }
};
