import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home">
      <header className="header">
        <h1 className="logo">Handmade Goods</h1>
        <p className="tagline">Eco-Friendly Products</p>
        <div className="header-buttons">
          <button className="header-btn">Add to Cart</button>
          <button className="header-btn">More Products</button>
        </div>
      </header>

      <section className="featured">
        <img src="featured-image.png" alt="Featured Product" className="featured-img" />
        <div className="featured-description">
          <h2>Eco-Friendly Handcrafted Items</h2>
          <button className="featured-btn">Shop Now</button>
        </div>
      </section>

      <section className="products">
        <h2 className="product-title">Products</h2>
        <div className="product-grid">
          <div className="product-card">
            <img src="product1.png" alt="Product 1" />
            <h3>Product Name</h3>
            <button className="add-to-cart">Add to Cart</button>
          </div>

          <div className="product-card">
            <img src="product2.png" alt="Product 2" />
            <h3>Product Name</h3>
            <button className="add-to-cart">Add to Cart</button>
          </div>

        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Handmade Goods. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
