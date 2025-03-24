const Products = () => {
    return (
      <div className="container mt-4">
        <h2 className="mb-4">All Products</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img src="product1.jpg" className="card-img-top" alt="Product 1" />
              <div className="card-body">
                <h5 className="card-title">Eco-friendly Product</h5>
                <p className="card-text">$25.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <img src="product2.jpg" className="card-img-top" alt="Product 2" />
              <div className="card-body">
                <h5 className="card-title">Handmade Product</h5>
                <p className="card-text">$45.00</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Products;
  