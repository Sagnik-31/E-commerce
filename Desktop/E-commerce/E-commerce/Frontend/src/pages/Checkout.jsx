// ==========================================
//  Checkout / Payment Page
// ==========================================
import { useState, useContext } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    cart,
    getCartTotal,
    getCartOriginalTotal,
    clearCart,
  } = useContext(CartContext);

  const singleProduct = location.state?.product;
  const fromCart = location.state?.fromCart;

  const [paymentDone, setPaymentDone] = useState(false);

  // Determine what we're checking out
  const isCartCheckout = fromCart && cart.length > 0;
  const checkoutItems = isCartCheckout
    ? cart
    : singleProduct
    ? [{ ...singleProduct, quantity: 1 }]
    : [];

  // No items to checkout — show fallback
  if (checkoutItems.length === 0 && !paymentDone) {
    return (
      <div className="checkout-page">
        <div className="checkout-empty">
          <p className="empty-icon">🛒</p>
          <h2>No items to checkout</h2>
          <p>Go back and select a product to buy.</p>
          <Link to="/home" className="shop-now-btn">
            Browse Products
          </Link>
        </div>
      </div>
    );
  }

  // Calculate totals
  const totalOriginal = isCartCheckout
    ? getCartOriginalTotal()
    : singleProduct
    ? singleProduct.originalPrice
    : 0;
  const totalPrice = isCartCheckout
    ? getCartTotal()
    : singleProduct
    ? singleProduct.price
    : 0;
  const totalSavings = totalOriginal - totalPrice;

  const handlePayment = () => {
    // Simulate payment processing
    setPaymentDone(true);
    // Clear cart if this was a cart checkout
    if (isCartCheckout) {
      clearCart();
    }
  };

  // Payment success screen
  if (paymentDone) {
    return (
      <div className="checkout-page">
        <div className="payment-success">
          <p className="success-icon">🎉</p>
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
          <p className="order-id">
            Order ID: #SVE{Date.now().toString().slice(-8)}
          </p>
          <button className="continue-btn" onClick={() => navigate("/home")}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1 className="checkout-title">Checkout</h1>

      <div className="checkout-container">
        {/* Order Summary */}
        <div className="order-summary">
          <h2>Order Summary ({checkoutItems.length} {checkoutItems.length === 1 ? 'item' : 'items'})</h2>

          {checkoutItems.map((item) => (
            <div key={item.id} className="order-item">
              <img src={item.image} alt={item.title} className="order-image" />
              <div className="order-item-info">
                <h3>{item.title}</h3>
                <p className="order-category">{item.category}</p>
                {item.quantity > 1 && (
                  <p className="order-qty">Qty: {item.quantity}</p>
                )}
                <p className="order-item-price">
                  ₹{(item.price * (item.quantity || 1)).toLocaleString()}
                </p>
              </div>
            </div>
          ))}

          <div className="order-pricing">
            <div className="price-row">
              <span>Price</span>
              <span>₹{totalOriginal.toLocaleString()}</span>
            </div>
            <div className="price-row discount-row">
              <span>Discount</span>
              <span>-₹{totalSavings.toLocaleString()}</span>
            </div>
            <div className="price-row">
              <span>Delivery</span>
              <span className="free-delivery">FREE</span>
            </div>
            <div className="price-row total-row">
              <span>Total</span>
              <span>₹{totalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Payment Section */}
        <div className="payment-section">
          <h2>Payment</h2>
          <p className="payment-note">
            This is a demo — no real payment is processed.
          </p>

          <button className="pay-now-btn" onClick={handlePayment}>
            💳 Pay ₹{totalPrice.toLocaleString()}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
