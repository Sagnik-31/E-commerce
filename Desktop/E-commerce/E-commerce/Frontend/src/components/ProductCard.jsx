// ==========================================
//  ProductCard Component — Reusable product card
// ==========================================
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);
  const { addToCart, isInCart } = useContext(CartContext);

  const [addedAnimation, setAddedAnimation] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);

  // Calculate discount percentage
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const toggleWishlist = (e) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation();
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (e) => {
    e.preventDefault(); // prevent Link navigation
    e.stopPropagation();
    addToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  return (
    <Link to={`/product/${product.id}`} className="product-card">
      {/* Discount Badge */}
      {discount > 0 && (
        <span className="product-discount">{discount}% OFF</span>
      )}

      {/* Wishlist Heart Button */}
      <button
        className={`product-heart ${inWishlist ? "active" : ""}`}
        onClick={toggleWishlist}
      >
        {inWishlist ? "❤️" : "🤍"}
      </button>

      {/* Product Image */}
      <div className="product-image-wrapper">
        <img src={product.image} alt={product.title} className="product-image" />
      </div>

      {/* Product Info */}
      <div className="product-info">
        <p className="product-category">{product.category}</p>
        <h3 className="product-title">{product.title}</h3>

        <div className="product-pricing">
          <span className="product-price">₹{product.price.toLocaleString()}</span>
          <span className="product-original">
            ₹{product.originalPrice.toLocaleString()}
          </span>
        </div>

        {/* Star Rating */}
        <div className="product-rating">
          {"⭐".repeat(Math.floor(product.rating))}
          <span className="rating-text">{product.rating}</span>
        </div>

        {/* Add to Cart Button */}
        <button
          className={`product-add-cart ${inCart ? "in-cart" : ""} ${addedAnimation ? "added" : ""}`}
          onClick={handleAddToCart}
          id={`add-to-cart-${product.id}`}
        >
          {addedAnimation ? (
            <>✓ Added</>
          ) : inCart ? (
            <>🛒 Add More</>
          ) : (
            <>🛒 Add to Cart</>
          )}
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;
