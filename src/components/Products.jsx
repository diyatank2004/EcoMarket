import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { useCart } from "../context/CartContext"; // import useCart
import "../css/Products.css";
import { Link } from 'react-router-dom';
import { useWishlist } from "../context/WishlistContext";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart(); 
  const { addToWishlist } = useWishlist();

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("http://localhost:5000/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
  };
  
  return (
    <Container className="products-page mt-5 pt-4">
      <h2 className="text-center my-4">Our Eco-Friendly Products 🌱</h2>
      <Row className="g-4">
        {products.map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card className="product-card h-100 shadow-sm">
            <Link to={`/products/${product._id}`}>
  <Card.Img variant="top" src={product.image} alt={product.title} />
</Link>
              <Card.Body className="d-flex flex-column">
                <Card.Title>{product.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  ₹{product.price} <br />
                  {product.description}
                </Card.Text>
                <Button 
                  variant="success" 
                  className="mt-auto"
                  onClick={() => addToCart(product)}
                >
                  Add to Cart
                </Button>
                <button className="btn btn-outline-danger" onClick={() => addToWishlist(product._id)}>
                ❤️ Wishlist
              </button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
