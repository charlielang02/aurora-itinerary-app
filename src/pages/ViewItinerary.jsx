import './ViewItinerary.css';
import React, { useState, useEffect, useRef } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const events = [
  {
    date: '2024-12-07',
    startHour: 14,
    duration: 3,
    title: "Calgary Flames vs. Minnesota Wild",
    type: "sports",
    location: "Scotiabank Saddledome - 555 Saddledome Rise SE, Calgary, AB T2G 2W1"
  },
  {
    date: '2024-12-07',
    startHour: 11,
    duration: 2,
    title: "Production: Beauty and the Grinch",
    type: "music",
    location: "Jubilations Dinner Theatre - 1002 37 Street SW Calgary, AB T3C 1S1 Canada"
  },
  {
    date: '2024-12-06',
    startHour: 18,
    duration: 3,
    title: "Top Talent Wrestling",
    type: "sports",
    location: "The Palace Theatre - 219 8 Ave SW, Calgary, AB T2P 7N2"
  },

  //Christmas Market 12pm-5pm - gets added from find events page
  {
    date: '2024-12-06',
    startHour: 12,
    duration: 5,
    title: "International Christmas Market",
    type: "music",
    location: "Spruce Meadoes - 18011 Spruce Meadows Way SW, Calgary, AB T2X 4B7"
  },
  {
    date: '2024-12-05',
    startHour: 15,
    duration: 3,
    title: "Heritage Park Historical Village Tour",
    type: "musuems",
    location: "Heritage Park - 1900 Heritage Dr SW, Calgary, AB T2V 2X3"
  },
  {
    date: '2024-12-05',
    startHour: 19,
    duration: 2,
    title: "Storybook Theatre: Beauty & the Beast The Musical",
    type: "music",
    location: "Jubilations Dinner Theatre - 1002 37 Street SW Calgary, AB T3C 1S1 Canada"
  },
  {
    date: '2024-12-04',
    startHour: 16,
    duration: 2,
    title: "iFLY - Indoor Skydiving",
    type: "sports",
    location: "iFLY - 811 64 Ave NE, Calgary, AB T2E 3Z8"
  },
  {
    date: '2024-12-04',
    startHour: 13,
    duration: 1,
    title: "Glenbow Musuem Tour",
    type: "musuems",
    location: "Glenbow Musuem - 130 9 Ave SE, Calgary, AB T2G 0P3"
  },
  {
    date: '2024-12-03',
    startHour: 11,
    duration: 2,
    title: "Takao Tanabe Printmaker Exhibition",
    type: "musuems",
    location: "The Edison, floor 2 - 150 9 Ave SW, Calgary, AB T2P 3H9"
  },
  {
    date: '2024-12-03',
    startHour: 18,
    duration: 3,
    title: "All Those Rolling Stones",
    type: "music",
    location: "Jubilations Dinner Theatre - 1002 37 Street SW Calgary, AB T3C 1S1 Canada"
  },
  {
    date: '2024-12-02',
    startHour: 20,
    duration: 1,
    title: "Zoolights",
    type: "musuems",
    location: "Calgary Zoo - 210 St. George's Drive NE, Calgary, AB T2E 7V6"
  },

  //skiing 9am-4pm - gets added from find events page
  {
    date: '2024-12-02',
    startHour: 8,
    duration: 8,
    title: "Skiing at Lake Louis",
    type: "sports",
    location: "Lake Louis - 1 Whitehorn Rd, Lake Louise, AB T0L 1E0"
  },

  {
    date: '2024-12-01',
    startHour: 13,
    duration: 2,
    title: "Downhill Karting",
    type: "sports",
    location: "COP - Winsport Canada Olympic Park, 88 Canada Olympic Rd S W, Calgary, AB T3B 5R5"
  },
  {
    date: '2024-12-01',
    startHour: 17,
    duration: 3,
    title: "Crossroads Market - Night Market",
    type: "music",
    location: "Crossroads Market - 1235 26 Ave SE, Calgary, AB T2G 1R7"
  },



];

