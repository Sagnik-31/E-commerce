// ==========================================
//  Product Details Page
// ==========================================
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { getProductById } from "../data/products";
import { WishlistContext } from "../context/WishlistContext";
import { CartContext } from "../context/CartContext";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams(); // get product ID from URL
  const navigate = useNavigate();
  const { addToWishlist, removeFromWishlist, isInWishlist } =
    useContext(WishlistContext);
  const { addToCart, isInCart } = useContext(CartContext);

  const [addedAnimation, setAddedAnimation] = useState(false);

  const product = getProductById(id);

  // If product not found
  if (!product) {
    return (
      <div className="not-found">
        <p className="not-found-icon">😕</p>
        <h2>Product not found</h2>
        <button className="back-btn" onClick={() => navigate("/")}>
          Go back to shop
        </button>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id);
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = () => {
    addToCart(product);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1200);
  };

  const handleBuyNow = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <div className="product-details-page">
      <button className="back-link" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <div className="details-container">
        {/* Product Image */}
        <div className="details-image-section">
          <img src={product.image} alt={product.title} className="details-image" />
          {discount > 0 && (
            <span className="details-discount">{discount}% OFF</span>
          )}
        </div>

        {/* Product Info */}
        <div className="details-info-section">
          <p className="details-category">{product.category}</p>
          <h1 className="details-title">{product.title}</h1>

          {/* Rating */}
          <div className="details-rating">
            {"⭐".repeat(Math.floor(product.rating))}
            <span>{product.rating} / 5</span>
          </div>

          {/* Pricing */}
          <div className="details-pricing">
            <span className="details-price">
              ₹{product.price.toLocaleString()}
            </span>
            <span className="details-original">
              ₹{product.originalPrice.toLocaleString()}
            </span>
            <span className="details-save">
              You save ₹{(product.originalPrice - product.price).toLocaleString()}
            </span>
          </div>

          {/* Description */}
          <p className="details-description">{product.description}</p>

          {/* Action Buttons */}
          <div className="details-actions">
            <button
              className={`wishlist-btn ${inWishlist ? "in-wishlist" : ""}`}
              onClick={toggleWishlist}
            >
              {inWishlist ? "❤️ In Wishlist" : "🤍 Add to Wishlist"}
            </button>

            <button
              className={`add-cart-btn ${inCart ? "in-cart" : ""} ${addedAnimation ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {addedAnimation ? "✓ Added to Cart" : inCart ? "🛒 Add More" : "🛒 Add to Cart"}
            </button>

            <button className="buy-btn" onClick={handleBuyNow}>
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
