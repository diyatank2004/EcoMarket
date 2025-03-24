import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1>Welcome to EcoMarket</h1>
        <p>Your destination for eco-friendly products</p>
        <Link to="/shop" className="btn btn-primary">Shop Now</Link>
      </div>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="card">
            <img src="product1.jpg" className="card-img-top" alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title">Eco-Friendly Product 1</h5>
              <p className="card-text">$25.00</p>
              <Link to="/product/1" className="btn btn-success">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
