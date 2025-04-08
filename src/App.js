import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import SignIn from './components/SignIn';
import Products from './components/Products';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import ContactUs from './components/ContactUs';
import AddProduct from './components/AddProduct';
import Footer from './components/Footer';
import BackToTopButton from './components/BackToTopButton';
import PrivateRoute from './components/PrivateRoute';
import Wishlist from "./components/Wishlist";


function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={
                <PrivateRoute>
                  <Cart />
                </PrivateRoute>
              }
            />
<Route
  path="/checkout"
  element={
    <PrivateRoute>
      <Checkout />
    </PrivateRoute>
  }
/>
<Route
  path="/add-product"
  element={
    <PrivateRoute>
      <AddProduct />
    </PrivateRoute>
  }
/>
          <Route path="/products" element={<Products />} />
          <Route path="/signin" element={<SignIn />} /> 
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
        <Footer />
        <BackToTopButton />
      </div>
      </>
  );
}

export default App;
