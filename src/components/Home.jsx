import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Home.css";

import About from "./About";
import Products from "./Products"; 
import ContactUs from "./ContactUs";

const dummyProducts = [
  {
    id: 1,
    title: "Handmade Jute Bag",
    price: "₹499",
    image: "/images/jute-bag.jpg",
  },
  {
    id: 2,
    title: "Eco-Friendly Notebook",
    price: "₹199",
    image: "/images/notebook.jpg",
  },
  {
    id: 3,
    title: "Clay Water Bottle",
    price: "₹349",
    image: "/images/clay-bottle.jpg",
  },
  {
    id: 4,
    title: "Organic Cotton T-Shirt",
    price: "₹799",
    image: "/images/tshirt.jpg",
  },
];


const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to EcoMarket</h1>
          <p>Shop sustainably with handmade, eco-friendly products.</p>
          <button className="hero-btn" onClick={() => navigate("/products")}>
            Start Shopping
          </button>
        </div>
      </section>
    
      <About />
    
      <section className="featured-products">
        <h2>Our Products</h2>
        <div className="product-card-container">
          {dummyProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.title} />
              <h5>{product.title}</h5>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
        <div className="view-more-btn">
          <button onClick={() => navigate("/products")}>View More Products</button>
        </div>
      </section>

      <ContactUs />

    </div>
  );
};

export default Home;
