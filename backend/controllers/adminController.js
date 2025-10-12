// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const { Op } = require("sequelize");
// const Admin = require("../models/Admin");
// const Contact = require("../models/Contact");

// // ---------------------- Admin Login ----------------------
// exports.login = async (req, res) => {
//   try {
//     const { username, password } = req.body;

//     if (!username || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "Username and password are required",
//       });
//     }

//     const admin = await Admin.findOne({ where: { username: username.trim() } });
//     if (!admin) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid username or password",
//       });
//     }

//     const isValidPassword = await bcrypt.compare(password, admin.password);
//     if (!isValidPassword) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid username or password",
//       });
//     }

//     // Update last login
//     admin.lastLogin = new Date();
//     await admin.save();

//     const JWT_SECRET = process.env.JWT_SECRET || "fallback-secret-key";
//     const token = jwt.sign(
//       { id: admin.id, username: admin.username },
//       JWT_SECRET,
//       { expiresIn: "24h" }
//     );

//     console.log(`🔐 Admin logged in: ${username}`);

//     res.json({
//       success: true,
//       token,
//       admin: {
//         id: admin.id,
//         username: admin.username,
//         email: admin.email,
//       },
//     });
//   } catch (error) {
//     console.error("❌ Login error:", error);
//     res.status(500).json({
//       success: false,
//       message: "Login failed. Please try again.",
//     });
//   }
// };

// // ---------------------- Create Admin ----------------------
// exports.createAdmin = async (req, res) => {
//   try {
//     const { username, password, email } = req.body;

//     if (!username || !password || !email) {
//       return res.status(400).json({
//         success: false,
//         message: "Username, password, and email are required",
//       });
//     }

//     if (password.length < 6) {
//       return res.status(400).json({
//         success: false,
//         message: "Password must be at least 6 characters long",
//       });
//     }

//     const existingAdmin = await Admin.findOne({
//       where: { [Op.or]: [{ username }, { email }] },
//     });

//     if (existingAdmin) {
//       return res.status(400).json({
//         success: false,
//         message: "Admin with this username or email already exists",
//       });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const admin = await Admin.create({
//       username: username.trim(),
//       password: hashedPassword,
//       email: email.trim().toLowerCase(),
//     });

//     console.log(`👤 New admin created: ${username}`);

//     res.status(201).json({
//       success: true,
//       message: "Admin account created successfully",
//       admin: {
//         username: admin.username,
//         email: admin.email,
//       },
//     });
//   } catch (error) {
//     console.error("❌ Error creating admin:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to create admin account",
//     });
//   }
// };

// // ---------------------- Get All Contacts ----------------------
// exports.getAllContacts = async (req, res) => {
//   try {
//     const { status, page = 1, limit = 20, search = "" } = req.query;

//     const filter = {};
//     if (status && ["unread", "read", "replied"].includes(status)) {
//       filter.status = status;
//     }

//     if (search) {
//       filter[Op.or] = [
//         { name: { [Op.like]: `%${search}%` } },
//         { email: { [Op.like]: `%${search}%` } },
//         { subject: { [Op.like]: `%${search}%` } },
//       ];
//     }

//     const contacts = await Contact.findAll({
//       where: filter,
//       order: [["createdAt", "DESC"]],
//       limit: parseInt(limit),
//       offset: (parseInt(page) - 1) * parseInt(limit),
//     });

//     const count = await Contact.count({ where: filter });

//     res.json({
//       success: true,
//       contacts,
//       pagination: {
//         total: count,
//         totalPages: Math.ceil(count / limit),
//         currentPage: parseInt(page),
//         perPage: parseInt(limit),
//       },
//     });
//   } catch (error) {
//     console.error("❌ Error fetching contacts:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch contacts",
//     });
//   }
// };

// // ---------------------- Get Single Contact ----------------------
// exports.getContactById = async (req, res) => {
//   try {
//     const contact = await Contact.findByPk(req.params.id);
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact not found",
//       });
//     }

//     // Auto-mark as read
//     if (contact.status === "unread") {
//       contact.status = "read";
//       contact.readAt = new Date();
//       await contact.save();
//     }

//     res.json({ success: true, contact });
//   } catch (error) {
//     console.error("❌ Error fetching contact:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch contact",
//     });
//   }
// };

// // ---------------------- Update Contact ----------------------
// exports.updateContact = async (req, res) => {
//   try {
//     const { status, notes } = req.body;

//     const contact = await Contact.findByPk(req.params.id);
//     if (!contact) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact not found",
//       });
//     }

//     if (status && ["unread", "read", "replied"].includes(status)) {
//       contact.status = status;
//       if (status === "read" && !contact.readAt) contact.readAt = new Date();
//     }

