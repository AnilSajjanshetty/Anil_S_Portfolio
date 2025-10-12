const { Op } = require("sequelize");
const Contact = require("../models/Contact");

// ---------------------- Submit Contact Form ----------------------
exports.submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Email validation
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address",
      });
    }

    // Create Contact in MySQL
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
    });

    console.log(`✉️  New contact message from: ${email}`);

    res.status(201).json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
      contactId: contact.id,
    });
  } catch (error) {
    console.error("❌ Error saving contact:", error);

    // Validation errors from Sequelize
    if (error.name === "SequelizeValidationError") {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: error.errors.map((err) => err.message),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again.",
    });
  }
};
