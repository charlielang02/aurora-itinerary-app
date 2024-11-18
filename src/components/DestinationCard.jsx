import React from 'react';
import './DestinationCard.css';
import { Link } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';


const DestinationCard = ({ image, city, country }) => {
  return (
    <Link
      to={{
        pathname: "/find-events",
        search: createSearchParams({
            city: city,
            country: country
        }).toString()
    }}
    className="destination-card-link"
    >
    <div className="destination-card">
      <div className="destination-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="destination-info">
        <h3 className="destination-city">{city}</h3>
        <p className="destination-country">{country}</p>
      </div>
    </div>
    </Link>
  );
};

export default DestinationCard;
