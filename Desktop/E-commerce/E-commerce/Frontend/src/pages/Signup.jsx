// Signup Page — Frontend Only (no backend needed)
// Just validates fields and redirects to home page
import { registerUser } from "../api/api";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState({ text: "", type: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    console.log("HANDLE SUBMIT RUNNING");
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.password) {
      setMessage({ text: "Please fill all fields", type: "error" });
      return;
    }

    if (formData.password.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters",
        type: "error",
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return;
    }

    try {
      console.log("Sending signup data:", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      const response = await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log("Signup response:", response.data);

      setMessage({
        text: "Signup Successful 🎉",
        type: "success",
      });

      setTimeout(() => navigate("/login"), 1000);

    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);

      setMessage({
        text: error.response?.data?.message || "Signup Failed. Please try again.",
        type: "error",
      });
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        <h1 className="login-title">🛒 ShopVerse</h1>
        <p className="login-subtitle">Create your account</p>

        {message.text && (
          <p className={`login-message ${message.type}`}>
            {message.text}
          </p>
        )}

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="password"
          name="password"
          placeholder="Password (min 6 characters)"
          value={formData.password}
          onChange={handleChange}
          className="login-input"
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          className="login-input"
        />

        <button type="submit" className="login-button">
          Create account →
        </button>

        <p className="login-footer-text">
          Already have an account? <Link to="/login" className="login-link">Login</Link>
        </p>

        <p className="login-footer-text">
          <Link to="/" className="login-link">← Back to Home</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
