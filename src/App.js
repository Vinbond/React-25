import React from "react";
import "./App.css";

const categories = [
  { name: "Women", emoji: "👩", color: "#fce4ec" },
  { name: "Men", emoji: "👨", color: "#e3f2fd" },
  { name: "Kids", emoji: "🧒", color: "#fff3cd" },
  { name: "Home", emoji: "🏠", color: "#e8f5e9" },
  { name: "Beauty", emoji: "💄", color: "#f3e5f5" },
  { name: "Brands", emoji: "🏷️", color: "#e0f2f1" },
  { name: "Offers", emoji: "🔥", color: "#ffebee" },
];

const products = [
  {
    name: "Printed Kurta",
    price: "₹1,299",
    oldPrice: "₹1,999",
    category: "Women",
    image: "https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=500",
  },
  {
    name: "Casual Shirt",
    price: "₹1,499",
    oldPrice: "₹2,199",
    category: "Men",
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  },
  {
    name: "Girls T-Shirt",
    price: "₹799",
    oldPrice: "₹999",
    category: "Kids",
    image: "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?w=500",
  },
  {
    name: "Polo T-Shirt",
    price: "₹999",
    oldPrice: "₹1,499",
    category: "Men",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
  },
  {
    name: "Midi Dress",
    price: "₹1,999",
    oldPrice: "₹2,999",
    category: "Women",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
  },
  {
    name: "Cushion Cover",
    price: "₹499",
    oldPrice: "₹799",
    category: "Home",
    image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500",
  },
];

function Header() {
  return (
    <header className="header">
      <div className="logo">pantaloons</div>

      <nav>
        <a href="#">Women</a>
        <a href="#">Men</a>
        <a href="#">Kids</a>
        <a href="#">Home</a>
        <a href="#">Beauty</a>
        <a href="#">Brands</a>
        <a href="#">Offers</a>
      </nav>

      <div className="header-actions">
        <div className="search">
          🔍
          <input
            type="text"
            placeholder="Search for products, brands and more..."
          />
        </div>

        <button className="icon-btn">👤</button>
        <button className="icon-btn">🛒</button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="small-title">NEW SEASON</p>

        <h1>
          Style for
          <br />
          Every You
        </h1>

        <p className="hero-description">
          Discover the latest fashion trends
          <br />
          for men, women and kids.
        </p>

        <button className="shop-btn">Shop Now →</button>
      </div>

      <div className="hero-image">
        👨‍👩‍👧
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="categories">
      {categories.map((category) => (
        <div
          className="category-card"
          style={{ backgroundColor: category.color }}
          key={category.name}
        >
          <div className="category-icon">{category.emoji}</div>

          <div className="category-footer">
            <span>{category.name}</span>
            <span>→</span>
          </div>
        </div>
      ))}
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <span className="badge">Trending</span>
      </div>

      <div className="product-info">
        <p className="product-category">{product.category}</p>

        <h3>{product.name}</h3>

        <div className="price">
          <strong>{product.price}</strong>
          <del>{product.oldPrice}</del>
        </div>

        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
}

function Products() {
  return (
    <section className="products-section">
      <div className="section-header">
        <h2>Trending Now</h2>
        <button>View All →</button>
      </div>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            product={product}
            key={product.name}
          />
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <Categories />

        <Products />
      </main>

      <footer>
        <h2>pantaloons</h2>
        <p>Fashion for every you.</p>
        <p>© 2026 Fashion Store</p>
      </footer>
    </>
  );
}

export default App;
