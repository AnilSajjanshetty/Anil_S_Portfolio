// backend/models/Contact.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Contact = sequelize.define(
  "Contact",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    mobile: {
      type: DataTypes.BIGINT, // stores phone number as number
      allowNull: false, // set to false if required
      validate: {
        isInt: true, // ensure only integers
        min: 1000000000, // optional: minimum 10 digits
        max: 9999999999, // optional: maximum 10 digits
      },
    },
    subject: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("unread", "read", "replied"),
      defaultValue: "unread",
    },
    readAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      defaultValue: "",
    },
  },
  {
    tableName: "contacts",
    timestamps: true, // createdAt & updatedAt
    indexes: [{ fields: ["status", "createdAt"] }, { fields: ["email"] }],
  }
);

module.exports = Contact;
