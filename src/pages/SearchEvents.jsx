import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../data/EventData';
import styles from './SearchEvents.module.css';
import ChipContainer from '../components/ChipContainer';
import cardstyles from './SearchEventsCard.module.css';
import DropDown from '../components/DropDown';

const GetCountries = () => {
  const countriesSet = new Set();
  const countryMapping = {
    'UK': 'United Kingdom',
    'USA': 'United States'
  };

  EventData.forEach(event => {
    const locationParts = event.location.split(', ');
    const country = locationParts[locationParts.length - 1];

    countriesSet.add(countryMapping[country] || country);
  });

  return Array.from(countriesSet);
}

const Countries = GetCountries();

const TodayDate = new Date();
TodayDate.setHours(0, 0, 0, 0);

const AreDatesEqual = (date1, date2) => {
  return date1.getDate() === date2.getDate()
      && date1.getMonth() === date2.getMonth()
      && date1.getYear() === date2.getYear();
};

const SearchIcon = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
        stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
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
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < data.rating ? `${cardstyles.star_filled} star filled` : cardstyles.star}>★</span>
              ))}
            </p>
            <p className={cardstyles.review_count}>{data.userReviews.length} reviews</p>
          </div>
          <p className={cardstyles.info}>
            {data.location}
          </p>
          <p className={cardstyles.info}>
            {data.date} at {data.startTime}-{data.endTime}
          </p>
        </div>
        <ChipContainer className={styles.chip_container} data={data} />
      </div>
    </Link>
  );
}

const SearchEvents = () => {
  const [searchedText, setSearchedText] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [minCost, setMinCost] = useState(0);
  const [maxCost, setMaxCost] = useState(0);
  const [minRating, setMinRating] = useState(0);
  const [filteredEventData, setFilteredEventData] = useState(EventData);

  // Force scroll to top when page becomes visible
  useEffect(() => {
    window.scrollTo(0, 0);
    setStartDate(TodayDate);
  }, []);

  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };

  const handleStarClick = (star_index) => {
    setMinRating(star_index + 1);
  }

  const handleMinCostChange = (e) => {
    const value = e.target.value ? Number(e.target.value) : 0;
    if (value != minCost) {
      setMinCost(value);
    }
  }

  const handleMaxCostChange = (e) => {
    const value = e.target.value ? Number(e.target.value) : 0;
    if (value != maxCost) {
      setMaxCost(value);
    }
    console.log(maxCost);
  }

  const handleSearchTextChanged = (e) => {
    setSearchedText(e.target.value);
  }

  const handleApplyFilters = () => {
    let events = EventData;
    
    events = events.filter(event => {
      if (selectedCountry && !event.location.includes(selectedCountry)) {
        return false;
      }
      if (!AreDatesEqual(startDate, TodayDate) && !AreDatesEqual(startDate, new Date(event.date))) {
        return false;
      }
      if (minCost > 0 && event.minPrice < minCost) {
        return false;
      }
      if (maxCost > 0 && event.maxPrice > maxCost) {
        return false;
      }
      if (minRating > 0 && event.rating < minRating) {
        return false;
      }
      return true;
    });

    setFilteredEventData(events);
  }

  const IsFilterApplied = () => {
    return selectedCountry !== ''
      || AreDatesEqual(startDate, TodayDate)
      || minCost > 0
      || maxCost > 0
      || minRating > 0;
  }

  const ClearFilters = () => {
    setSelectedCountry('');
    setStartDate(TodayDate);
    setMinCost(0);
    setMaxCost(0);
    setMinRating(0);
    setFilteredEventData(EventData);
  }

  const handleSearchBtnClicked = (e) => {

  }

  return (
    <div>
      <div className={styles.left_panel}>
        <div className={styles.filters}>
          <h2 className={styles.filter_title}>
            Search Filters
          </h2>
          <DropDown
            dropdownOptions={Countries}
            placeholderText={"Select Country"}
            onSelect={setSelectedCountry}
          />
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
                onChange={handleMinCostChange}
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
                onChange={handleMaxCostChange}
              />
            </div>
          </div>
          <div className={`${styles.min_rating} ${styles.filter_item}`}>
            <p className={styles.min_text}>Minimum Rating</p>
            <p className={styles.min_stars}>
              {[...Array(5)].map((_, i) => (
                // Temp condition
                <span
                  key={i}
                  className={i < minRating ? `${styles.min_star} ${cardstyles.star_filled} star filled` : cardstyles.star}
                  onClick={() => handleStarClick(i)}
                >
                  ★
                </span>
              ))}
            </p>
          </div>
          <button className={`${styles.apply_btn} ${styles.filter_item}`} onClick={handleApplyFilters}>
            Apply
          </button>
          {IsFilterApplied() && (
            <p className={styles.clear} onClick={ClearFilters}>
              Clear filters
            </p>
          )}
        </div>
      </div>
      <div className={styles.page_content}>
        <div className={styles.events}>
          <div className={styles.header}>
            <h1>Find Your Next Adventure!</h1>
            <form className={`${styles.search_bar} ${styles.shadow_bottom}`}>
              <SearchIcon className={styles.search_icon} />
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Event name, location, keyword..."
                value={searchedText}
                onChange={handleSearchTextChanged}
              />
              <button className={styles.search_btn} onClick={handleSearchBtnClicked}>
                Search
              </button>
            </form>
          </div>
          <div className={styles.card_container}>
            {filteredEventData.map((data, i) => {
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
