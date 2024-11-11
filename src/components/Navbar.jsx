import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isLoggedIn, isOrganizer, setLoggedIn }) => {
  return (
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
            <Link to="/itinerary" className="nav-link">View Itinerary</Link>
          </>
        )}
      </div>

      <div className="navbar-right">
        {isLoggedIn ? (
          <Link to="/login" className="nav-link" onClick={() => setLoggedIn(false)}>Logout</Link>
        ) : (
          <Link to="/login" className="nav-link">Login/Register</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
