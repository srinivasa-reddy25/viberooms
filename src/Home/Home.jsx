import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../config';
import './index.css';

/**
 * Home component - Main authenticated user interface
 */
function Home() {
  const navigate = useNavigate();

  /**
   * Handle user sign out
   */
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      console.log('User signed out successfully');
      navigate('/signin');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <header className="hero-section">
        <div className="nav-bar">
          <div className="logo">
            <h2>VibeRooms</h2>
          </div>
          <div className="nav-controls">
            <button onClick={handleSignOut} className="sign-out-button">
              Sign Out
            </button>
          </div>
        </div>
        <div className="hero-content">
          <h1>Welcome to VibeRooms</h1>
          <p className="tagline">Find your perfect space, match your perfect vibe.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </header>

      {/* About Section */}
      <section className="about-section">
        <h2>About VibeRooms</h2>
        <p>
          VibeRooms is a revolutionary platform designed to connect people with their ideal living spaces.
          Whether you're looking for a room to rent, a roommate to share costs, or a complete apartment,
          we match you with options that align with your lifestyle, preferences, and personality.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>What We Offer</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🏠</div>
            <h3>Room Listings</h3>
            <p>Browse through verified room listings in your desired location with detailed descriptions and high-quality photos.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">👥</div>
            <h3>Roommate Matching</h3>
            <p>Our smart algorithm matches you with compatible roommates based on lifestyle, habits, and preferences.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💬</div>
            <h3>Secure Communication</h3>
            <p>Chat directly with potential roommates or landlords through our secure messaging system.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✓</div>
            <h3>Verified Listings</h3>
            <p>All listings undergo a verification process to ensure you're getting exactly what you see.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps-container">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Create Your Profile</h3>
            <p>Sign up and tell us about your preferences, lifestyle, and what you're looking for.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Browse Listings</h3>
            <p>Search through our extensive database of rooms and apartments that match your criteria.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>Connect & Communicate</h3>
            <p>Reach out to potential roommates or landlords through our platform.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Find Your Match</h3>
            <p>Schedule viewings, finalize details, and move into your new space!</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"VibeRooms helped me find not just a roommate, but a friend. The matching system really works!"</p>
            <h4>- Sarah K.</h4>
          </div>
          <div className="testimonial">
            <p>"As a landlord, I've found reliable tenants quickly and efficiently through this platform."</p>
            <h4>- Michael T.</h4>
          </div>
          <div className="testimonial">
            <p>"Moving to a new city was daunting, but VibeRooms made finding accommodation so much easier."</p>
            <h4>- Jamie L.</h4>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Find Your Perfect Room?</h2>
        <p>Join thousands of satisfied users who've found their ideal living situation through VibeRooms.</p>
        <button className="cta-button">Sign Up Now</button>
      </section>
    </div>
  );
}

export default Home;
