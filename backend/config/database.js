// backend/config/database.js
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "portfolio_db",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "root",
  {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: "mysql",
    logging: false, // Disable raw SQL logs
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL Connected Successfully");
    console.log(`📊 Database: ${sequelize.getDatabaseName()}`);
  } catch (error) {
    console.error("❌ MySQL Connection Error:", error.message);
    process.exit(1);
  }
};

// Graceful shutdown
process.on("SIGINT", async () => {
  await sequelize.close();
  console.log("💾 Database connection closed");
  process.exit(0);
});

module.exports = { sequelize, connectDB };
