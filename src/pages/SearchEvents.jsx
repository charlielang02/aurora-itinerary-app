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
    reviews: 6,
    location: "Lake Louise, AB, Canada",
    link: "https://www.lakelouise.com",
    tags: ["Skiing", "Winter Sports", "Alberta", "Mountain Views"],
    description: "Experience world-class skiing at the stunning Lake Louise Ski Resort. Enjoy breathtaking views, excellent ski conditions, and top-tier facilities.",
    priceRange: "$90 - $150",
    date: "2024-12-15",
    startTime: "8:00 AM",
    endTime: "4:00 PM",
    userReviews: [
      { reviewer: "Alice", rating: 4, comment: "Fantastic slopes and amazing views!" },
      { reviewer: "Bob", rating: 5, comment: "Perfect snow conditions. Highly recommend!" },
      { reviewer: "Charlie", rating: 4, comment: "Great experience but a bit crowded." },
      { reviewer: "Diana", rating: 3, comment: "Good skiing but overpriced." },
      { reviewer: "Ella", rating: 4, comment: "Beautiful resort and friendly staff." },
      { reviewer: "Frank", rating: 5, comment: "Best skiing experience in Alberta!" },
    ],
  },
  {
    title: "Banff Skiing",
    images: [banff_skiing, banff_skiing, banff_skiing, banff_skiing, banff_skiing],
    rating: 4,
    reviews: 6,
    location: "Banff, AB, Canada",
    link: "https://www.banfflakelouise.com",
    tags: ["Skiing", "Winter Sports", "Banff", "Alberta", "National Park"],
    description: "Hit the slopes in Banff National Park. Ski the iconic mountains and explore a winter wonderland in one of Canada’s most famous ski destinations.",
    priceRange: "$120 - $180",
    date: "2024-12-16",
    startTime: "9:00 AM",
    endTime: "4:00 PM",
    userReviews: [
      { reviewer: "George", rating: 4, comment: "Excellent trails and breathtaking scenery." },
      { reviewer: "Helen", rating: 4, comment: "Very well maintained slopes." },
      { reviewer: "Irene", rating: 3, comment: "Lovely place but overpriced food." },
      { reviewer: "Jack", rating: 4, comment: "Had an amazing time skiing here!" },
      { reviewer: "Karen", rating: 5, comment: "My favorite skiing destination in Canada." },
      { reviewer: "Leo", rating: 4, comment: "Great slopes but parking was an issue." },
    ],
  },
  {
    title: "Calgary Stampede",
    images: [calgary_stampede, calgary_stampede, calgary_stampede, calgary_stampede, calgary_stampede],
    rating: 5,
    reviews: 7,
    location: "Calgary, AB, Canada",
    link: "https://calgarystampede.com",
    tags: ["Festival", "Rodeo", "Live Music", "Food"],
    description: "The Calgary Stampede is a world-renowned rodeo and exhibition, offering thrilling rides, live music, and delicious food in the heart of Calgary.",
    priceRange: "$25 - $75",
    date: "2024-07-10",
    startTime: "10:00 AM",
    endTime: "11:00 PM",
    userReviews: [
      { reviewer: "Megan", rating: 5, comment: "Unforgettable experience!" },
      { reviewer: "Nathan", rating: 5, comment: "Amazing rodeo shows and music." },
      { reviewer: "Olivia", rating: 4, comment: "Crowded but worth it." },
      { reviewer: "Paul", rating: 5, comment: "Best festival I’ve ever attended." },
      { reviewer: "Quinn", rating: 5, comment: "Loved the food and entertainment." },
      { reviewer: "Rachel", rating: 5, comment: "So much fun for the whole family." },
      { reviewer: "Sam", rating: 5, comment: "Highlight of my summer!" },
    ],
  },
  {
    title: "Calgary Tower Observation Deck",
    images: [calgary_tower, calgary_tower, calgary_tower, calgary_tower, calgary_tower],
    rating: 4,
    reviews: 6,
    location: "Calgary, AB, Canada",
    link: "https://www.calgarytower.com",
    tags: ["City Views", "Landmark", "Dining"],
    description: "Enjoy panoramic views of Calgary from the observation deck of the iconic Calgary Tower. A must-see for visitors looking for a bird's eye view of the city.",
    priceRange: "$18 - $30",
    date: "2024-12-05",
    startTime: "10:00 AM",
    endTime: "11:00 AM",
    userReviews: [
      { reviewer: "Tina", rating: 4, comment: "Incredible views of the city!" },
      { reviewer: "Uma", rating: 5, comment: "A must-visit for first-timers in Calgary." },
      { reviewer: "Victor", rating: 4, comment: "Loved the dining experience at the top." },
      { reviewer: "Wendy", rating: 3, comment: "Nice views but overpriced tickets." },
      { reviewer: "Xander", rating: 4, comment: "Well-maintained and informative." },
      { reviewer: "Yara", rating: 4, comment: "Beautiful scenery, especially at sunset." },
    ],
  },
  {
    title: "Toronto Raptors Game",
    images: [toronto_raptors_game, toronto_raptors_game, toronto_raptors_game, toronto_raptors_game, toronto_raptors_game],
    rating: 5,
    reviews: 6,
    location: "Scotiabank Arena, Toronto, ON, Canada",
    link: "https://www.nba.com/raptors",
    tags: ["Basketball", "Sports", "Toronto", "NBA"],
    description: "Watch the Toronto Raptors live in action at the Scotiabank Arena. Enjoy the electrifying atmosphere of a premier NBA game.",
    priceRange: "$40 - $200",
    date: "2024-12-12",
    startTime: "7:30 PM",
    endTime: "11:00 PM",
    userReviews: [
      { reviewer: "Zack", rating: 5, comment: "Amazing energy in the arena!" },
      { reviewer: "Amy", rating: 5, comment: "Loved every moment of the game." },
      { reviewer: "Ben", rating: 5, comment: "Great seats and an exciting match." },
      { reviewer: "Chloe", rating: 4, comment: "Fun event but parking was a hassle." },
      { reviewer: "David", rating: 5, comment: "Perfect way to spend an evening." },
      { reviewer: "Ella", rating: 5, comment: "Go Raptors! The atmosphere was insane." },
    ],
},
  {
    title: "Eiffel Tower Tour",
    images: [paris_eiffel_tower, paris_eiffel_tower, paris_eiffel_tower, paris_eiffel_tower, paris_eiffel_tower],
    rating: 3,
    reviews: 6,
    location: "Paris, France",
    link: "https://www.toureiffel.paris",
    tags: ["Landmark", "Tour", "Paris", "Romantic"],
    description: "Skip the line and get exclusive access to the Eiffel Tower’s observation deck. Enjoy magnificent views of Paris from this iconic landmark.",
    priceRange: "€25 - €50",
    date: "2024-12-20",
    startTime: "9:00 AM",
    endTime: "11:00 AM",
    userReviews: [
      { reviewer: "Fiona", rating: 3, comment: "Beautiful views but the wait time was too long." },
      { reviewer: "Gary", rating: 4, comment: "Great experience, but very crowded." },
      { reviewer: "Holly", rating: 3, comment: "Expensive for what it is." },
      { reviewer: "Ian", rating: 4, comment: "The view from the top is worth it." },
      { reviewer: "Jenna", rating: 2, comment: "Overhyped and overpriced." },
      { reviewer: "Kyle", rating: 3, comment: "Nice experience, but not as romantic as expected." },
    ],
  },
  {
    title: "Sumo Wrestling in Tokyo",
    images: [tokyo_sumo, tokyo_sumo, tokyo_sumo, tokyo_sumo, tokyo_sumo],
    rating: 4,
    reviews: 6,
    location: "Tokyo, Japan",
    link: "https://www.sumo.or.jp",
    tags: ["Culture", "Traditional", "Sport", "Tokyo"],
    description: "Witness an exhilarating sumo wrestling match at Ryogoku Kokugikan. Immerse yourself in the traditions of Japan and cheer for your favorite sumo wrestlers.",
    priceRange: "¥3000 - ¥8000",
    date: "2024-12-18",
    startTime: "1:00 PM",
    endTime: "5:00 PM",
    userReviews: [
      { reviewer: "Liam", rating: 4, comment: "Such a unique experience, a must-see in Tokyo!" },
      { reviewer: "Mia", rating: 5, comment: "Amazing to watch the wrestlers live." },
      { reviewer: "Noah", rating: 4, comment: "Very informative for first-timers." },
      { reviewer: "Olivia", rating: 3, comment: "Good but seats were uncomfortable." },
      { reviewer: "Patrick", rating: 4, comment: "Fascinating cultural insight." },
      { reviewer: "Quincy", rating: 5, comment: "Loved the atmosphere and tradition." },
    ],
  },
  {
    title: "Broadway Show in New York",
    images: [new_york_broadway, new_york_broadway, new_york_broadway, new_york_broadway, new_york_broadway],
    rating: 5,
    reviews: 6,
    location: "Broadway, New York, NY, USA",
    link: "https://www.broadway.com",
    tags: ["Theater", "Musicals", "New York", "Entertainment"],
    description: "Enjoy a world-class Broadway musical in New York. Be dazzled by the performances and experience the magic of live theater.",
    priceRange: "$70 - $250",
    date: "2024-12-10",
    startTime: "8:00 PM",
    endTime: "10:30 PM",
    userReviews: [
      { reviewer: "Rachel", rating: 5, comment: "Absolutely stunning performance!" },
      { reviewer: "Steve", rating: 5, comment: "Broadway never disappoints." },
      { reviewer: "Tina", rating: 4, comment: "Great show but expensive tickets." },
      { reviewer: "Ursula", rating: 5, comment: "A magical experience. Loved every minute." },
      { reviewer: "Vince", rating: 5, comment: "Best musical I’ve ever seen!" },
      { reviewer: "Wendy", rating: 5, comment: "Broadway magic at its finest." },
    ],
  },
  {
    title: "Sydney Opera House Tour",
    images: [sydney_opera_house, sydney_opera_house, sydney_opera_house, sydney_opera_house, sydney_opera_house],
    rating: 3,
    reviews: 6,
    location: "Sydney, Australia",
    link: "https://www.sydneyoperahouse.com",
    tags: ["Culture", "Tour", "Sydney", "Landmark"],
    description: "Take a guided tour of the Sydney Opera House and explore the architecture and history of this world-famous landmark. A must-see for visitors in Sydney.",
    priceRange: "$40 - $100",
    date: "2024-12-22",
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    userReviews: [
      { reviewer: "Xander", rating: 3, comment: "Interesting tour, but not worth the high price." },
      { reviewer: "Yara", rating: 4, comment: "Beautiful architecture and informative guide." },
      { reviewer: "Zara", rating: 3, comment: "Great views but the tour was too rushed." },
      { reviewer: "Alan", rating: 3, comment: "Felt a bit touristy, but enjoyable." },
      { reviewer: "Bianca", rating: 4, comment: "Iconic landmark with a great history lesson." },
      { reviewer: "Carl", rating: 2, comment: "Expected more for the ticket price." },
    ],
  },
  {
    title: "London Eye Experience",
    images: [london_eye, london_eye, london_eye, london_eye, london_eye],
    rating: 4,
    reviews: 6,
    location: "London, UK",
    link: "https://www.londoneye.com",
    tags: ["Landmark", "Tour", "Views", "London"],
    description: "Enjoy a stunning 360-degree view of London from the London Eye. Perfect for photography and seeing all of London’s landmarks from above.",
    priceRange: "£25 - £45",
    date: "2024-12-25",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    userReviews: [
      { reviewer: "Diana", rating: 5, comment: "The view of London is spectacular!" },
      { reviewer: "Elliot", rating: 4, comment: "Loved the ride, but the line was long." },
      { reviewer: "Fiona", rating: 4, comment: "Great experience, especially at night." },
      { reviewer: "George", rating: 3, comment: "Nice view but overpriced." },
      { reviewer: "Hannah", rating: 4, comment: "Perfect for first-time visitors to London." },
      { reviewer: "Isaac", rating: 5, comment: "Breathtaking views of the city!" },
    ],
  },
  {
    title: "Granville Island Tour",
    images: [vancouver_granville, vancouver_granville, vancouver_granville, vancouver_granville, vancouver_granville],
    rating: 4,
    reviews: 6,
    location: "Vancouver, BC, Canada",
    link: "https://granvilleisland.com",
    tags: ["Food", "Culture", "Vancouver", "Art"],
    description: "Explore the vibrant Granville Island in Vancouver. Enjoy local foods, art galleries, and markets in one of the city's most popular spots.",
    priceRange: "$20 - $80",
    date: "2024-12-05",
    startTime: "2:00 PM",
    endTime: "5:00 PM",
    userReviews: [
      { reviewer: "Jack", rating: 4, comment: "Amazing food and friendly vendors." },
      { reviewer: "Karen", rating: 5, comment: "A hidden gem in Vancouver!" },
      { reviewer: "Liam", rating: 4, comment: "Perfect place to explore with family." },
      { reviewer: "Mia", rating: 3, comment: "Good, but very touristy." },
      { reviewer: "Noah", rating: 5, comment: "The art galleries were stunning!" },
      { reviewer: "Olivia", rating: 4, comment: "Loved the fresh produce market." },
    ],
  },
  {
    title: "Burj Khalifa Observation Deck",
    images: [dubai_burj_khalifa, dubai_burj_khalifa, dubai_burj_khalifa, dubai_burj_khalifa, dubai_burj_khalifa],
    rating: 5,
    reviews: 6,
    location: "Dubai, UAE",
    link: "https://www.burjkhalifa.ae",
    tags: ["Landmark", "View", "Dubai", "Luxury"],
    description: "Visit the tallest building in the world and enjoy unparalleled views of Dubai from the Burj Khalifa's observation deck.",
    priceRange: "AED 150 - AED 500",
    date: "2024-12-15",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    userReviews: [
      { reviewer: "Pia", rating: 5, comment: "Breathtaking views from the top!" },
      { reviewer: "Quincy", rating: 5, comment: "Worth every penny for the experience." },
      { reviewer: "Ravi", rating: 4, comment: "Fantastic but very crowded." },
      { reviewer: "Sophia", rating: 5, comment: "The sunset view is magical." },
      { reviewer: "Tom", rating: 5, comment: "The highlight of our Dubai trip." },
      { reviewer: "Uma", rating: 5, comment: "Absolutely stunning architecture." },
    ],
  },
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
