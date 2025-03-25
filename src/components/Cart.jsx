import React from 'react';

// Demo cart
function Cart() {
  return (
    <div className="container mt-5">
      <h1>Your Cart</h1>
      <div className="row">
        <div className="col-md-8">
          <p>Product 1 - $25.00</p>
        </div>
        <div className="col-md-4">
          <p>Total: $25.00</p>
          <button className="btn btn-success">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
