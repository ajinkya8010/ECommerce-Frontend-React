import React, { useState } from 'react';
import './LoginSignUp.css';

const LoginSignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    agreed: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.password && formData.agreed) {
      setSubmitted(true);
    } else {
      alert("Please fill all fields and agree to the terms.");
    }
  };

  return (
    <div className='loginsignup'>
      <div className='loginsignup-container'>
        {!submitted ? (
          <form onSubmit={handleSubmit} className='form-fade-in'>
            <h1>Create Account</h1>
            <div className="loginsignup-fields">
              <input
                type="text"
                name="name"
                placeholder='Your Name'
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="loginsignup-agree">
              <input
                type="checkbox"
                name="agreed"
                checked={formData.agreed}
                onChange={handleChange}
              />
              <p>I agree to the <a href="#">terms of use</a> and <a href="#">privacy policy</a>.</p>
            </div>
            <button type="submit">Continue</button>
            <p className='loginsignup-login'>Already have an account? <span>Login</span></p>
          </form>
        ) : (
          <div className="thank-you-message">
            <h2>🎉 Welcome, {formData.name}!</h2>
            <p>Your account is ready. Enjoy shopping with us.</p>
            <a href="/" className="home-link">Go to home page</a>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignUp;