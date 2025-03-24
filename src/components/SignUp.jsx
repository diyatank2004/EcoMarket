import React from "react";
import { Link } from "react-router-dom";
import './SignUp.css'; 

function SignUp() {
    return (
      <div className="container-fluid">
        <div className="row signup-page">
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center signup-image border border-light rounded shadow-sm">
            <img src="/images/image2.png" alt="Signup Visual" className="img-fluid rounded" />
          </div>
          
          <div className="col-md-6 d-flex align-items-center justify-content-center signup-form">
            <div className="form-container border border-primary p-4 rounded shadow">
              <h3 className="mb-4">Create an Account</h3>
              <form>
                <div className="form-group mb-3">
                  <label>Email address</label>
                  <input type="email" className="form-control" placeholder="Enter your email" />
                </div>
                <div className="form-group mb-3">
                  <label>Password</label>
                  <input type="password" className="form-control" placeholder="Enter your password" />
                </div>
                <div className="form-group mb-3">
                  <label>Confirm Password</label>
                  <input type="password" className="form-control" placeholder="Confirm your password" />
                </div>
                <div className="form-group mb-3">
                  <input type="checkbox" /> Remember me
                  <a href="#" className="float-end">Forgot Password?</a>
                </div>
                <div className="d-flex justify-content-center">
                <button type="submit" className="btn btn-primary">Sign Up</button>
                </div>
                <p className="text-center mt-3">
                  Already have an account? <a href="#">Sign In</a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
  

export default SignUp;
