import { Link } from 'react-router-dom';
import './Navbar.css';
import useBoolean from '../hooks/UseBoolean';
import HamburgerButton from './HamburgerButton';

const Navbar = ({ isLoggedIn, isOrganizer, setLoggedIn, setIsOrganizer, toggleLoginDropdown, hideDropdown }) => {
  const { value: isHamburgerOpen, toggle: toggleHamburger, setFalse: closeHamburger } = useBoolean(false);

  return (
    <div className="nav-container">
      <HamburgerButton className="hamburger" isOpen={isHamburgerOpen} onToggle={toggleHamburger} />
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo" onClick={hideDropdown}>
            <img src="/logo.jpg" alt="Logo" className="logo-img" />
          </Link>
        </div>
        
        <div className="navbar-center">
          {isOrganizer ? (
            <>
              <Link to="/my-events" className="nav-link" onClick={hideDropdown}>My Events</Link>
              <Link to="/create-event" className="nav-link" onClick={hideDropdown}>Create Event</Link>
            </>
          ) : (
            <>
              <Link to="/search-events" className="nav-link" onClick={hideDropdown}>Find Events</Link>
              <Link
                to={isLoggedIn ? "/view-itinerary" : "#"}
                className="nav-link"
                onClick={(e) => {
                  if (!isLoggedIn) {
                    e.preventDefault(); // Prevent navigation
                    toggleLoginDropdown(); // Show login dropdown
                  } else {
                    hideDropdown(); // Hide any dropdown if visible
                  }
                }}
              > 
                View Itinerary
              </Link>
            </>
          )}
        </div>

        <div className="navbar-right">
          {isLoggedIn ? (
            <Link to="/" className="nav-link" onClick={() => {setLoggedIn(false); setIsOrganizer(false); hideDropdown();}}>Logout</Link>
          ) : (
            <div className="login-register">
              <span 
                className="nav-link" 
                onClick={toggleLoginDropdown}
              >
                Login/Register
              </span>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;