//     if (notes !== undefined) contact.notes = notes;

//     await contact.save();

//     console.log(`📝 Contact updated: ${contact.id}`);

//     res.json({
//       success: true,
//       message: "Contact updated successfully",
//       contact,
//     });
//   } catch (error) {
//     console.error("❌ Error updating contact:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to update contact",
//     });
//   }
// };

// // ---------------------- Delete Contact ----------------------
// exports.deleteContact = async (req, res) => {
//   try {
//     const deleted = await Contact.destroy({ where: { id: req.params.id } });
//     if (!deleted) {
//       return res.status(404).json({
//         success: false,
//         message: "Contact not found",
//       });
//     }

//     console.log(`🗑️ Contact deleted: ${req.params.id}`);
//     res.json({
//       success: true,
//       message: "Contact deleted successfully",
//     });
//   } catch (error) {
//     console.error("❌ Error deleting contact:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to delete contact",
//     });
//   }
// };

// // ---------------------- Get Stats ----------------------
// exports.getStats = async (req, res) => {
//   try {
//     const [total, unread, read, replied] = await Promise.all([
//       Contact.count(),
//       Contact.count({ where: { status: "unread" } }),
//       Contact.count({ where: { status: "read" } }),
//       Contact.count({ where: { status: "replied" } }),
//     ]);

//     const sevenDaysAgo = new Date();
//     sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
//     const recentCount = await Contact.count({
//       where: { createdAt: { [Op.gte]: sevenDaysAgo } },
//     });

//     res.json({
//       success: true,
//       stats: { total, unread, read, replied, recentCount },
//     });
//   } catch (error) {
//     console.error("❌ Error fetching stats:", error);
//     res.status(500).json({
//       success: false,
//       message: "Failed to fetch statistics",
//     });
//   }
// };

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");
const Contact = require("../models/Contact");

// ---------------------- Admin Login ----------------------
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password)
      return res
        .status(400)
        .json({
          success: false,
          message: "Username and password are required",
        });

    const admin = await Admin.findOne({ where: { username: username.trim() } });
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
      { id: admin.id, username: admin.username },
      JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.json({
      success: true,
      token,
      admin: { id: admin.id, username: admin.username, email: admin.email },
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
      return res
        .status(400)
        .json({
          success: false,
          message: "Username, password, and email are required",
        });

    if (password.length < 6)
      return res
        .status(400)
        .json({
          success: false,
          message: "Password must be at least 6 characters long",
        });

    const existingAdmin =
      (await Admin.findOne({ where: { username } })) ||
      (await Admin.findOne({ where: { email } }));
    if (existingAdmin)
      return res
        .status(400)
        .json({
          success: false,
          message: "Admin with this username or email already exists",
        });

    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
      username: username.trim(),
      email: email.trim().toLowerCase(),
      password: hashedPassword,
    });

    res
      .status(201)
      .json({
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
    let where = {};

    if (status && ["unread", "read", "replied"].includes(status))
      where.status = status;

    // Simple search without Op
    const contactsAll = await Contact.findAll({
      order: [["createdAt", "DESC"]],
    });
    const filtered = contactsAll
      .filter((contact) => {
        if (search) {
          const lowerSearch = search.toLowerCase();
          return (
            contact.name.toLowerCase().includes(lowerSearch) ||
            contact.email.toLowerCase().includes(lowerSearch) ||
            contact.subject.toLowerCase().includes(lowerSearch)
          );
        }
        return true;
      })
      .filter((c) => !status || c.status === status);

    const total = filtered.length;
    const start = (parseInt(page) - 1) * parseInt(limit);
    const end = start + parseInt(limit);
    const contacts = filtered.slice(start, end);

    res.json({
      success: true,
      contacts,
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
    const contact = await Contact.findByPk(req.params.id);
    if (!contact)
      return res
        .status(404)
        .json({ success: false, message: "Contact not found" });

    if (contact.status === "unread") {
      contact.status = "read";
      contact.readAt = new Date();
      await contact.save();
    }

    res.json({ success: true, contact });
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
    const contact = await Contact.findByPk(req.params.id);
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
    res.json({
      success: true,
      message: "Contact updated successfully",
      contact,
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
    const deleted = await Contact.destroy({ where: { id: req.params.id } });
    if (!deleted)
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
    const contacts = await Contact.findAll();
    const total = contacts.length;
    const unread = contacts.filter((c) => c.status === "unread").length;
    const read = contacts.filter((c) => c.status === "read").length;
    const replied = contacts.filter((c) => c.status === "replied").length;

    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const recentCount = contacts.filter(
      (c) => c.createdAt >= sevenDaysAgo
    ).length;

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
