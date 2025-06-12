import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css'; // Assuming you have a global CSS file for styles

import { handleGoogleLogin } from '../config'; // Import your Google login handler

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({}); // Initialize as empty object, not null
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Add this for navigation after successful login

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error when user starts typing
    if (errors && errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long';
    }
    
    if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    try {
      // Replace with your actual registration logic
      console.log('Submitting:', formData);
      
      // Simulate successful registration
      setTimeout(() => {
        // Navigate to home page after successful registration
        navigate('/home');
        setIsLoading(false);
      }, 1000);
      
    } catch (error) {
      setErrors({ form: 'Registration failed. Please try again.' });
      setIsLoading(false);
    }
  };

  const handleGoogleLoginBtn = () => {
    try {
      // Implement Google login functionality here
      handleGoogleLogin(setErrors);
      console.log('Google login clicked');
    } catch (error) {
      console.error('Google login error:', error);
      setErrors({ form: 'Google login failed. Please try again.' });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <h1>Create Account</h1>
          <p>Join VibeRooms today</p>
        </div>
        
        {/* Add null check before accessing errors.form */}
        {errors && errors.form && <div className="auth-error">{errors.form}</div>}
        
        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="fullName">Nick Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter the name used in the application"
              className={errors && errors.fullName ? 'error' : ''}
            />
            {errors && errors.fullName && <small className="error-text">{errors.fullName}</small>}
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={errors && errors.email ? 'error' : ''}
            />
            {errors && errors.email && <small className="error-text">{errors.email}</small>}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create a password"
              className={errors && errors.password ? 'error' : ''}
            />
            {errors && errors.password && <small className="error-text">{errors.password}</small>}
          </div>
          
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className={errors && errors.confirmPassword ? 'error' : ''}
            />
            {errors && errors.confirmPassword && <small className="error-text">{errors.confirmPassword}</small>}
          </div>
          
          <div className="form-agreement">
            <input type="checkbox" id="agreement" required />
            <label htmlFor="agreement">
              I agree to the <Link to="/terms" className="auth-link">Terms of Service</Link> and <Link to="/privacy" className="auth-link">Privacy Policy</Link>
            </label>
          </div>
          
          <button 
            type="submit" 
            className="auth-button"
            disabled={isLoading}
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>
          
          <div className="auth-divider">
            <span>OR</span>
          </div>
          
          <button 
            type="button"
            onClick={handleGoogleLoginBtn}
            className="google-auth-button"
          >
            <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" alt="Google" className="google-icon" />
            Sign up with Google
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/signin" className="auth-link">Sign In</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;