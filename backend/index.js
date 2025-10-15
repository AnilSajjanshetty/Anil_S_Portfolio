require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/database");
// Routes
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => {
  res.json({ message: "🟢 Server is running!" });
});
app.use((req, res, next) => {
  res.set("Cache-Control", "no-store"); // never cache
  next();
});

// Use Admin Routes
app.use("/api", adminRoutes);
app.use("/api", contactRoutes);

// Start Server
(async () => {
  try {
    await connectDB(); // ✅ connect to MongoDB Atlas

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Server startup failed:", error.message);
    process.exit(1);
  }
})();

// Graceful shutdown
process.on("SIGINT", async () => {
  console.log("\n💾 Shutting down server...");
  const mongoose = require("mongoose");
  await mongoose.connection.close();
  console.log("✅ MongoDB connection closed");
  process.exit(0);
});
