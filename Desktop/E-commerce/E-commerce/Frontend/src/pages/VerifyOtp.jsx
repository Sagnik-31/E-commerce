// ==========================================
//  VerifyOtp Page — Step 2 of Password Reset
// ==========================================
//  User enters the 6-digit OTP they received via email
//  Backend verifies the OTP
//  On success → navigates to /reset-password
//
import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { verifyOtp, forgotPassword } from "../api/api";
import "../styles/Login.css";
import "../styles/ForgotPassword.css";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get email from navigation state (passed from ForgotPassword page)
  const email = location.state?.email || "";

  // State for the 6 OTP digits (each box is one digit)
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [resending, setResending] = useState(false);
  const [message, setMessage] = useState({ text: "", type: "" });

  // Refs for the 6 input boxes (so we can auto-focus the next one)
  const inputRefs = useRef([]);

  // If no email in state, redirect back to forgot password
  useEffect(() => {
    if (!email) {
      navigate("/forgot-password");
    }
  }, [email, navigate]);

  // Handle typing in an OTP box
  const handleChange = (index, value) => {
    // Only allow single digits (0-9)
    if (value && !/^\d$/.test(value)) return;

    // Update the digit at this index
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next box when a digit is entered
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  // Handle backspace — move to previous box
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  // Handle paste — fill all 6 boxes from clipboard
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    // Check if pasted content is exactly 6 digits
    if (/^\d{6}$/.test(pastedData)) {
      const digits = pastedData.split("");
      setOtp(digits);
      // Focus the last box
      inputRefs.current[5].focus();
    }
  };

  // Submit OTP for verification
  const handleSubmit = async (e) => {
    e.preventDefault();

    const otpString = otp.join("");

    // Validation — all 6 digits must be filled
    if (otpString.length !== 6) {
      setMessage({ text: "Please enter the complete 6-digit OTP", type: "error" });
      return;
    }

    setLoading(true);
    setMessage({ text: "", type: "" });

    try {
      console.log("📤 Verifying OTP for:", email);

      const response = await verifyOtp({ email, otp: otpString });

      console.log("📥 Response:", response.data);

      setMessage({ text: "OTP verified! ✅", type: "success" });

      // Navigate to reset password page
      // Pass email AND otp via state (needed for the final reset call)
      setTimeout(() => {
        navigate("/reset-password", { state: { email, otp: otpString } });
      }, 1500);

    } catch (error) {
      console.error("❌ OTP verification error:", error.response?.data || error.message);
      setMessage({
        text: error.response?.data?.message || "Verification failed. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  // Resend OTP
  const handleResend = async () => {
    setResending(true);
    setMessage({ text: "", type: "" });
    setOtp(["", "", "", "", "", ""]); // Clear current OTP

    try {
      console.log("📤 Resending OTP for:", email);

      await forgotPassword({ email });

      setMessage({ text: "New OTP sent to your email! 📧", type: "success" });
      // Focus the first box
      inputRefs.current[0].focus();
    } catch (error) {
      console.error("❌ Resend error:", error.response?.data || error.message);
      setMessage({
        text: error.response?.data?.message || "Failed to resend OTP.",
        type: "error",
      });
    } finally {
      setResending(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-card" onSubmit={handleSubmit}>
        {/* Step indicator — step 2 is active */}
        <div className="step-indicator">
          <span className="step-dot completed"></span>
          <span className="step-dot active"></span>
          <span className="step-dot"></span>
        </div>

        <h1 className="login-title">📧 Verify OTP</h1>
        <p className="login-subtitle">Enter the 6-digit code sent to your email</p>

        <p className="info-text">
          We sent a code to <strong>{email}</strong>
        </p>

        {/* Success/Error Message */}
        {message.text && (
          <p className={`login-message ${message.type}`}>
            {message.text}
          </p>
        )}

        {/* 6 OTP Input Boxes */}
        <div className="otp-input-group" onPaste={handlePaste}>
          {otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              ref={(el) => (inputRefs.current[index] = el)}
              className={`otp-box ${digit ? "filled" : ""}`}
              disabled={loading}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <p className="timer-text">⏰ OTP is valid for 10 minutes</p>

        <button
          type="submit"
          className="login-button"
          disabled={loading}
        >
          {loading ? (
            <>
              <span className="loading-spinner"></span>
              Verifying...
            </>
          ) : (
            "Verify OTP"
          )}
        </button>

        {/* Resend OTP */}
        <div className="resend-section">
          Didn&apos;t receive the code?{" "}
          <button
            type="button"
            className="resend-link"
            onClick={handleResend}
            disabled={resending}
          >
            {resending ? "Sending..." : "Resend OTP"}
          </button>
        </div>

        <p className="login-footer-text">
          <Link to="/forgot-password" className="login-link">← Back</Link>
        </p>
      </form>
    </div>
  );
};

export default VerifyOtp;
