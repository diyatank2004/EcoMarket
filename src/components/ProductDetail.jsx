import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <Container className="mt-5 pt-5"><p>Loading product details...</p></Container>;
  }

  return (
    <Container className="mt-5 pt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={product.image} alt={product.title} className="img-fluid rounded shadow" />
        </Col>
        <Col md={6}>
          <h2>{product.title}</h2>
          <p className="text-muted">₹{product.price}</p>
          <p>{product.description}</p>
          <Button variant="success">Add to Cart</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
