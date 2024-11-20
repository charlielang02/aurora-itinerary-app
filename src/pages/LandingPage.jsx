import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DestinationCard from '../components/DestinationCard';
import LoginDropdown from '../components/LoginDropdown';
import './LandingPage.css';

const destinations = [
    { image: '/paris.jpg', city: 'Paris', country: 'France' },
    { image: '/tokyo.jpg', city: 'Tokyo', country: 'Japan' },
    { image: '/newyork.jpg', city: 'New York', country: 'USA' },
    { image: '/sydney.jpg', city: 'Sydney', country: 'Australia' },
  ];

const LandingPage = ({setLoggedIn, isLoggedIn, setIsOrganizer, isOrganizer }) => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  useEffect(() => {
    if (!isLoggedIn) {
      setShowLoginDropdown(false);
    }
  }, [isLoggedIn]);

  const handleRegister = () => {
    setLoggedIn(true);
    setIsOrganizer(false);
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1 className="welcome-text">Welcome to</h1>
        <h2 className="main-heading">Aurora Travel Companion</h2>
        <h3 className="sub-heading">Trip Planning - All In One Place</h3>
        
        {!isLoggedIn && (
          <div>
            <div className="login-area">
              <button className="login-button" onClick={toggleLoginDropdown}>
                Login
              </button>

              {showLoginDropdown && (
                    <LoginDropdown setLoggedIn={setLoggedIn} setIsOrganizer={setIsOrganizer} />
                  )}
            </div>

            <p className="register-prompt">
              New to Aurora? 
              <Link to="/" onClick={handleRegister} className="register-links">
                Register Here
              </Link>
            </p>
          </div>
        )}

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
