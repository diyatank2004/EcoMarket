import React, { useState } from 'react';
import './SignUp.css'; 

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [activeBullet, setActiveBullet] = useState(1);
  const [inputActive, setInputActive] = useState({});

  const toggleForm = () => {
    setIsSignIn(!isSignIn);
  };

  const handleFocus = (field) => {
    setInputActive({ ...inputActive, [field]: true });
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setInputActive({ ...inputActive, [field]: false });
    }
  };

  const moveSlider = (index) => {
    setActiveBullet(index);
  };

  return (
    <main className={isSignIn ? '' : 'sign-up-mode'}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignIn && (
              <form action="index.html" autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src="./images/Market.png" alt="EcoMarket" />
                  <h4>EcoMarket</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet? </h6>
                  <a href="#" className="toggle" onClick={toggleForm}>
                    Sign up
                  </a>
                </div>

                <div className="actual-form">
                  <div className={`input-wrap ${inputActive.name ? 'active' : ''}`}>
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                      onFocus={() => handleFocus('name')}
                      onBlur={(e) => handleBlur('name', e.target.value)}
                    />
                    <label>Username</label>
                  </div>

                  <div className={`input-wrap ${inputActive.password ? 'active' : ''}`}>
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                      onFocus={() => handleFocus('password')}
                      onBlur={(e) => handleBlur('password', e.target.value)}
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign In" className="sign-btn" />

                  <p className="text">
                    Forgotten your password or your login details?{' '}
                    <a href="#">Get help</a> signing in
                  </p>
                </div>
              </form>
            )}

            {!isSignIn && (
              <form action="index.html" autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src="./images/Market.png" alt="EcoMarket" />
                  <h4>EcoMarket</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account? </h6>
                  <a href="#" className="toggle" onClick={toggleForm}>
                    Sign in
                  </a>
                </div>

                <div className="actual-form">
                  <div className={`input-wrap ${inputActive.signUpName ? 'active' : ''}`}>
                    <input
                      type="text"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                      onFocus={() => handleFocus('signUpName')}
                      onBlur={(e) => handleBlur('signUpName', e.target.value)}
                    />
                    <label>Username</label>
                  </div>

                  <div className={`input-wrap ${inputActive.email ? 'active' : ''}`}>
                    <input
                      type="email"
                      className="input-field"
                      autoComplete="off"
                      required
                      onFocus={() => handleFocus('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                    />
                    <label>Email</label>
                  </div>

                  <div className={`input-wrap ${inputActive.signUpPassword ? 'active' : ''}`}>
                    <input
                      type="password"
                      minLength="4"
                      className="input-field"
                      autoComplete="off"
                      required
                      onFocus={() => handleFocus('signUpPassword')}
                      onBlur={(e) => handleBlur('signUpPassword', e.target.value)}
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value="Sign Up" className="sign-btn" />

                  <p className="text">
                    By signing up, I agree to the <a href="#">Terms of Services</a> and{' '}
                    <a href="#">Privacy Policy</a>
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Carousel */}
          <div className="carousel">
        <div className="images-wrapper">
          <img src="./images/image2.png" className="image show" alt="Main Image" />
        </div>
      </div>

        </div>
      </div>
    </main>
  );
};

export default SignIn;
