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

  // Hide Navbar on Login and Signup pages
  const hideNavbar = location.pathname === "/" || location.pathname === "/signup";

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
