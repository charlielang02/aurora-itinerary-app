import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../data/EventData';
import styles from './SearchEvents.module.css';
import ChipContainer from '../components/ChipContainer';
import cardstyles from './SearchEventsCard.module.css';
import DropDown from '../components/DropDown';

const SearchBar = () => {
  return (
    <form className={`${styles.search_bar} ${styles.shadow_bottom}`}>
      <input type="text" id="search" name="search" placeholder="Event name, location, keyword..." />
      <button className={styles.search_btn}>Search</button>
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
          <div className={cardstyles.star_container}>
            <p>
              {[...Array(5)].map((_,i) => (
                <span key={i} className={i < data.rating ? `${cardstyles.star_filled} star filled` : cardstyles.star}>★</span>
              ))}
            </p>
            <p className={cardstyles.review_count}>{data.userReviews.length} reviews</p>
          </div>
          <p className={cardstyles.info}>
            {data.location}
          </p>
          <p className={cardstyles.info}>
            {data.startTime} {data.endTime}
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
      <div className={styles.left_panel}>
        <div className={styles.filters}>
          <h2 className={styles.filter_title}>Filters</h2>
          <DropDown />
          <div className={`${styles.date_picker} ${styles.filter_item}`}></div>
          <div className={`${styles.dollar_picker} ${styles.filter_item}`}></div>
          <div className={`${styles.min_rating} ${styles.filter_item}`}></div>
          <div className={`${styles.apply_btn} ${styles.filter_item}`}>Apply</div>
        </div>
      </div>
      <div className={styles.page_content}>
        <div className={styles.events}>
          <div className={styles.header}>
            <h1>Find Your Next Adventure!</h1>
            <SearchBar />
          </div>
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
