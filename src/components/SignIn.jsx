import React, { useState } from 'react';
import './SignUp.css'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Signed In with", email, password);
  };

  return (
    <div className="signin-container">
    <div className="signin-box">
      <h2>Sign In</h2>
      <form>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <input type="password" className="form-control" placeholder="Enter your password" />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
      </form>
    </div>
    <div className="signin-image">
      <img src="/images/image4.jpg" alt="EcoMarket Products" />
    </div>
  </div>
  
  );
};

export default SignIn;
