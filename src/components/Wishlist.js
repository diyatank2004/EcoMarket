import React from "react";
import { useWishlist } from "../context/WishlistContext";

function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  return (
    <div className="container mt-5 pt-5">
      <h1>Your Wishlist ❤️</h1>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlistItems.map(({ product }) => (
            <div className="col-md-4 mb-3" key={product._id}>
              <div className="card h-100 p-3">
                <img src={product.image} className="card-img-top" alt={product.title} />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">₹{product.price}</p>
                  <button className="btn btn-danger" onClick={() => removeFromWishlist(product._id)}>
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
