import { useState, useEffect } from 'react';
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
  const [startDate, setStartDate] = useState(new Date());
  const [minStars, setMinStars] = useState(1);

  // Force scroll to top when page becomes visible
  useEffect(() => {
    window.scrollTo(0, 0);
      // Set the startDate to today's date at midnight
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      setStartDate(today);
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };

  const handleStarClick = (e, star_index) => {
    setMinStars(star_index + 1);
  }

  const handleApplyFilters = (e) => {

  }

  return (
    <div>
      <div className={styles.left_panel}>
        <div className={styles.filters}>
          <h2 className={styles.filter_title}>Filters</h2>
          <DropDown />
          <input
            type="date"
            id="search-pick-date"
            className={`${styles.date_picker} ${styles.filter_item}`}
            value={startDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
            onClick={(e) => e.currentTarget.showPicker()}
          >
          </input>
          <div className={styles.dollar_picker_container}>
            <div className={`${styles.filter_item} ${styles.dollar_picker_bg}`}>
              <div className={styles.dollar_symbol}>$</div>
              <input
                type="number"
                name="min-price"
                min="0"
                step=".01"
                placeholder="Min:"
                className={`${styles.dollar_picker}`}
              />
            </div>
            <p className={styles.dash}>-</p>
            <div className={`${styles.filter_item} ${styles.dollar_picker_bg}`}>
              <div className={styles.dollar_symbol}>$</div>
              <input
                type="number"
                name="max-price"
                min="0"
                step=".01"
                placeholder="Max:"
                className={`${styles.dollar_picker}`}
              />
            </div>
          </div>
          <div className={`${styles.min_rating} ${styles.filter_item}`}>
            <p className={styles.min_text}>Minimum Rating</p>
            <p className={styles.min_stars}>
              {[...Array(5)].map((_,i) => (
                // Temp condition
                <span
                  key={i}
                  className={i < minStars ? `${styles.min_star} ${cardstyles.star_filled} star filled` : cardstyles.star}
                  onClick={(e) => handleStarClick(e, i)}
                >
                  ★
                </span>
              ))}
            </p>
          </div>
          <button
            className={`${styles.apply_btn} ${styles.filter_item}`}
            onClick={handleApplyFilters}
          >
            Apply
          </button>
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
