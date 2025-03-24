import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams(); 
  return (
    <div className="container mt-5">
      <h1>Product Details</h1>
      <div className="row">
        <div className="col-md-6">
          <img src={`product${id}.jpg`} alt={`Product ${id}`} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h2>Eco-Friendly Product {id}</h2>
          <p>Price: $25.00</p>
          <p>Description: This is an eco-friendly product that you will love.</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
