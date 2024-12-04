import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { EventData } from '../data/EventData';
import styles from './SearchEvents.module.css';
import ChipContainer from '../components/ChipContainer';
import cardstyles from './SearchEventsCard.module.css';
import Dropdown from '../components/DropDown';
import { useGlobalContext } from '../hooks/GlobalContext';
import { useLocation } from 'react-router-dom';
import { StopWords } from '../data/StopWords';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

/*
 * String method to remove stop words
 * Written by GeekLad http://geeklad.com
 *   Output: The original String with stop words removed
 */
const removeStopWords = (string) => {
  let x;
  let y;
  let word;
  let stop_word;
  let regex_str;
  let regex;

  // Split out all the individual words in the phrase
  const words = string.match(/[^\s]+|\s+[^\s+]$/g)

  // Review all the words
  for (x = 0; x < words.length; x++) {
    // For each word, check all the stop words
    for (y = 0; y < StopWords.length; y++) {
      // Get the current word
      word = words[x].replace(/\s+|[^a-z]+/ig, "");	// Trim the word and remove non-alpha

      // Get the stop word
      stop_word = StopWords[y];

      // If the word matches the stop word, remove it from the keywords
      if (word.toLowerCase() == stop_word) {
        // Build the regex
        regex_str = "^\\s*" + stop_word + "\\s*$";		// Only word
        regex_str += "|^\\s*" + stop_word + "\\s+";		// First word
        regex_str += "|\\s+" + stop_word + "\\s*$";		// Last word
        regex_str += "|\\s+" + stop_word + "\\s+";		// Word somewhere in the middle
        regex = new RegExp(regex_str, "ig");

        // Remove the word from the keywords
        string = string.replace(regex, " ");
      }
    }
  }
  return string.replace(/^\s+|\s+$/g, "");
}

const GetEventId = (event) => EventData.findIndex(e => e.title === event.title);

const countryMapping = {
  'UK': 'United Kingdom',
  'USA': 'United States'
};

const ToFullCountryName = (country) => {
  return countryMapping[country] || country;
}

const ToAbbreviatedCountryName = (country) => {
  for (let abbreviation in countryMapping) {
    if (countryMapping[abbreviation] === country) {
      return abbreviation;
    }
  }
  return country;
}

const GetCountries = () => {
  const countriesSet = new Set();

  EventData.forEach(event => {
    const locationParts = event.location.replace(',', '').split(' ');
    const country = locationParts[locationParts.length - 1];
    countriesSet.add(ToFullCountryName(country));
  });

  return Array.from(countriesSet);
}

const Countries = GetCountries();

const GetSearchableEventData = () => {
  let data = EventData;

  data.forEach(event => {
    event.descriptionKeywords = removeStopWords(event.description).split(' ');
    event.locationKeywords = event.location.replace(/,/g, '').split(' ');
  });

  return data;
}

