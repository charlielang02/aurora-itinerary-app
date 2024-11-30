import React from "react";
import { useParams, Link } from "react-router-dom";
import "./EventDetails.css";
import ReviewerIcon from "../assets/person-symbol.png";
import DestinationCard from "../components/DestinationCard";
import { EventData } from "./SearchEvents";
import { useState, useMemo } from "react";


const EventDetails = () => {
  const { eventId } = useParams();
  const event1 = EventData[eventId];

  if (!event1) {
    return <p>Event not found. Please go back to the events page.</p>;
  }

  const relatedEvents = useMemo(() => {
    const getRandomEvents = (currentEventId, eventData, count = 5) => {
      const otherEvents = Object.entries(eventData).filter(([key]) => key !== currentEventId);
      const shuffled = otherEvents.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count).map(([key, event]) => ({ id: key, ...event }));
    };
    return getRandomEvents(eventId, EventData);
  }, [eventId]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({ content: "", reviewer: "", rating: "" });
  const [reviews, setReviews] = useState(event1.userReviews || []);

  // Toggle the modal
  const handleModalToggle = () => setIsModalOpen(!isModalOpen);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  // Add a new review
  const handleSubmitReview = () => {
    if (newReview.content && newReview.reviewer && newReview.rating) {
      const updatedReviews = [
        ...reviews,
        {
          reviewer: newReview.reviewer,
          rating: parseInt(newReview.rating),
          comment: newReview.content,
        },
      ];
      setReviews(updatedReviews); // Update the displayed reviews
      setNewReview({ content: "", reviewer: "", rating: "" }); // Reset the form
      setIsModalOpen(false); // Close the modal
    }
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
          <Link to="#" className="write-review-link" onClick={handleModalToggle}>
            Write a Review
          </Link>
          {isModalOpen && (
            <div className="modal-overlay">
              <div className="modal-content">
                <h2>Write a Review</h2>
                <div className="form-group">
                  <label htmlFor="reviewContent">Review:</label>
                  <textarea
                    id="reviewContent"
                    name="content"
                    value={newReview.content}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div className="form-group">
                  <label htmlFor="reviewerName">Your Name:</label>
                  <input
                    id="reviewerName"
                    name="reviewer"
                    type="text"
                    value={newReview.reviewer}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="reviewRating">Rating (1-5):</label>
                  <input
                    id="reviewRating"
                    name="rating"
                    type="number"
                    min="1"
                    max="5"
                    value={newReview.rating}
                    onChange={handleInputChange}
                  />
                </div>
                <button className="submit-review" onClick={handleSubmitReview}>
                  Submit
                </button>
                <button className="close-modal" onClick={handleModalToggle}>
                  Cancel
                </button>
              </div>
            </div>
          )}

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
            {reviews.length > 0 ? (
              reviews
                .sort((a, b) => b.rating - a.rating) // Sort reviews by rating
                .slice(0, 3) // Display top 3 reviews
                .map((review, index) => (
                  <div key={index} className="review">
                    <img src={ReviewerIcon} alt="Reviewer Icon" className="review-icon" />
                    <p className="review-text">
                      &ldquo;{review.comment}&rdquo; - {review.reviewer}
                    </p>
                    <div className="review-stars">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <span
                          key={starIndex}
                          className={starIndex < review.rating ? "star filled" : "star"}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                ))
            ) : (
              <p>No reviews yet. Be the first to write one!</p>
            )}
          </div>
        </div>
      </div>

      {/* Related Events Section */}
      <div className="related-events-section">
        <h2 className="related-events-header">Related Events</h2>
        <div className="related-events-container">
          {relatedEvents.map((event) => (
            <DestinationCard
              key={event.id}
              image={event.images[0]}
              city={event.title}
              country={event.location}
            />
          ))}
        </div>
      </div>
      {/* Reviews Section */}
      <div className="reviews-section">
        <h2>Reviews</h2>
        {reviews.map((review, index) => (
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
  );
};

export default EventDetails;
