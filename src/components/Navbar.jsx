import React from "react";
import { Navbar as BootstrapNavbar, Nav, Container, Dropdown } from "react-bootstrap";
import { FaHome, FaUser, FaShoppingCart, FaBars, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" bg="dark" variant="dark" className="px-3">
      <Container>
        {/* Brand Logo */}
        <BootstrapNavbar.Brand href="/">  
        <img 
    src="/images/Market.png" 
    alt="EcoMarket" 
    style={{ height: "40px", marginRight: "10px" }} 
  />
          EcoMarket
        </BootstrapNavbar.Brand>

        {/* Toggle Button for Mobile */}
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav">
          <FaBars />
        </BootstrapNavbar.Toggle>

        {/* Navbar Links */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="d-flex align-items-center">
              <FaHome className="me-1" /> Home
            </Nav.Link>
            <Nav.Link href="/about" className="d-flex align-items-center">
              <FaUser className="me-1" /> About
            </Nav.Link>
            <Nav.Link href="/products" className="d-flex align-items-center">
              <FaShoppingCart className="me-1" /> Shop
            </Nav.Link>

            {/* Profile Dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="dark" id="profile-dropdown" className="d-flex align-items-center">
                <FaUserCircle size={22} className="me-1" /> Profile
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="/signin">My Profile</Dropdown.Item>
                <Dropdown.Item href="/cart">My Cart</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="/logout">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
