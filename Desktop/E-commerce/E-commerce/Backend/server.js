// ==========================================
//  server.js — Express Server (Entry Point)
// ==========================================
//
//  WHAT THIS FILE DOES:
//  → This is the MAIN file that starts your backend
//  → It does 4 things:
//    1. Loads environment variables (.env)
//    2. Connects to MongoDB database
//    3. Sets up middleware (CORS, JSON parsing)
//    4. Registers routes (URL handlers)
//    5. Starts listening on a port
//
//  HOW FRONTEND CONNECTS:
//  → Frontend (React) runs on http://localhost:5173
//  → Backend (Express) runs on http://localhost:5000
//  → Frontend sends HTTP requests to backend using axios
//  → CORS middleware allows this cross-origin communication
//

// Load environment variables from .env file
// This MUST be at the very top
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config"); // our MongoDB connection function
const authRoutes = require("./routes"); // our auth routes

// Connect to MongoDB
connectDB();

// Create Express app
const app = express();

// ── Middleware ──────────────────────────
// cors() → allows frontend (port 5173) to talk to backend (port 5000)
app.use(cors());

// express.json() → parses JSON data sent from frontend
// Without this, req.body would be undefined
app.use(express.json());

// ── Routes ─────────────────────────────
// All auth routes will start with /api/auth
// So /login becomes /api/auth/login
app.use("/api/auth", authRoutes);

// Simple test route — visit http://localhost:5000 to check if server works
app.get("/", (req, res) => {
  res.json({ message: "🚀 E-Commerce Backend is running!" });
});

// ── Start Server ───────────────────────
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
