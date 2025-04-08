import React from "react";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Whether you're a customer, a creator, or just curious about EcoMarket — reach out!
      </p>

      <div className="contact-card">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />

          <input type="email" placeholder="you@example.com" required />

          <textarea rows="5" placeholder="Type your message..." required />

          <button type="submit">Send Message</button>
        </form>

        <div className="contact-info">
          <h2>📬 Reach Us At</h2>
          <p>Email: support@ecomarket.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: 123 Eco Lane, Green City, Earth 🌍</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
