import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/api/auth",
});

// ── Debug Interceptors ──────────────────
// These log every request and response in the browser console
API.interceptors.request.use((config) => {
  console.log(`📤 [${config.method.toUpperCase()}] ${config.baseURL}${config.url}`);
  console.log("   Request body:", config.data);
  return config;
});

API.interceptors.response.use(
  (response) => {
    console.log("📥 Response:", response.status, response.data);
    return response;
  },
  (error) => {
    console.error("❌ API Error:", error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

export const registerUser = async (formData) => {
  return await API.post("/register", formData);
};

export const loginUser = async (formData) => {
  return await API.post("/login", formData);
};

// ── Password Reset API Calls ────────────────
// Step 1: Send OTP to user's email
export const forgotPassword = async (data) => {
  return await API.post("/forgot-password", data);
};

// Step 2: Verify the OTP
export const verifyOtp = async (data) => {
  return await API.post("/verify-otp", data);
};

// Step 3: Reset password with new password
export const resetPassword = async (data) => {
  return await API.post("/reset-password", data);
};

export default API;