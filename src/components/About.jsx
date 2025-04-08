import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About EcoMarket</h1>

      <div className="about-row">
        <div className="about-card">
          <h2>🌱 Our Mission</h2>
          <p>
            At EcoMarket, our mission is to promote sustainable living by
            connecting consumers with eco-friendly, handmade, and local artisan
            products.
          </p>
        </div>

        <div className="about-card">
          <h2>🌍 Our Vision</h2>
          <p>
            We envision a world where every purchase supports both the planet
            and the people behind it.
          </p>
        </div>

        <div className="about-card">
          <h2>📖 Our Story</h2>
          <p>
            Born out of love for the environment and admiration for local
            crafts, EcoMarket is a platform that brings mindful consumers and
            passionate creators together.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
