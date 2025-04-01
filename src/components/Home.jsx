import React from "react";
import "./Home.css"; // Importing the CSS file

const Home = () => {
  return (
    <div className="hero-section">
      <div className="hero-overlay"></div> 
      <div className="hero-content">
        <h1>Welcome to EcoMarket</h1>
        <h2>Discover Eco-Friendly & Handmade Treasures</h2>
        <p>Your go-to marketplace for handmade, eco-friendly products.Supporting artisans, promoting sustainability, and delivering the finest handmade goods.</p>
        <a href="/shop" className="hero-btn">Shop Now</a>
      </div>
    </div>
  );
};

export default Home;

