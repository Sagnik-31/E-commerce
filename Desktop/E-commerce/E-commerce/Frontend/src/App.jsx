// ==========================================
//  App.jsx — Root Component with Router
// ==========================================
import { BrowserRouter, useLocation } from "react-router-dom";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";
import "./styles/global.css";

// Wrapper to conditionally show Navbar
const Layout = () => {
  const location = useLocation();

  // Hide Navbar on Landing, Login, Signup, and password reset pages
  const hideNavbarPaths = ["/", "/login", "/signup", "/forgot-password", "/verify-otp", "/reset-password"];
  const hideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <WishlistProvider>
          <Layout />
        </WishlistProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
