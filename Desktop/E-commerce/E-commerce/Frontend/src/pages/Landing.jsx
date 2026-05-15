// Landing Page — ShopVerse public homepage
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Landing.css";

const Landing = () => {
  const navigate = useNavigate();
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); }
        });
      },
      { threshold: 0.1 }
    );
    revealRefs.current.forEach((el) => { if (el) io.observe(el); });
    return () => io.disconnect();
  }, []);

  const addRevealRef = (el) => { if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el); };

  return (
    <div className="landing-page">
      {/* NAV */}
      <nav className="landing-nav">
        <span className="landing-logo">Shop<span>Verse</span></span>
        <ul className="landing-nav-links">
          <li><a href="#categories">Shop</a></li>
          <li><a href="#deals">Deals</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="landing-nav-actions">
          <button className="btn-ghost" onClick={() => navigate("/login")}>Log in</button>
          <button className="btn-primary-nav" onClick={() => navigate("/signup")}>Sign up free</button>
        </div>
      </nav>

      {/* HERO */}
      <section className="landing-hero">
        <div className="hero-bg"></div>
        <div className="hero-grid-overlay"></div>
        <div className="landing-hero-content">
          <div className="hero-badge">Over 50 million products</div>
          <h1>Shop <em>Everything</em>,<br />Delivered Fast</h1>
          <p className="hero-sub">Your one-stop marketplace for electronics, fashion, home goods, and more — with lightning-fast delivery and unbeatable prices.</p>
          <div className="hero-cta">
            <a href="#deals" className="btn-hero">Start Shopping <span className="btn-hero-arrow">→</span></a>
            <button className="btn-outline-hero" onClick={() => navigate("/signup")}>Create free account</button>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">50M+</div><div className="stat-label">Products listed</div></div>
            <div><div className="stat-num">4.9★</div><div className="stat-label">Average rating</div></div>
            <div><div className="stat-num">24hr</div><div className="stat-label">Express delivery</div></div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="product-cards-float">
            <div className="float-card fc1"><div className="float-card-img">🎧</div><div className="float-card-badge">BESTSELLER</div><div className="float-card-name">Wireless Headphones Pro</div><div className="float-card-price">₹4,299</div></div>
            <div className="float-card fc2"><div className="float-card-img">🌿</div><div className="float-card-badge">ECO PICK</div><div className="float-card-name">Bamboo Comfort Chair</div><div className="float-card-price">₹12,499</div></div>
            <div className="float-card fc3"><div className="float-card-img">👟</div><div className="float-card-badge">NEW</div><div className="float-card-name">Urban Runner Sneakers</div><div className="float-card-price">₹6,799</div></div>
            <div className="float-card fc4"><div className="float-card-img">📱</div><div className="float-card-badge">HOT DEAL</div><div className="float-card-name">Smartwatch Ultra</div><div className="float-card-price">₹8,999</div></div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="landing-categories" id="categories" ref={addRevealRef}>
        <div className="section-label">Browse by Category</div>
        <div className="section-title">What are you<br />looking for?</div>
        <div className="cat-grid">
          <div className="cat-item" onClick={() => navigate("/login")}><div className="cat-icon">📱</div><div className="cat-name">Electronics</div></div>
          <div className="cat-item" onClick={() => navigate("/login")}><div className="cat-icon">👗</div><div className="cat-name">Fashion</div></div>
          <div className="cat-item" onClick={() => navigate("/login")}><div className="cat-icon">🏠</div><div className="cat-name">Home &amp; Living</div></div>
          <div className="cat-item" onClick={() => navigate("/login")}><div className="cat-icon">🎮</div><div className="cat-name">Gaming</div></div>
          <div className="cat-item" onClick={() => navigate("/login")}><div className="cat-icon">💄</div><div className="cat-name">Beauty</div></div>
          <div className="cat-item" onClick={() => navigate("/login")}><div className="cat-icon">🚗</div><div className="cat-name">Automotive</div></div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="landing-features reveal" ref={addRevealRef}>
        <div className="features-header"><div className="section-label">Why ShopVerse</div><div className="section-title">Shopping,<br />reimagined</div></div>
        <div className="features-grid">
          <div className="feat-card"><div className="feat-icon">⚡</div><div className="feat-title">Lightning Fast Delivery</div><p className="feat-desc">Same-day delivery in 100+ cities. Track your package in real time, down to the minute.</p></div>
          <div className="feat-card"><div className="feat-icon">🛡️</div><div className="feat-title">Buyer Protection</div><p className="feat-desc">Every purchase is protected. Easy returns, full refunds, and 24/7 dispute resolution.</p></div>
          <div className="feat-card"><div className="feat-icon">💎</div><div className="feat-title">ShopVerse Prime</div><p className="feat-desc">Unlimited free shipping, exclusive deals, early access to sales, and premium support.</p></div>
          <div className="feat-card"><div className="feat-icon">🤖</div><div className="feat-title">AI Recommendations</div><p className="feat-desc">Our smart engine learns your taste and surfaces the products you&apos;ll love before you search.</p></div>
          <div className="feat-card"><div className="feat-icon">💳</div><div className="feat-title">Flexible Payments</div><p className="feat-desc">Pay with UPI, cards, wallets, or buy now pay later — zero interest EMIs available.</p></div>
          <div className="feat-card"><div className="feat-icon">🌍</div><div className="feat-title">Verified Sellers</div><p className="feat-desc">Every seller is vetted. Authentic products, honest reviews, and transparent ratings.</p></div>
        </div>
      </section>

      {/* DEALS */}
      <section className="landing-deals reveal" id="deals" ref={addRevealRef}>
        <div className="deals-header">
          <div><div className="section-label">Today&apos;s Picks</div><div className="section-title">Hot Deals</div></div>
          <button className="view-all" onClick={() => navigate("/login")}>View all deals →</button>
        </div>
        <div className="deals-grid">
          <div className="deal-card" onClick={() => navigate("/login")}><div className="deal-img d1">🎧<div className="deal-discount">−42%</div></div><div className="deal-body"><div className="deal-name">Sony WH-1000XM5</div><div className="deal-rating">★★★★★ (4.9)</div><div className="deal-pricing"><span className="deal-price">₹19,999</span><span className="deal-original">₹34,990</span></div></div></div>
          <div className="deal-card" onClick={() => navigate("/login")}><div className="deal-img d2">💜<div className="deal-discount">−28%</div></div><div className="deal-body"><div className="deal-name">iPad Air M2 (2024)</div><div className="deal-rating">★★★★★ (4.8)</div><div className="deal-pricing"><span className="deal-price">₹54,999</span><span className="deal-original">₹76,900</span></div></div></div>
          <div className="deal-card" onClick={() => navigate("/login")}><div className="deal-img d3">🎽<div className="deal-discount">−60%</div></div><div className="deal-body"><div className="deal-name">Nike Dri-FIT Bundle</div><div className="deal-rating">★★★★☆ (4.6)</div><div className="deal-pricing"><span className="deal-price">₹2,799</span><span className="deal-original">₹6,999</span></div></div></div>
          <div className="deal-card" onClick={() => navigate("/login")}><div className="deal-img d4">☕<div className="deal-discount">−35%</div></div><div className="deal-body"><div className="deal-name">Nespresso Vertuo Next</div><div className="deal-rating">★★★★★ (4.7)</div><div className="deal-pricing"><span className="deal-price">₹11,999</span><span className="deal-original">₹18,499</span></div></div></div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="landing-about reveal" id="about" ref={addRevealRef}>
        <div className="about-visual">
          <div className="about-big-num">10+</div>
          <div className="about-card-stack">
            <div className="about-card"><div className="about-card-num">50M+</div><div className="about-card-label">Products across 500+ categories</div></div>
            <div className="about-card"><div className="about-card-num">12M+</div><div className="about-card-label">Happy customers served</div></div>
            <div className="about-card"><div className="about-card-num">98.7%</div><div className="about-card-label">On-time delivery rate</div></div>
          </div>
        </div>
        <div className="about-content">
          <div className="section-label">About Us</div>
          <div className="section-title">Built for the<br />way you shop</div>
          <p>ShopVerse was founded in 2014 with one mission: to make great products accessible to everyone, everywhere.</p>
          <p>We partner with over 200,000 verified sellers — from homegrown artisans to global brands — ensuring you always find exactly what you&apos;re looking for.</p>
          <p>Every decision we make is driven by our customers. From our blazing-fast logistics to our AI-powered search — it&apos;s all built to save you time.</p>
          <div className="about-pillars">
            <span className="pillar">🌱 Sustainability</span>
            <span className="pillar">🤝 Fair Trade</span>
            <span className="pillar">🔒 Privacy-first</span>
            <span className="pillar">♻️ Carbon Neutral</span>
            <span className="pillar">🇮🇳 Proudly Indian</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="landing-contact reveal" id="contact" ref={addRevealRef}>
        <div className="contact-inner">
          <div className="section-label">Get in Touch</div>
          <div className="section-title">We&apos;d love to<br />hear from you</div>
          <p>Questions, feedback, or partnership inquiries — our team responds within 2 hours.</p>
          <div className="contact-form">
            <div className="form-row">
              <div className="form-group-landing"><label>First name</label><input type="text" className="form-control-landing" placeholder="Arjun" /></div>
              <div className="form-group-landing"><label>Last name</label><input type="text" className="form-control-landing" placeholder="Sharma" /></div>
            </div>
            <div className="form-group-landing"><label>Email address</label><input type="email" className="form-control-landing" placeholder="arjun@example.com" /></div>
            <div className="form-group-landing"><label>Subject</label><input type="text" className="form-control-landing" placeholder="Order issue / Partnership / Feedback..." /></div>
            <div className="form-group-landing"><label>Message</label><textarea className="form-control-landing" placeholder="Tell us what's on your mind..."></textarea></div>
            <button className="btn-hero-full">Send Message →</button>
          </div>
          <div className="contact-channels">
            <div className="channel"><span className="channel-icon">💬</span>Live Chat</div>
            <div className="channel"><span className="channel-icon">📞</span>1800-123-4567</div>
            <div className="channel"><span className="channel-icon">✉️</span>help@shopverse.in</div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="landing-footer">
        <div className="footer-logo">Shop<span>Verse</span></div>
        <ul className="footer-links">
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Seller Hub</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <div className="footer-copy">© 2026 ShopVerse. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Landing;
