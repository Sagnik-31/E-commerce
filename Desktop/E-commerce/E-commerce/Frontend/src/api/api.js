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

export default API;