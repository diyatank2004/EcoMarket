import React from "react";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, removeFromCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  

  return (
    <div className="container mt-5 pt-5">
      <h1 className="mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div className="col-md-12 mb-3" key={item._id}>
                <div className="card p-3 d-flex flex-row align-items-center justify-content-between">
                  <img src={item.image} alt={item.title} style={{ width: "80px", height: "80px", objectFit: "cover" }} />
                  <div className="flex-grow-1 mx-3">
                    <h5>{item.title}</h5>
                    <p className="mb-1">₹{item.price} x {item.quantity}</p>
                    <p className="mb-0">Subtotal: ₹{item.price * item.quantity}</p>
                  </div>
                  <button className="btn btn-danger" onClick={() => removeFromCart(item._id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-end mt-4">
            <h4>Total: ₹{total.toFixed(2)}</h4>
            <button className="btn btn-success mt-2">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
