// ==========================================
//  ResetPassword Page — Step 3 of Password Reset
// ==========================================
//  User enters a new password (+ confirm)
//  Backend hashes it and updates in MongoDB
//  On success → redirects to Login page
//
import { useState, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { resetPassword } from "../api/api";
import "../styles/Login.css";
import "../styles/ForgotPassword.css";

const ResetPassword = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email and otp from navigation state (passed from VerifyOtp page)
  const email = location.state?.email || "";
  const otp = location.state?.otp || "";

  // Form state
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });
  const [resetDone, setResetDone] = useState(false);

  // If no email or otp in state, redirect back
  useEffect(() => {
    if (!email || !otp) {
      navigate("/forgot-password");
    }
  }, [email, otp, navigate]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { newPassword, confirmPassword } = formData;

    // Validation
    if (!newPassword || !confirmPassword) {
      setMessage({ text: "Please fill all fields", type: "error" });
      return;
    }

    if (newPassword.length < 6) {
      setMessage({
        text: "Password must be at least 6 characters",
        type: "error",
      });
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage({ text: "Passwords do not match", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      console.log("📤 Resetting password for:", email);

      const response = await resetPassword({
        email,
        otp,
        newPassword,
      });

      console.log("📥 Response:", response.data);

      setResetDone(true);
      setMessage({
        text: "Password reset successful! 🎉",
        type: "success",
      });

      // Redirect to login page after 2 seconds
      setTimeout(() => {
        navigate("/");
      }, 2000);

    } catch (error) {
      console.error("❌ Reset password error:", error.response?.data || error.message);
      setMessage({
        text: error.response?.data?.message || "Failed to reset password. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        {/* Step indicator — step 3 is active */}
        <div className="step-indicator">
          <span className="step-dot completed"></span>
          <span className="step-dot completed"></span>
          <span className="step-dot active"></span>
        </div>

        {resetDone ? (
          // Success state — show checkmark and message
          <>
            <div className="success-icon">✅</div>
            <h1 className="login-title">Password Reset!</h1>
            <p className="login-subtitle">
              Your password has been updated successfully
            </p>
            <p className="info-text">
              Redirecting to login page...
            </p>
          </>
        ) : (
          // Form state — show password inputs
          <>
            <h1 className="login-title">🔑 New Password</h1>
            <p className="login-subtitle">
              Create a strong password for your account
            </p>

            {/* Success/Error Message */}
            {message.text && (
              <p className={`login-message ${message.type}`}>
                {message.text}
              </p>
            )}

            <input
              type="password"
              name="newPassword"
              placeholder="New Password (min 6 characters)"
              value={formData.newPassword}
              onChange={handleChange}
              className="login-input"
              disabled={loading}
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm New Password"
              value={formData.confirmPassword}
              onChange={handleChange}
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
                  Resetting...
                </>
              ) : (
                "Reset Password"
              )}
            </button>

            <p className="login-footer-text">
              <Link to="/" className="login-link">← Back to Login</Link>
            </p>
          </>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
