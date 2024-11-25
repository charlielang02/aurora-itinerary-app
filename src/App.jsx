import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import SearchEvents from './pages/SearchEvents';
import EventDetails from './pages/EventDetails';
import ViewItinerary from './pages/ViewItinerary';
import MyEvents from './pages/MyEvents';
import CreateEvent from './pages/CreateEvent';

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isOrganizer, setIsOrganizer] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} isOrganizer={isOrganizer} setLoggedIn={setLoggedIn} setIsOrganizer={setIsOrganizer} />
      <Routes>
      <Route path="/" element={<LandingPage setLoggedIn={setLoggedIn} isLoggedIn={isLoggedIn} setIsOrganizer={setIsOrganizer} isOrganizer={isOrganizer}/>} />
        <Route path="/search-events" element={<SearchEvents />} />
        <Route path="/event-details/:eventId" element={<EventDetails />} />
        <Route path="/view-itinerary" element={<ViewItinerary />} />
        <Route path="/my-events" element={<MyEvents />} />
        <Route path="/create-event" element={<CreateEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
