import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";
import "../css/Navbar.css";
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaShoppingCart, FaHeart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/signin');
  };

const { cartItems } = useCart();
const { wishlistItems } = useWishlist();


  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" className="fixed-top">
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/">  
          <img 
            src="/images/Market.png" 
            alt="EcoMarket" 
            style={{ height: "45px", marginRight: "15px" }} 
          />
          EcoMarket
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars className="icon" />
        </BootstrapNavbar.Toggle>

        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-4">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="px-4">About</Nav.Link>
            <Nav.Link as={Link} to="/products" className="px-4">Shop</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="px-4">Contact</Nav.Link>

            {isAuthenticated ? (
              <>
               <Nav.Link as={Link} to="/cart" className="px-4 position-relative">
                    <FaShoppingCart className="me-1"/>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/wishlist" className="px-4">
                  <FaHeart className="me-1" /></Nav.Link>
                <Nav.Link onClick={handleLogout} className="px-4">Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/signin" className="hero-btn1">
                SignIn / SignUp
              </Nav.Link>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
