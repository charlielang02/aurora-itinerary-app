import { useNavigate } from 'react-router-dom';

const SearchEvents = () => {
  const navigate = useNavigate();

  const handleEventClick = (eventId) => {
    navigate(`/event-details/${eventId}`);
  };

  return (
    <div>
      <h1>Search Events</h1>
      {/* Example event listing */}
      <div onClick={() => handleEventClick(1)}>Event 1</div>
      <div onClick={() => handleEventClick(2)}>Event 2</div>
    </div>
  );
};

export default SearchEvents;
