import './DestinationCard.css';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../hooks/GlobalContext';

const DestinationCard = ({ image, city, country, link }) => {
  const { setCountry } = useGlobalContext(); // Destructure setCountry from context

  const handleClick = () => {
    setCountry(country); // Update the global country state
  };

  return (
    <Link
      to={
        link || {
          pathname: "/search-events",
        }
      }
      className="destination-card-link"
      onClick={handleClick}
    >
      <div className="destination-card">
        <div
          className="destination-image"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="destination-info">
          <h3 className="destination-city">{city}</h3>
          <p className="destination-country">{country}</p>
        </div>
      </div>
    </Link>
  );
};

export default DestinationCard;
