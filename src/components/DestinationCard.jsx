import React from 'react';
import './DestinationCard.css';
import { useNavigate } from 'react-router-dom';
import { createSearchParams } from 'react-router-dom';


const DestinationCard = ({ image, city, country }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate({
            pathname: "/find-events",
            search: createSearchParams({
                city: city,
                country: country
            }).toString()
        });
    };
  return (
    <div className="destination-card" onClick={handleClick}>
      <div className="destination-image" style={{ backgroundImage: `url(${image})` }}></div>
      <div className="destination-info">
        <h3 className="destination-city">{city}</h3>
        <p className="destination-country">{country}</p>
      </div>
    </div>
  );
};

export default DestinationCard;
