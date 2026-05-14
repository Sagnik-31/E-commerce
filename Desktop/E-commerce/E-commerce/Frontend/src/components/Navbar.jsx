// ==========================================
//  Navbar Component
// ==========================================
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useContext, useState, useEffect, useRef } from "react";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "../styles/Navbar.css";

const Navbar = () => {
  const { wishlist } = useContext(WishlistContext);
  const { getCartCount } = useContext(CartContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const inputRef = useRef(null);

  const cartCount = getCartCount();

  // Sync local input with URL search param
  const [searchValue, setSearchValue] = useState(
    searchParams.get("search") || ""
  );

  // Update input when URL search param changes (e.g., back/forward navigation)
  useEffect(() => {
    setSearchValue(searchParams.get("search") || "");
  }, [searchParams]);

  // Check if user is logged in
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleSearch = (query) => {
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/home?search=${encodeURIComponent(trimmed)}`);
    } else {
      navigate("/home");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch(searchValue);
      inputRef.current?.blur();
    }
    if (e.key === "Escape") {
      setSearchValue("");
      handleSearch("");
      inputRef.current?.blur();
    }
  };

  const handleClear = () => {
    setSearchValue("");
    handleSearch("");
    inputRef.current?.focus();
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <Link to="/home" className="nav-logo">
        🛒 ShopVerse
      </Link>

      {/* Search Bar */}
      <div className="nav-search">
        <div className="nav-search-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search products, categories..."
          className="nav-search-input"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {searchValue && (
          <button className="nav-search-clear" onClick={handleClear} aria-label="Clear search">
            ✕
          </button>
        )}
      </div>

      {/* Nav Links */}
      <div className="nav-links">
        <Link to="/wishlist" className="nav-link wishlist-link">
          ❤️ Wishlist
          {wishlist.length > 0 && (
            <span className="wishlist-badge">{wishlist.length}</span>
          )}
        </Link>

        {/* Cart Link */}
        <Link to="/cart" className="nav-link cart-link" id="nav-cart-link">
          <svg className="cart-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1" />
            <circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          </svg>
          Cart
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </Link>

        {token ? (
          <button className="nav-link nav-btn" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link to="/" className="nav-link nav-btn-primary">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
