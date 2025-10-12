const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");
const authenticateToken = require("../middleware/auth");

// Authentication routes (public)
router.post("/admin/login", adminController.login);
router.post("/admin/create", adminController.createAdmin);

// Protected routes (require JWT token)
router.get(
  "/admin/contacts",
  authenticateToken,
  adminController.getAllContacts
);
router.get(
  "/admin/contacts/:id",
  authenticateToken,
  adminController.getContactById
);
router.patch(
  "/admin/contacts/:id",
  authenticateToken,
  adminController.updateContact
);
router.delete(
  "/admin/contacts/:id",
  authenticateToken,
  adminController.deleteContact
);
router.get("/admin/stats", authenticateToken, adminController.getStats);

module.exports = router;
