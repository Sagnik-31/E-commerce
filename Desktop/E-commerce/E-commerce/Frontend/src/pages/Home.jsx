// ==========================================
//  Home Page — Product Listing with Infinite Scroll
// ==========================================
import { useState, useEffect, useRef, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import products, { categories } from "../data/products";
import ProductCard from "../components/ProductCard";
import "../styles/Home.css";

const PRODUCTS_PER_PAGE = 8;

const Home = () => {
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  // Active category filter
  const [activeCategory, setActiveCategory] = useState("All");

  // Infinite scroll state
  const [visibleCount, setVisibleCount] = useState(PRODUCTS_PER_PAGE);
  const [isLoading, setIsLoading] = useState(false);
  const observerRef = useRef(null);
  const sentinelRef = useRef(null);

  // Filter products by category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      product.title.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  // Products currently visible on screen
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredProducts.length;

  // Reset visible count when filters or search change
  useEffect(() => {
    setVisibleCount(PRODUCTS_PER_PAGE);
  }, [searchQuery, activeCategory]);

  // Load more products with simulated delay for smooth UX
  const loadMore = useCallback(() => {
    if (isLoading || !hasMore) return;
    setIsLoading(true);
    // Simulate network delay for a smooth loading experience
    setTimeout(() => {
      setVisibleCount((prev) =>
        Math.min(prev + PRODUCTS_PER_PAGE, filteredProducts.length)
      );
      setIsLoading(false);
    }, 500);
  }, [isLoading, hasMore, filteredProducts.length]);

  // Intersection Observer for infinite scroll
  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.1, rootMargin: "100px" }
    );

    if (sentinelRef.current) {
      observerRef.current.observe(sentinelRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [hasMore, isLoading, loadMore]);

  return (
    <div className="home-page">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Discover Amazing Deals</h1>
          <p>Shop the latest products at unbeatable prices</p>
        </div>
      </div>

      {/* Category Filters */}
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Search Results Info */}
      {searchQuery && (
        <div className="search-info">
          <p>
            Showing results for "<strong>{searchQuery}</strong>" (
            {filteredProducts.length} found)
          </p>
        </div>
      )}

      {/* Product Count */}
      {!searchQuery && (
        <div className="product-count">
          <p>
            Showing {visibleProducts.length} of {filteredProducts.length}{" "}
            products
          </p>
        </div>
      )}

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <>
          <div className="product-grid">
            {visibleProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card-wrapper"
                style={{ animationDelay: `${(index % PRODUCTS_PER_PAGE) * 0.06}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Infinite Scroll Sentinel & Loading */}
          {hasMore && (
            <div className="scroll-loader" ref={sentinelRef}>
              {isLoading && (
                <div className="loading-indicator">
                  <div className="loading-spinner">
                    <div className="spinner-ring"></div>
                  </div>
                  <p className="loading-text">Loading more products...</p>
                </div>
              )}
            </div>
          )}

          {/* All Products Loaded */}
          {!hasMore && filteredProducts.length > PRODUCTS_PER_PAGE && (
            <div className="all-loaded">
              <div className="all-loaded-line"></div>
              <p>You've seen all {filteredProducts.length} products ✨</p>
              <div className="all-loaded-line"></div>
            </div>
          )}
        </>
      ) : (
        <div className="empty-state">
          <p className="empty-icon">🔍</p>
          <h2>No products found</h2>
          <p>Try a different search or category</p>
        </div>
      )}
    </div>
  );
};

export default Home;
