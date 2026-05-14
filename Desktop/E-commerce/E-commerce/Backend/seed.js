// ==========================================
//  seed.js — Create a Test User in Database
// ==========================================
//
//  Run this ONCE to add a test user to MongoDB:
//    node seed.js
//
//  This creates a user with:
//    Email:    test@example.com
//    Password: password123  (stored as hashed)
//

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  });

// Use the same User model
const User = require("./models");

async function seedUser() {
  try {
    // Check if test user already exists
    const existing = await User.findOne({ email: "test@example.com" });
    if (existing) {
      console.log("⚠️  Test user already exists! Skipping...");
      console.log("   Email:    test@example.com");
      console.log("   Password: password123");
      process.exit(0);
    }

    // Hash the password (same way the register route does it)
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash("password123", salt);

    // Create the user
    const user = await User.create({
      name: "Test User",
      email: "test@example.com",
      password: hashedPassword,
    });

    console.log("✅ Test user created successfully!");
    console.log("   Name:     " + user.name);
    console.log("   Email:    " + user.email);
    console.log("   Password: password123  (hashed in DB)");
    console.log("");
    console.log("You can now login with these credentials!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error creating user:", error.message);
    process.exit(1);
  }
}

seedUser();
