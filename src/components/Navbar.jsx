import { Link } from 'react-router-dom';
import { useState } from 'react';
import './Navbar.css';
import LoginDropdown from './LoginDropdown';
import useBoolean from '../hooks/UseBoolean';
import HamburgerButton from './HamburgerButton';

const Navbar = ({ isLoggedIn, isOrganizer, setLoggedIn, setIsOrganizer }) => {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const { value: isHamburgerOpen, toggle: toggleHamburger, setFalse: closeHamburger } = useBoolean(false);

  return (
    <div className="nav-container">
      <HamburgerButton className="hamburger" isOpen={isHamburgerOpen} onToggle={toggleHamburger} />
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo">
            <img src="/logo.jpg" alt="Logo" className="logo-img" />
          </Link>
        </div>
        
        <div className="navbar-center">
          {isOrganizer ? (
            <>
              <Link to="/my-events" className="nav-link">My Events</Link>
              <Link to="/create-event" className="nav-link">Create Event</Link>
            </>
          ) : (
            <>
              <Link to="/search-events" className="nav-link">Find Events</Link>
              <Link to="/view-itinerary" className="nav-link">View Itinerary</Link>
            </>
          )}
        </div>

        <div className="navbar-right">
          {isLoggedIn ? (
            <Link to="/" className="nav-link" onClick={() => {setLoggedIn(false); setIsOrganizer(false); setShowLoginDropdown(false);}}>Logout</Link>
          ) : (
            <div className="login-register">
              <span 
                className="nav-link" 
                onClick={() => setShowLoginDropdown(prev => !prev)}
              >
                Login/Register
              </span>

              {showLoginDropdown && (
                <LoginDropdown setLoggedIn={setLoggedIn} setIsOrganizer={setIsOrganizer} />
              )}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;