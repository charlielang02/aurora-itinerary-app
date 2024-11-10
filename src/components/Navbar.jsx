import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isLoggedIn, isOrganizer, setLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setLoggedIn(false);
    navigate('/');
  };

  return (
    <nav>
      <Link to="/">Logo</Link>
      {isOrganizer ? (
        <>
          <Link to="/my-events">My Events</Link>
          <Link to="/create-event">Create Event</Link>
        </>
      ) : (
        <>
          <Link to="/search-events">Find Events</Link>
          <Link to="/itinerary">View Itinerary</Link>
        </>
      )}
      {isLoggedIn ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <Link to="/login">Login/Register</Link>
      )}
    </nav>
  );
};

export default Navbar;
