import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SearchEvents from './pages/SearchEvents';
import EventDetails from './pages/EventDetails';
import ViewItinerary from './pages/ViewItinerary';
import MyEvents from './pages/MyEvents';
import CreateEvent from './pages/CreateEvent';
import LoginDropdown from './components/LoginDropdown';
import { useLocation } from 'react-router-dom';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const location = useLocation();

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  };

  const hideDropdown = () => {
    setShowLoginDropdown(false);
  };

  useEffect(() => {
    setShowLoginDropdown(false);
  }, [location]);

  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} isOrganizer={isOrganizer} setLoggedIn={setLoggedIn} setIsOrganizer={setIsOrganizer} toggleLoginDropdown={toggleLoginDropdown} hideDropdown={hideDropdown} />
      {showLoginDropdown && (
          <LoginDropdown
            setLoggedIn={setLoggedIn}
            setIsOrganizer={setIsOrganizer}
            hideDropdown={hideDropdown}
          />
        )}
      <Routes>
      <Route path="/" element={<LandingPage setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} setIsOrganizer={setIsOrganizer} isOrganizer={isOrganizer} toggleLoginDropdown={toggleLoginDropdown} hideDropdown={hideDropdown}/>} />
        <Route path="/search-events" element={<SearchEvents />} />
        <Route path="/event-details/:eventId" element={<EventDetails isLoggedIn={isLoggedIn} toggleLoginDropdown={toggleLoginDropdown}/>} />
        <Route path="/view-itinerary" element={<ViewItinerary />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </div>
  );
}

export default App;
