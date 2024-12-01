import { Link } from 'react-router-dom';
import ChipContainer from '../components/ChipContainer';
import styles from './SearchEvents.module.css';
import cardstyles from './SearchEventsCard.module.css';
import { EventData } from '../data/EventData';
import { useEffect } from 'react';

const SearchBar = () => {
  return (
    <form className={`${styles.search_bar} ${styles.shadow_bottom}`}>
      <input type="text" id="search" name="search"></input>
    </form>
  );
}

const EventCard = ({ data, id }) => {
  return (
    <Link className={`${cardstyles.card} ${styles.shadow_bottom}`} to={`/event-details/${id}`}>
       <img src={data.images[0]} alt={data.imageAlt} />
       <div className={cardstyles.content}>
        <div className={cardstyles.text}>
          <h3 className={cardstyles.title}>
            {data.title}
          </h3>
          <p className={cardstyles.location}>
            {data.location}
          </p>
        </div>
        <ChipContainer className={styles.chip_container} data={data} />
      </div>
    </Link>
  );
}

const SearchEvents = () => {
  // Force scroll to top when page becomes visible
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div>
      <div className={styles.left_panel}></div>
      <div className={styles.page_content}>
        <div className={styles.events}>
          <h1 className={styles.title}>Find Your Next Adventure!</h1>
          <SearchBar />
          <div className={styles.card_container}>
            {EventData.map((data, i) => {
              return (
                <EventCard key={i} data={data} id={i} />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;
