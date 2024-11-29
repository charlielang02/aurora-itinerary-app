import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EventDetails.css";
import LargeEventImage from "../assets/stampede.jpg";
import ReviewerIcon from "../assets/person-symbol.png";
import DestinationCard from "../components/DestinationCard";
import placeholderImage from "../assets/morainelake.jpg";
import { EventData } from "./SearchEvents";


const EventDetails = () => {
  const { eventId } = useParams();
  const event1 = EventData[eventId];

  if (!event1) {
    return <p>Event not found. Please go back to the events page.</p>;
  }

  const relatedEvents = [
    { name: "Rocky Mountain Hike", location: "Banff, Alberta", image: placeholderImage },
    { name: "Jazz Festival", location: "Montreal, Quebec", image: placeholderImage },
    { name: "Food Truck Fiesta", location: "Vancouver, British Columbia", image: placeholderImage },
    { name: "Maritime Adventures", location: "Halifax, Nova Scotia", image: placeholderImage },
    { name: "Lighthouse Tour", location: "Charlottetown, PEI", image: placeholderImage },
  ];

  // Placeholder data
  const event = {
    reviews: [
      { reviewer: "Alice", rating: 5, comment: "Amazing experience! Loved the rodeo, live music, and family-friendly attractions. We’ll be back!" },
      { reviewer: "Bob", rating: 4, comment: "Incredible food, great concerts, and the fireworks were stunning! A must-visit event!" },
      { reviewer: "Ethan", rating: 5, comment: "First time at the Stampede and I loved it! So much to do and worth every penny!" },
    ],
  };

  return (
    <div className="event-details-page">
      {/* Content Section */}
      <div className="content-section">
        {/* Left Section */}
        <div className="left-section">
          <Link to="/search-events" className="back-link">
            &lt; Back to Events
          </Link>
          <img
            className="event-large-image"
            src={event1.images[0]}
            alt={event1.title}
          />
          <div className="event-small-images">
            {event1.images.slice(1).map((img, index) => (
              <img key={index} src={img} alt={`Event thumbnail ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* Middle Section */}
        <div className="middle-section">
          <p className="event-location">{event1.location}</p>
          <h1 className="event-title">{event1.title}</h1>
          <p className="event-stars">
            {Array.from({ length: 5 }).map((_, starIndex) => (
              <span key={starIndex} className={starIndex < event1.rating ? 'star filled' : 'star'}>
                ★
              </span>
            ))}
          </p>
          <p className="event-reviews">{event1.reviews} Reviews</p>
          <Link to="#" className="write-review-link">
            Write a Review
          </Link>
          <div className="price-range-box">
            <p>Price Range: {event1.priceRange}</p>
          </div>
          <p className="event-description">{event1.description}</p>
          <button className="book-now">Book Now</button>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <div className="top-reviews">
            <h2 className="reviews-header">Top Reviews</h2>
            {event.reviews.map((review, index) => (
              <div key={index} className="review">
                <img
                  src={ReviewerIcon}
                  alt="Reviewer Icon"
                  className="review-icon"
                />
                <p className="review-text">
                  &ldquo;{review.comment}&rdquo; - {review.reviewer}
                </p>
                <div className="review-stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex} className={starIndex < review.rating ? 'star filled' : 'star'}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      <div className="related-events-section">
        <h2 className="related-events-header">Related Events</h2>
        <div className="related-events-container">
          {relatedEvents.map((event, index) => (
            <DestinationCard
              key={index}
              image={event.image}
              city={event.name}
              country={event.location}
            />
          ))}
        </div>
      </div>
      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Reviews</h2>
        <p>Placeholder content for the reviews section.</p>
      </div>
    </div>
  );
};

export default EventDetails;
