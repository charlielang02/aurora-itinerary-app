import React from 'react';
import './DestinationCard.css';

const DestinationCard = ({ image, city, country }) => {
  return (
    <div className="destination-card">
      <div className="destination-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="destination-info">
        <h3 className="destination-city">{city}</h3>
        <p className="destination-country">{country}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
