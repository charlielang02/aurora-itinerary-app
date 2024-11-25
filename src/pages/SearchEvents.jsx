import { Link } from 'react-router-dom';
import ChipContainer from '../components/ChipContainer';
import styles from '../styles/eventdetails.module.css';
import cardstyles from '../styles/eventcard.module.css';
import calgary_tower from '../assets/calgary-tower.jpg';
import calgary_stampede from '../assets/stampede.jpg';

export const EventData = [
  {
    title: "Calgary Tower",
    image: calgary_tower,
    rating: 4,
    reviews: 3223,
    location: "Calgary, AB, Canada",
    link: "https://canada.ca",
    tags: ["City Views", "Dining", "Landmark"]
  },
  {
    title: "Calgary Stampede",
    image: calgary_stampede,
    rating: 4,
    reviews: 4756,
    location: "Calgary, AB, Canada",
    link: "https://canada.ca",
    tags: ["Festival", "Rodeo", "Live Music", "Food"]
  },
  {
    title: "Calgary Tower",
    image: calgary_tower,
    rating: 4,
    reviews: 3223,
    location: "Calgary, AB, Canada",
    link: "https://canada.ca",
    tags: ["City Views", "Dining", "Landmark"]
  },
  {
    title: "Calgary Stampede",
    image: calgary_stampede,
    rating: 4,
    reviews: 4756,
    location: "Calgary, AB, Canada",
    link: "https://canada.ca",
    tags: ["Festival", "Rodeo", "Live Music", "Food"]
  },
  {
    title: "Calgary Tower",
    image: calgary_tower,
    rating: 4,
    reviews: 3223,
    location: "Calgary, AB, Canada",
    link: "https://canada.ca",
    tags: ["City Views", "Dining", "Landmark"]
  },
  {
    title: "Calgary Stampede",
    image: calgary_stampede,
    rating: 4,
    reviews: 4756,
    location: "Calgary, AB, Canada",
    link: "https://canada.ca",
    tags: ["Festival", "Rodeo", "Live Music", "Food"]
  }
];

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
       <img src={data.image} alt={data.imageAlt} />
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
  return (
    <div>
      {/* temp, used this for testing <div className={styles.nav}></div> */}
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
