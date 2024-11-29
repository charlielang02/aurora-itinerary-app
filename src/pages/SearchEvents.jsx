import { Link } from 'react-router-dom';
import ChipContainer from '../components/ChipContainer';
import styles from '../styles/eventdetails.module.css';
import cardstyles from '../styles/eventcard.module.css';
import calgary_tower from '../assets/calgary-tower.jpg';
import calgary_stampede from '../assets/stampede.jpg';
import banff_skiing from '../assets/banff-skiing.jpg';
import lake_louise_skiing from '../assets/lake-louise-skiing.jpg';
import toronto_raptors_game from '../assets/toronto-raptors-game.jpg';
import paris_eiffel_tower from '../assets/paris-eiffel-tower.jpg';
import tokyo_sumo from '../assets/tokyo-sumo.jpg';
import new_york_broadway from '../assets/new-york-broadway.jpg';
import sydney_opera_house from '../assets/sydney-opera-house.jpg';
import london_eye from '../assets/london-eye.jpg';
import vancouver_granville from '../assets/vancouver-granville.jpg';
import dubai_burj_khalifa from '../assets/dubai-burj-khalifa.jpg';

export const EventData = [
  {
    title: "Skiing at Lake Louise",
    images: [lake_louise_skiing, lake_louise_skiing, lake_louise_skiing, lake_louise_skiing, lake_louise_skiing],
    rating: 4,
    reviews: 1850,
    location: "Lake Louise, AB, Canada",
    link: "https://www.lakelouise.com",
    tags: ["Skiing", "Winter Sports", "Alberta", "Mountain Views"],
    description: "Experience world-class skiing at the stunning Lake Louise Ski Resort. Enjoy breathtaking views, excellent ski conditions, and top-tier facilities.",
    priceRange: "$90 - $150",
    date: "2024-12-15",
    startTime: "8:00 AM",
    endTime: "4:00 PM"
  },
  {
    title: "Banff Skiing",
    images: [banff_skiing, banff_skiing, banff_skiing, banff_skiing, banff_skiing],
    rating: 4,
    reviews: 2200,
    location: "Banff, AB, Canada",
    link: "https://www.banfflakelouise.com",
    tags: ["Skiing", "Winter Sports", "Banff", "Alberta", "National Park"],
    description: "Hit the slopes in Banff National Park. Ski the iconic mountains and explore a winter wonderland in one of Canada’s most famous ski destinations.",
    priceRange: "$120 - $180",
    date: "2024-12-16",
    startTime: "9:00 AM",
    endTime: "4:00 PM"
  },
  {
    title: "Calgary Stampede",
    images: [calgary_stampede, calgary_stampede, calgary_stampede, calgary_stampede, calgary_stampede],
    rating: 5,
    reviews: 4756,
    location: "Calgary, AB, Canada",
    link: "https://calgarystampede.com",
    tags: ["Festival", "Rodeo", "Live Music", "Food"],
    description: "The Calgary Stampede is a world-renowned rodeo and exhibition, offering thrilling rides, live music, and delicious food in the heart of Calgary.",
    priceRange: "$25 - $75",
    date: "2024-07-10",
    startTime: "10:00 AM",
    endTime: "11:00 PM"
  },
  {
    title: "Calgary Tower Observation Deck",
    images: [calgary_tower, calgary_tower, calgary_tower, calgary_tower, calgary_tower],
    rating: 4,
    reviews: 3223,
    location: "Calgary, AB, Canada",
    link: "https://www.calgarytower.com",
    tags: ["City Views", "Landmark", "Dining"],
    description: "Enjoy panoramic views of Calgary from the observation deck of the iconic Calgary Tower. A must-see for visitors looking for a bird's eye view of the city.",
    priceRange: "$18 - $30",
    date: "2024-12-05",
    startTime: "10:00 AM",
    endTime: "11:00 AM"
  },
  {
    title: "Toronto Raptors Game",
    images: [toronto_raptors_game, toronto_raptors_game, toronto_raptors_game, toronto_raptors_game, toronto_raptors_game],
    rating: 5,
    reviews: 10500,
    location: "Scotiabank Arena, Toronto, ON, Canada",
    link: "https://www.nba.com/raptors",
    tags: ["Basketball", "Sports", "Toronto", "NBA"],
    description: "Watch the Toronto Raptors live in action at the Scotiabank Arena. Enjoy the electrifying atmosphere of a premier NBA game.",
    priceRange: "$40 - $200",
    date: "2024-12-12",
    startTime: "7:30 PM",
    endTime: "11:00 PM"
  },
  {
    title: "Eiffel Tower Tour",
    images: [paris_eiffel_tower, paris_eiffel_tower, paris_eiffel_tower, paris_eiffel_tower, paris_eiffel_tower],
    rating: 3,
    reviews: 15000,
    location: "Paris, France",
    link: "https://www.toureiffel.paris",
    tags: ["Landmark", "Tour", "Paris", "Romantic"],
    description: "Skip the line and get exclusive access to the Eiffel Tower’s observation deck. Enjoy magnificent views of Paris from this iconic landmark.",
    priceRange: "€25 - €50",
    date: "2024-12-20",
    startTime: "9:00 AM",
    endTime: "11:00 AM"
  },
  {
    title: "Sumo Wrestling in Tokyo",
    images: [tokyo_sumo, tokyo_sumo, tokyo_sumo, tokyo_sumo, tokyo_sumo],
    rating: 4,
    reviews: 1200,
    location: "Tokyo, Japan",
    link: "https://www.sumo.or.jp",
    tags: ["Culture", "Traditional", "Sport", "Tokyo"],
    description: "Witness an exhilarating sumo wrestling match at Ryogoku Kokugikan. Immerse yourself in the traditions of Japan and cheer for your favorite sumo wrestlers.",
    priceRange: "¥3000 - ¥8000",
    date: "2024-12-18",
    startTime: "1:00 PM",
    endTime: "5:00 PM"
  },
  {
    title: "Broadway Show in New York",
    images: [new_york_broadway, new_york_broadway, new_york_broadway, new_york_broadway, new_york_broadway],
    rating: 5,
    reviews: 9500,
    location: "Broadway, New York, NY, USA",
    link: "https://www.broadway.com",
    tags: ["Theater", "Musicals", "New York", "Entertainment"],
    description: "Enjoy a world-class Broadway musical in New York. Be dazzled by the performances and experience the magic of live theater.",
    priceRange: "$70 - $250",
    date: "2024-12-10",
    startTime: "8:00 PM",
    endTime: "10:30 PM"
  },
  {
    title: "Sydney Opera House Tour",
    images: [sydney_opera_house, sydney_opera_house, sydney_opera_house, sydney_opera_house, sydney_opera_house],
    rating: 3,
    reviews: 13000,
    location: "Sydney, Australia",
    link: "https://www.sydneyoperahouse.com",
    tags: ["Culture", "Tour", "Sydney", "Landmark"],
    description: "Take a guided tour of the Sydney Opera House and explore the architecture and history of this world-famous landmark. A must-see for visitors in Sydney.",
    priceRange: "$40 - $100",
    date: "2024-12-22",
    startTime: "10:00 AM",
    endTime: "12:00 PM"
  },
  {
    title: "London Eye Experience",
    images: [london_eye, london_eye, london_eye, london_eye, london_eye],
    rating: 4,
    reviews: 8000,
    location: "London, UK",
    link: "https://www.londoneye.com",
    tags: ["Landmark", "Tour", "Views", "London"],
    description: "Enjoy a stunning 360-degree view of London from the London Eye. Perfect for photography and seeing all of London’s landmarks from above.",
    priceRange: "£25 - £45",
    date: "2024-12-25",
    startTime: "11:00 AM",
    endTime: "12:00 PM"
  },
  {
    title: "Granville Island Tour",
    images: [vancouver_granville, vancouver_granville, vancouver_granville, vancouver_granville, vancouver_granville],
    rating: 4,
    reviews: 1500,
    location: "Vancouver, BC, Canada",
    link: "https://granvilleisland.com",
    tags: ["Food", "Culture", "Vancouver", "Art"],
    description: "Explore the vibrant Granville Island in Vancouver. Enjoy local foods, art galleries, and markets in one of the city's most popular spots.",
    priceRange: "$20 - $80",
    date: "2024-12-05",
    startTime: "2:00 PM",
    endTime: "5:00 PM"
  },
  {
    title: "Burj Khalifa Observation Deck",
    images: [dubai_burj_khalifa, dubai_burj_khalifa, dubai_burj_khalifa, dubai_burj_khalifa, dubai_burj_khalifa],
    rating: 5,
    reviews: 20000,
    location: "Dubai, UAE",
    link: "https://www.burjkhalifa.ae",
    tags: ["Landmark", "Views", "Dubai"],
    description: "Experience breathtaking views from the Burj Khalifa’s observation deck. At 828 meters, it's the tallest building in the world!",
    priceRange: "AED 130 - AED 250",
    date: "2024-12-08",
    startTime: "10:00 AM",
    endTime: "12:00 PM"
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
