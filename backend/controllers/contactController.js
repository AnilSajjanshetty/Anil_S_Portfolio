const Contact = require("../models/Contact");

// ---------------------- Submit Contact Form ----------------------
exports.submitContact = async (req, res) => {
  try {
    const { name, email, mobile, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !mobile || !subject || !message) {
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

    // Mobile validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(mobile)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid 10-digit mobile number",
      });
    }

    // Create a new contact in MongoDB
    const contact = await Contact.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      mobile: mobile.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    console.log(`✉️ New contact message from: ${email} | Mobile: ${mobile}`);

    res.status(201).json({
      success: true,
      message: "Message sent successfully! We will get back to you soon.",
      contactId: contact._id,
    });
  } catch (error) {
    console.error("❌ Error saving contact:", error);

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Invalid form data",
        errors: Object.values(error.errors).map((err) => err.message),
      });
    }

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again.",
    });
  }
};