const ViewItinerary = () => {

  const [startDate, setStartDate] = useState(new Date());

  const [itineraryEvents, setItineraryEvents] = useState(() => {
    const isLakeLouiseAdded = localStorage.getItem('addLakeLouise') === 'true';
    const isChristmasMarketAdded = localStorage.getItem('addChristmasMarket') === 'true';
  
    return events.filter(
      (event) =>
        (event.title !== "Skiing at Lake Louis" || isLakeLouiseAdded) &&
        (event.title !== "International Christmas Market" || isChristmasMarketAdded)
    );
  });
  
  
  const itineraryScrollContainerRef = useRef(null); // Ref for the scroll container

  useEffect(() => {
    // Set the startDate to today's date at midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setStartDate(today);

    // Scroll to 7 AM position
    const scrollContainer = itineraryScrollContainerRef.current;
    if (scrollContainer) {
      const scrollToHour = 8; // 7 AM
      const cellHeight = 50; // Adjust to match the height of each hour row in your grid
      scrollContainer.scrollTop = scrollToHour * cellHeight; // Scroll to 7 AM
    }

    const isLakeLouiseAdded = localStorage.getItem('addLakeLouise') === 'true';
    const isChristmasMarketAdded = localStorage.getItem('addChristmasMarket') === 'true';

    setItineraryEvents(
      events.filter(
        (event) =>
          (event.title !== "Skiing at Lake Louis" || isLakeLouiseAdded) &&
          (event.title !== "International Christmas Market" || isChristmasMarketAdded)
      )
    );
  }, []);

  const getWeekDates = (date) => {
    const week = [];
    const selectedDate = new Date(date);
    const dayOfWeek = selectedDate.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  
    // Adjust the start of the week to the Sunday of the current week
    const startOfWeek = new Date(selectedDate);
    startOfWeek.setDate(selectedDate.getDate() - dayOfWeek);
  
    // Reset time to midnight for consistency
    startOfWeek.setHours(0, 0, 0, 0);
  
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      week.push(day);
    }
  
    return week;
  };
  
  const handleDateChange = (e) => {
    const selectedDate = new Date(e.target.value);
    setStartDate(selectedDate);
  };

  const handleWeekChange = (direction) => {
    const newDate = new Date(startDate);
    newDate.setDate(startDate.getDate() + direction * 7);
    setStartDate(newDate);
  };

  const weekDates = getWeekDates(startDate);

  const getDayIndex = (eventDate) => {
    const eventDay = new Date(eventDate);
    eventDay.setUTCHours(0, 0, 0, 0); // Normalize to midnight UTC
  
    return weekDates.findIndex(
      (weekDate) => weekDate.toISOString().split('T')[0] === eventDay.toISOString().split('T')[0]
    );
  };

  // Add Lake Louise to itinerary
  const handleAddLakeLouiseSkiing = () => {
    const skiingEvent = events.find((event) => event.title === "Skiing at Lake Louise");
    if (skiingEvent && !itineraryEvents.includes(skiingEvent)) {
      setItineraryEvents([...itineraryEvents, skiingEvent]);
      localStorage.setItem('addLakeLouise', 'true'); // Mark as added
    }
  };

  // Add Christmas Market to itinerary
  const handleAddChristmasMarket = () => {
    const christmasEvent = events.find((event) => event.title === "International Christmas Market");
    if (christmasEvent && !itineraryEvents.includes(christmasEvent)) {
      setItineraryEvents([...itineraryEvents, christmasEvent]);
      localStorage.setItem('addChristmasMarket', 'true'); // Mark as added
    }
  };
  
  const handleRemoveEvent = (event) => {
    const confirmation = window.confirm(
      "Are you sure? Note: This does not cancel your event booking. To do so, please visit the appropriate vendor site."
    );
  
    if (confirmation) {
      // Remove the event from the itinerary
      setItineraryEvents(itineraryEvents.filter((e) => e !== event));
  
      // Update localStorage based on the event title
      if (event.title === "Skiing at Lake Louis") {
        localStorage.removeItem("addLakeLouise");
      } else if (event.title === "International Christmas Market") {
        localStorage.removeItem("addChristmasMarket");
      }
    }
  };
  

  return (
    <div className="view-itinerary-container">
      <div className="itinerary-header">
        <h2>View Your Personalized Travel Itinerary</h2>
        <p>
          {weekDates[0].toLocaleDateString()} - {weekDates[6].toLocaleDateString()}
        </p>
      </div>

      {/* Legend */}
      <div className="itinerary-legend">
        <div className="legend-item">
          <span className="legend-color sports"></span> Sports
        </div>
        <div className="legend-item">
          <span className="legend-color music"></span> Music
        </div>
        <div className="legend-item">
          <span className="legend-color musuems"></span> Musuems, Galleries, & Exhibitions
        </div>
      </div>

      <div className="date-picker">
        <label htmlFor="pick-date" style={{ width: '40%' }}>Pick a Date:</label>
        <input
          type="date"
          id="pick-date"
          value={startDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
          onClick={(e) => e.currentTarget.showPicker()}
        />
        <button className="scrollButton" onClick={() => handleWeekChange(-1)}>
          &#9664;
        </button>
        <button className="scrollButton" onClick={() => handleWeekChange(1)}>
          &#9658;
        </button>
      </div>

      <div className="itinerary-scroll-container" ref={itineraryScrollContainerRef}>
        <div className="itinerary-grid">
          {/* Header Row */}
          <div className="time-column"></div>
          {weekDates.map((date, index) => (
            <div className="day-header" key={index}>
              {date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
            </div>
          ))}
          {/* Time Labels */}
          {[...Array(24)].map((_, hour) => (
            <div className="time-cell" key={`time-${hour}`}>
              {`${hour % 12 === 0 ? 12 : hour % 12}:00 ${hour >= 12 ? 'PM' : 'AM'}`}
            </div>
          ))}
          {/* Grid Cells (empty) */}
          {weekDates.map((date, dayIndex) => (
            [...Array(24)].map((_, hour) => (
              <div
                className="grid-cell"
                key={`cell-${dayIndex}-${hour}`}
                style={{
                  gridColumn: dayIndex + 2, // +2 to account for time column and day headers
                  gridRow: hour + 2, // +2 to account for day headers and time labels
                }}
              ></div>
            ))
          ))}
          {/* Events */}
          {itineraryEvents.map((event) => {
            const dayIndex = getDayIndex(event.date);
            if (dayIndex >= 0 && dayIndex < 7) {
              const startRow = event.startHour + 2; // +2 to account for headers
              const endRow = startRow + event.duration;
              const gridColumn = dayIndex + 2;
              return (
                <div
                  className={`event ${event.type}`}
                  key={`${event.date}-${event.startHour}`}
                  style={{
                    gridColumn: gridColumn,
                    gridRow: `${startRow} / ${endRow}`,
                  }}
                >
                  <div className="eventTitle">{event.title}</div>
                  <div className="event-time">
                    {`${event.startHour % 12 === 0 ? 12 : event.startHour % 12}:00 ${
                      event.startHour >= 12 ? 'PM' : 'AM'
                    } - ${(event.startHour + event.duration) % 12 === 0 ? 12 : (event.startHour + event.duration) % 12
                      }:00 ${(event.startHour + event.duration) >= 12 ? 'PM' : 'AM'}`}
                  </div>
                  <Popup
                    trigger={<span className="event-link">See More Info</span>}
                    position={dayIndex === 6 ? 'left center' : 'right center'}
                    contentStyle={{
                      backgroundColor:
                        event.type === 'sports'
                          ? '#1C9C7A'
                          : event.type === 'music'
                          ? '#196BB2'
                          : event.type === 'musuems'
                          ? '#6D64B9'
                          : '#fff',
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div>
                      <div className="eventTitle">{event.title}</div>
                      <div className="event-time">
                        {`${event.startHour % 12 === 0 ? 12 : event.startHour % 12}:00 ${
                          event.startHour >= 12 ? 'PM' : 'AM'
                        } - ${(event.startHour + event.duration) % 12 === 0 ? 12 : (event.startHour + event.duration) % 12
                          }:00 ${(event.startHour + event.duration) >= 12 ? 'PM' : 'AM'}`}
                      </div>
                      <div className="eventLocation">{event.location}</div>
                      <button
                        className="remove-event-button"
                        onClick={() => handleRemoveEvent(event)}
                      >
                        Remove Event
                      </button>
                    </div>
                  </Popup>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default ViewItinerary;