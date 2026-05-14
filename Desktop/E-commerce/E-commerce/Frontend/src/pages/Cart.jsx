// ==========================================
//  Cart Page — View & Manage Cart Items
// ==========================================
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart,
    removeFromCart,
    updateQuantity,
    getCartTotal,
    getCartOriginalTotal,
    clearCart,
  } = useContext(CartContext);

  const totalSavings = getCartOriginalTotal() - getCartTotal();

  // Empty cart state
  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-empty">
          <div className="cart-empty-icon">🛒</div>
          <h2>Your cart is empty</h2>
          <p>Looks like you haven't added anything yet!</p>
          <Link to="/home" className="cart-shop-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  const handleCheckout = () => {
    navigate("/checkout", { state: { fromCart: true } });
  };

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="cart-title">
          Shopping Cart{" "}
          <span className="cart-count">({cart.length} items)</span>
        </h1>
        <button className="cart-clear-btn" onClick={clearCart}>
          🗑️ Clear Cart
        </button>
      </div>

      <div className="cart-layout">
        {/* Cart Items */}
        <div className="cart-items">
          {cart.map((item) => {
            const discount = Math.round(
              ((item.originalPrice - item.price) / item.originalPrice) * 100
            );
            return (
              <div key={item.id} className="cart-item">
                <Link
                  to={`/product/${item.id}`}
                  className="cart-item-image-link"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="cart-item-image"
                  />
                </Link>

                <div className="cart-item-details">
                  <Link
                    to={`/product/${item.id}`}
                    className="cart-item-title-link"
                  >
                    <h3 className="cart-item-title">{item.title}</h3>
                  </Link>
                  <p className="cart-item-category">{item.category}</p>

                  <div className="cart-item-pricing">
                    <span className="cart-item-price">
                      ₹{item.price.toLocaleString()}
                    </span>
                    <span className="cart-item-original">
                      ₹{item.originalPrice.toLocaleString()}
                    </span>
                    {discount > 0 && (
                      <span className="cart-item-discount">
                        {discount}% off
                      </span>
                    )}
                  </div>

                  <div className="cart-item-actions">
                    <div className="quantity-control">
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <span className="qty-value">{item.quantity}</span>
                      <button
                        className="qty-btn"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="cart-remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Price Summary Sidebar */}
        <div className="cart-summary">
          <h2 className="cart-summary-title">Price Details</h2>

          <div className="cart-summary-rows">
            <div className="summary-row">
              <span>Price ({cart.length} items)</span>
              <span>₹{getCartOriginalTotal().toLocaleString()}</span>
            </div>
            <div className="summary-row discount-row">
              <span>Discount</span>
              <span>−₹{totalSavings.toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery</span>
              <span className="free-tag">FREE</span>
            </div>
            <div className="summary-row total-row">
              <span>Total Amount</span>
              <span>₹{getCartTotal().toLocaleString()}</span>
            </div>
          </div>

          {totalSavings > 0 && (
            <div className="cart-savings-banner">
              You'll save ₹{totalSavings.toLocaleString()} on this order 🎉
            </div>
          )}

          <button className="cart-checkout-btn" onClick={handleCheckout}>
            💳 Proceed to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
