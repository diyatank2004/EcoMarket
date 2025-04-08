import React, { useState, useContext } from 'react';
import '../css/Signin.css';
import { AuthContext } from '../context/AuthContext'; // import AuthContext

const SignIn = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInData, setSignInData] = useState({ email: '', password: '' });
  const [signUpData, setSignUpData] = useState({ name: '', email: '', password: '' });
  const [inputActive, setInputActive] = useState({});
  const [loading, setLoading] = useState(false);

  const { login } = useContext(AuthContext); // use login function from AuthContext

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

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signUpData),
      });

      const data = await res.json();
      if (res.ok) {
        alert('Signup successful! You can now sign in.');
        setIsSignIn(true);
      } else {
        alert(data.message || 'Signup failed.');
      }
    } catch (err) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  const handleSigninSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signInData),
      });

      const data = await res.json();
      if (res.ok) {
        // Store in localStorage and update context
        const userData = { token: data.token, user: data.user };
        login(userData); // sets context + localStorage inside AuthContext
        alert('Sign in successful!');
        window.location.href = '/';
      } else {
        alert(data.message || 'Signin failed.');
      }
    } catch (err) {
      alert('Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className={isSignIn ? '' : 'sign-up-mode'}>
      <div className="box">
        <div className="inner-box">
          <div className="forms-wrap">
            {isSignIn ? (
              <form onSubmit={handleSigninSubmit} autoComplete="off" className="sign-in-form">
                <div className="logo">
                  <img src="./images/Market.png" alt="EcoMarket" />
                  <h4>EcoMarket</h4>
                </div>

                <div className="heading">
                  <h2>Welcome Back</h2>
                  <h6>Not registered yet?</h6>
                  <a href="#" className="toggle" onClick={toggleForm}>Sign up</a>
                </div>

                <div className="actual-form">
                  <div className={`input-wrap ${inputActive.email ? 'active' : ''}`}>
                    <input
                      type="email"
                      className="input-field"
                      required
                      value={signInData.email}
                      onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                      onFocus={() => handleFocus('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                    />
                    <label>Email</label>
                  </div>

                  <div className={`input-wrap ${inputActive.password ? 'active' : ''}`}>
                    <input
                      type="password"
                      className="input-field"
                      required
                      value={signInData.password}
                      onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                      onFocus={() => handleFocus('password')}
                      onBlur={(e) => handleBlur('password', e.target.value)}
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value={loading ? 'Signing in...' : 'Sign In'} className="sign-btn" />
                </div>
              </form>
            ) : (
              <form onSubmit={handleSignupSubmit} autoComplete="off" className="sign-up-form">
                <div className="logo">
                  <img src="./images/Market.png" alt="EcoMarket" />
                  <h4>EcoMarket</h4>
                </div>

                <div className="heading">
                  <h2>Get Started</h2>
                  <h6>Already have an account?</h6>
                  <a href="#" className="toggle" onClick={toggleForm}>Sign in</a>
                </div>

                <div className="actual-form">
                  <div className={`input-wrap ${inputActive.name ? 'active' : ''}`}>
                    <input
                      type="text"
                      className="input-field"
                      required
                      value={signUpData.name}
                      onChange={(e) => setSignUpData({ ...signUpData, name: e.target.value })}
                      onFocus={() => handleFocus('name')}
                      onBlur={(e) => handleBlur('name', e.target.value)}
                    />
                    <label>Username</label>
                  </div>

                  <div className={`input-wrap ${inputActive.email ? 'active' : ''}`}>
                    <input
                      type="email"
                      className="input-field"
                      required
                      value={signUpData.email}
                      onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                      onFocus={() => handleFocus('email')}
                      onBlur={(e) => handleBlur('email', e.target.value)}
                    />
                    <label>Email</label>
                  </div>

                  <div className={`input-wrap ${inputActive.password ? 'active' : ''}`}>
                    <input
                      type="password"
                      className="input-field"
                      required
                      value={signUpData.password}
                      onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                      onFocus={() => handleFocus('password')}
                      onBlur={(e) => handleBlur('password', e.target.value)}
                    />
                    <label>Password</label>
                  </div>

                  <input type="submit" value={loading ? 'Signing up...' : 'Sign Up'} className="sign-btn" />
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
