// ==========================================
//  Wishlist Page
// ==========================================
import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import "../styles/Wishlist.css";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  // Empty wishlist state
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">
        <div className="wishlist-empty">
          <p className="empty-icon">💔</p>
          <h2>Your wishlist is empty</h2>
          <p>Start adding products you love!</p>
          <Link to="/" className="shop-now-btn">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="wishlist-page">
      <h1 className="wishlist-title">
        My Wishlist <span className="wishlist-count">({wishlist.length} items)</span>
      </h1>

      <div className="wishlist-grid">
        {wishlist.map((product) => (
          <div key={product.id} className="wishlist-card">
            <Link to={`/product/${product.id}`} className="wishlist-card-link">
              <img
                src={product.image}
                alt={product.title}
                className="wishlist-image"
              />
              <div className="wishlist-info">
                <h3 className="wishlist-item-title">{product.title}</h3>
                <p className="wishlist-item-price">
                  ₹{product.price.toLocaleString()}
                  <span className="wishlist-item-original">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                </p>
              </div>
            </Link>
            <button
              className="wishlist-remove-btn"
              onClick={() => removeFromWishlist(product.id)}
            >
              ✕ Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
