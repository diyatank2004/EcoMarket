import React from "react";
import "../css/Footer.css";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <img src="/images/Market.png" alt="EcoMarket" />
          <h3>EcoMarket</h3>
        </div>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/products">Shop</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-contact">
          <p>Email: support@ecomarket.com</p>
          <p>Phone: +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-socials">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} EcoMarket. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
