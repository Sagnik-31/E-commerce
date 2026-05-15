// Login Page — Authenticates user against MongoDB via backend API
import { loginUser } from "../api/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import "../styles/ForgotPassword.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation — check if fields are filled
    if (!formData.email || !formData.password) {
      setMessage({ text: "Please fill all fields", type: "error" });
      return;
    }

    try {
      console.log("Sending login data:", { email: formData.email });

      // Call backend API — this checks credentials against MongoDB
      const response = await loginUser({
        email: formData.email,
        password: formData.password,
      });

      console.log("Login response:", response.data);

      // Only store token & user data AFTER successful authentication
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setMessage({ text: "Login successful! ✅", type: "success" });

      // Redirect to home page only on success
      setTimeout(() => navigate("/home"), 1000);

    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);

      // Show the actual error message from the backend
      setMessage({
        text: error.response?.data?.message || "Login failed. Please try again.",
        type: "error",
      });

      // Do NOT redirect — stay on login page
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-title">🛒 ShopVerse</h1>
        <p className="login-subtitle">Sign in to your account</p>

        {message.text && (
          <p className={`login-message ${message.type}`}>
            {message.text}
          </p>
        )}

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
        />

        <Link to="/forgot-password" className="forgot-link">
          Forgot Password?
        </Link>

        <button type="submit" className="login-button">
          Log in →
        </button>

        <p className="login-footer-text">
          Don&apos;t have an account? <Link to="/signup" className="login-link">Sign Up</Link>
        </p>

        <p className="login-footer-text">
          <Link to="/" className="login-link">← Back to Home</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
