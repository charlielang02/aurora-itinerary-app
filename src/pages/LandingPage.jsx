import React from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import './LandingPage.css';

const destinations = [
    { image: '/paris.jpg', city: 'Paris', country: 'France' },
    { image: '/tokyo.jpg', city: 'Tokyo', country: 'Japan' },
    { image: '/newyork.jpg', city: 'New York', country: 'USA' },
    { image: '/sydney.jpg', city: 'Sydney', country: 'Australia' },
  ];

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="welcome-text">Welcome to</h1>
        <h2 className="main-heading">Aurora Travel Companion</h2>
        <h3 className="sub-heading">Trip Planning - All In One Place</h3>
        
        <Link to="/login" className="login-button">Login</Link>
        
        <p className="register-prompt">
          New to Aurora? <Link to="/register" className="register-link">Register Here</Link>
        </p>

        <div className="top-destinations-section">
            <h2 className="top-destinations-header">Top Destinations</h2>
            <div className="destination-cards-container">
            {destinations.map((destination, index) => (
                <DestinationCard 
                key={index}
                image={destination.image}
                city={destination.city}
                country={destination.country}
                />
            ))}
            </div>
        </div>

      </div>
    </div>
  );
};

export default LandingPage;
