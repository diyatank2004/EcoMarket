import React from 'react';

//Demo checkout
function Checkout() {
  return (
    <div className="container mt-5">
      <h1>Checkout</h1>
      <form>
        <div className="form-group">
          <label>Shipping Address</label>
          <input type="text" className="form-control" placeholder="Enter your address" />
        </div>
        <div className="form-group mt-3">
          <label>Payment Method</label>
          <input type="text" className="form-control" placeholder="Enter payment details" />
        </div>
        <button type="submit" className="btn btn-primary mt-4">Place Order</button>
      </form>
    </div>
  );
}

export default Checkout;
