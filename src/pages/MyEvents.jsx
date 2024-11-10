import { useNavigate } from 'react-router-dom';

const SearchEvents = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  return (
    <div>
      <h1>My Events</h1>
      {/* map over events and display each with a clickable link */}
      <div onClick={() => handleEventClick(1)}>Event 1</div>
    </div>
  );
};

export default SearchEvents;
