// ==========================================
//  ForgotPassword Page — Step 1 of Password Reset
// ==========================================
//  User enters their email address
//  Backend checks if it exists and sends an OTP
//  On success → navigates to /verify-otp
//
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/api";
import "../styles/Login.css";
import "../styles/ForgotPassword.css";

const ForgotPassword = () => {
  const navigate = useNavigate();

  // Form state
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!email) {
      setMessage({ text: "Please enter your email", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      console.log("📤 Sending forgot password request for:", email);

      const response = await forgotPassword({ email });

      console.log("📥 Response:", response.data);

      setMessage({ text: "OTP sent to your email! 📧", type: "success" });

      // Navigate to verify OTP page after 1.5 seconds
      // Pass email via navigation state so the next page knows which user
      setTimeout(() => {
        navigate("/verify-otp", { state: { email } });
      }, 1500);

    } catch (error) {
      console.error("❌ Forgot password error:", error.response?.data || error.message);
      setMessage({
        text: error.response?.data?.message || "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        {/* Step indicator — shows which step we're on */}
        <div className="step-indicator">
          <span className="step-dot active"></span>
          <span className="step-dot"></span>
          <span className="step-dot"></span>
        </div>

        <h1 className="login-title">🔐 Forgot Password</h1>
        <p className="login-subtitle">
          Enter your email and we&apos;ll send you a verification code
        </p>

        {/* Success/Error Message */}
        {message.text && (
          <p className={`login-message ${message.type}`}>
            {message.text}
          </p>
        )}

        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
          disabled={loading}
        />

        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Sending OTP...
            </>
          ) : (
            "Send OTP"
          )}
        </button>

        <p className="login-footer-text">
          Remember your password?{" "}
          <Link to="/" className="login-link">Back to Login</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPassword;