const SearchableEventData = GetSearchableEventData();

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
  const { setNavigateFromEventCard } = useGlobalContext();

  const handleCardClick = () => {
    setNavigateFromEventCard(true);
  };

  return (
    <Link className={`${cardstyles.card} ${styles.shadow_bottom}`} to={`/event-details/${id}`} onClick={handleCardClick}>
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

const getEventsFilteredBySearchQuery = (eventList, isOrganizer) => {
  const events = eventList.filter(event => {

    // If isOrganizer is true, only include events with organizerID === 1
    if (isOrganizer && event.organizerID !== 1) {
      return false;
    }

    let searchValue = new URLSearchParams(location.search).get('search');
    if (!searchValue) {
      return true;
    }
    searchValue = searchValue.toLowerCase();

    if (event.tags.some(t => searchValue.includes(t))) {
      return true;
    }
    if (event.locationKeywords.some(w => searchValue.includes(w.toLowerCase()))) {
      return true;
    }
    if (event.descriptionKeywords.some(w => searchValue.includes(w.toLowerCase()))) {
      return true;
    }
    return false;
  });

  return events;
}

const SearchEvents = ({ isOrganizer }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const searchQuery = new URLSearchParams(location.search);
  const { country } = useGlobalContext();
  const { date } = useGlobalContext();
  const { minPrice } = useGlobalContext();
  const { maxPrice } = useGlobalContext();
  const { starRating } = useGlobalContext();
  const { setCountry } = useGlobalContext();
  const { setDate } = useGlobalContext();
  const { setMinPrice } = useGlobalContext();
  const { setMaxPrice } = useGlobalContext();
  const { setStarRating } = useGlobalContext();
  const { navigateFromEventCard } = useGlobalContext();
  const { setNavigateFromEventCard } = useGlobalContext();
  const [searchBarText, setSearchBarText] = useState(searchQuery);
  const [selectedCountry, setSelectedCountry] = useState(country || '');
  const [startDate, setStartDate] = useState(date || null);
  const [minCost, setMinCost] = useState(minPrice || '');
  const [maxCost, setMaxCost] = useState(maxPrice || '');
  const [minRating, setMinRating] = useState(starRating || 0);
  const [eventData, setEventData] = useState(SearchableEventData);
  const eventsFilteredBySearchQuery = getEventsFilteredBySearchQuery(eventData, isOrganizer);

  // Force scroll to top when page becomes visible
  useEffect(() => {
    window.scrollTo(0, 0);
    handleApplyFilters();
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get('search');
    if (search !== null) {
      setSearchBarText(search);
    }
  }, [location.search]);

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
  }

  const handleSearchTextChanged = (e) => {
    setSearchBarText(e.target.value);
  }

  const getEventsFilteredBySearchOptions = (eventList) => {
    setCountry(selectedCountry);
    setDate(startDate);
    setMinPrice(minCost);
    setMaxPrice(maxCost);
    setStarRating(minRating);

    const events = eventList.filter(event => {
      if (selectedCountry && !event.location.includes(ToAbbreviatedCountryName(selectedCountry))) {
        return false;
      }
      if (startDate !== null && !AreDatesEqual(startDate, new Date(event.date))) {
        return false;
      }
      if (minCost !== '' && event.minPrice < minCost) {
        return false;
      }
      if (maxCost !== '' && event.maxPrice > maxCost) {
        return false;
      }
      if (minRating > 0 && event.rating < minRating) {
        console.log(event.title);
        return false;
      }
      return true;
    });

    return events;
  }

  const IsFilterApplied = () => {
    const [searchParams] = useSearchParams();
  
    // Check if any query parameters exist
    const hasQueryParams = [...searchParams.keys()].length > 0;
  
    // Check filter-related states
    const hasFiltersApplied = 
      selectedCountry !== '' ||
      startDate !== null ||
      minCost !== '' ||
      maxCost !== '' ||
      minRating > 0;
  
    // Return true if either condition is met
    return hasQueryParams || hasFiltersApplied;
  };
  

  const handleApplyFilters = () => {
    setCountry(selectedCountry);
    setDate(startDate);
    setMinPrice(minCost);
    setMaxPrice(maxCost);
    setStarRating(minRating);
    setEventData(getEventsFilteredBySearchOptions(SearchableEventData));
  }

  const ClearFilters = () => {
    setSelectedCountry('');
    setStartDate(null);
    setMinCost('');
    setMaxCost('');
    setMinRating(0);
    setSearchBarText('');
    setEventData(SearchableEventData);

    navigate(location.pathname, { replace: true });
  }

  return (
    <div className={styles.page}>
      <div className={styles.left_panel}>
        <div className={styles.filters}>
          <h1 className={styles.mobile_title}>
            {isOrganizer ? "Browse Your Created Events" : "Find Your Next Adventure!"}
          </h1>
          <h2 className={styles.filter_title}>
            Search Filters
          </h2>
          <Dropdown
            dropdownOptions={Countries}
            placeholderText={"Select Country"}
            onSelect={setSelectedCountry}
            selectedItemRef={selectedCountry}
          />
          <input
            type="date"
            id="search-pick-date"
            className={`${styles.date_picker} ${styles.filter_item}`}
            value={startDate !== null ? startDate.toISOString().split('T')[0] : ''}
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
                step="1"
                placeholder="Min:"
                className={`${styles.dollar_picker}`}
                onChange={handleMinCostChange}
                value={minCost}
              />
            </div>
            <p className={styles.dash}>-</p>
            <div className={`${styles.filter_item} ${styles.dollar_picker_bg}`}>
              <div className={styles.dollar_symbol}>$</div>
              <input
                type="number"
                name="max-price"
                min="0"
                step="1"
                placeholder="Max:"
                className={`${styles.dollar_picker}`}
                onChange={handleMaxCostChange}
                value={maxCost}
              />
            </div>
          </div>
          <div className={`${styles.min_rating} ${styles.filter_item}`}>
            <p className={styles.min_text}>Minimum Rating</p>
            <p className={styles.min_stars}>
              {[...Array(5)].map((_, i) => (
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
          <button
            disabled={!IsFilterApplied()}
            className={`${styles.apply_btn} ${styles.filter_item}`}
            onClick={handleApplyFilters}
          >
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
            <h1 className={styles.title}>
              {isOrganizer ? "Browse Your Created Events" : "Find Your Next Adventure!"}
            </h1>
            <form className={`${styles.search_bar} ${styles.shadow_bottom}`}>
              <SearchIcon className={styles.search_icon} />
              <input
                type="text"
                id="search"
                name="search"
                placeholder="Event name, location, keyword..."
                value={searchBarText}
                onChange={handleSearchTextChanged}
              />
              <button className={styles.search_btn}>
                Search
              </button>
            </form>
          </div>
          <div className={styles.card_container}>
            {eventsFilteredBySearchQuery.map((data, i) => {
              return (
                <EventCard key={i} data={data} id={GetEventId(data)} />
              );
            })}
            {eventsFilteredBySearchQuery.length === 0 && (
              <p>No events found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchEvents;
