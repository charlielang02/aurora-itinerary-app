import React from "react";
import { useParams, Link } from "react-router-dom";
import { EventData } from "./SearchEvents"; // Import your EventData array
import "./EventDetails.css"; // CSS file

const EventDetails = () => {
  const { eventId } = useParams(); // Capture eventId from URL
  const event = EventData[eventId]; // Fetch event data by ID

  if (!event) {
    return (
      <div className="event-details-container">
        <p>Event not found!</p>
        <Link to="/search-events" className="back-link">
          &lt; Back to Events
        </Link>
      </div>
    );
  }

  return (
    <div className="event-details-page">
      {/* Header */}
      <header className="event-header">
        <h1>{event.title}</h1>
        <p className="event-location">{event.location}</p>
      </header>

      {/* Main Content */}
      <div className="event-content">
        {/* Event Image */}
        <div className="event-image">
          <img src={event.image} alt={event.title} />
        </div>

        {/* Event Info */}
        <div className="event-info">
          <p>
            <strong>Rating:</strong> {event.rating} stars ({event.reviews} reviews)
          </p>
          <p>
            <strong>Date:</strong> Friday, 5 December at 8:00 PM
          </p>
          <p>
            <strong>Tags:</strong> {event.tags.join(", ")}
          </p>
          <p>
            Get ready to experience the {event.title}. Step into Alberta’s rich cowboy heritage
            with thrilling rodeo events, heart-pounding chuckwagon races, and live shows
            that capture the spirit of the West.
          </p>
          <button className="book-now">Book Now</button>
        </div>
      </div>

      {/* Related Events */}
      <div className="related-events">
        <h2>Related Events</h2>
        <div className="related-events-cards">
          <div>Event Card 1</div>
          <div>Event Card 2</div>
          <div>Event Card 3</div>
        </div>
      </div>

      {/* Back Link */}
      <div className="back-link">
        <Link to="/search-events">&lt; Back to Events</Link>
      </div>
    </div>
  );
};

export default EventDetails;
