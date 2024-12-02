import { Link } from 'react-router-dom';
import './Navbar.css';
import useBoolean from '../hooks/UseBoolean';
import HamburgerButton from './HamburgerButton';

const Navbar = ({ isLoggedIn, isOrganizer, setLoggedIn, setIsOrganizer, toggleLoginDropdown, hideDropdown }) => {
  const { value: isHamburgerOpen, toggle: toggleHamburger, setFalse: closeHamburger } = useBoolean(false);

  const handleHamburgerToggle = () => {
    hideDropdown(); // Close login dropdown when hamburger is toggled
    toggleHamburger();
  };

  const handleLoginToggle = () => {
    closeHamburger(); // Close hamburger when login dropdown is toggled
    toggleLoginDropdown();
  };


  const handleLinkClick = () => {
    closeHamburger(); // Close the hamburger menu
    hideDropdown();   // Hide any dropdown if needed
  };

  return (
    <div className="nav-container">
      <HamburgerButton className="hamburger" isOpen={isHamburgerOpen} onToggle={handleHamburgerToggle} />
      <nav className="navbar">
        <div className="navbar-left">
          <Link to="/" className="logo" onClick={() => handleLinkClick()}>
            <img src="/logo.jpg" alt="Logo" className="logo-img" />
          </Link>
        </div>
        
        <div className="navbar-center">
          {isOrganizer ? (
            <>
              <Link to="/my-events" className="nav-link" onClick={() => handleLinkClick()}>My Events</Link>
              <Link to="/create-event" className="nav-link" onClick={() => handleLinkClick()}>Create Event</Link>
            </>
          ) : (
            <>
              <Link to="/search-events" className="nav-link" onClick={() => handleLinkClick()}>Find Events</Link>
              <Link
                to={isLoggedIn ? "/view-itinerary" : "#"}
                className="nav-link"
                onClick={(e) => {
                  if (!isLoggedIn) {
                    handleLinkClick();
                    e.preventDefault(); // Prevent navigation
                    toggleLoginDropdown(); // Show login dropdown
                  } else {
                    handleLinkClick();
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
            <Link to="/" className="nav-link" onClick={() => {handleLinkClick(), setLoggedIn(false); setIsOrganizer(false); hideDropdown();}}>Logout</Link>
          ) : (
            <div className="login-register">
              <span 
                className="nav-link" 
                onClick={() => {handleLoginToggle()}}
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