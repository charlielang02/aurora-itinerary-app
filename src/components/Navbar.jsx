import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import useBoolean from '../hooks/UseBoolean';
import HamburgerButton from './HamburgerButton';
import { useGlobalContext } from '../hooks/GlobalContext';

const Navbar = ({ isLoggedIn, isOrganizer, setLoggedIn, setIsOrganizer, toggleLoginDropdown, hideDropdown }) => {
  const { value: isHamburgerOpen, toggle: toggleHamburger, setFalse: closeHamburger } = useBoolean(false);
  const location = useLocation();
  const currentUrl = location.pathname + location.hash;

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

  const { setCountry, setDate, setMinPrice, setMaxPrice, setStarRating } = useGlobalContext();

  const handleNavbarClick = () => {
    console.log('Navbar clicked, resetting filters');
    setCountry('');
    setDate(null);
    setMinPrice('');
    setMaxPrice('');
    setStarRating(0);
  };


  return (
    <div className="nav-container" onClick={handleNavbarClick}>
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
              <Link
                to="/"
                className={`nav-link ${currentUrl === '/' ? 'active' : ''}`}
                onClick={() => handleLinkClick()}
              >Home</Link>
              <Link
                to="/my-events"
                className={`nav-link ${currentUrl === '/my-events' ? 'active' : ''}`}
                onClick={() => handleLinkClick()}
              >My Events</Link>
              <Link
                to="/create-event"
                className={`nav-link ${currentUrl === '/create-event' ? 'active' : ''}`}
                onClick={() => handleLinkClick()}
              >Create Event</Link>
            </>
          ) : (
            <>
              <Link
                to="/"
                className={`nav-link ${currentUrl === '/' ? 'active' : ''}`}
                onClick={() => handleLinkClick()}
              >Home</Link>
              <Link
                to="/search-events"
                className={`nav-link ${currentUrl === '/search-events' ? 'active' : ''}`}
                onClick={() => handleLinkClick()}
              >Find Events</Link>
              <Link
                to={isLoggedIn ? "/view-itinerary" : "#"}
                className={`nav-link ${currentUrl === '/view-itinerary' ? 'active' : ''}`}
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