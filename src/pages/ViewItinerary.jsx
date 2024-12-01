import './ViewItinerary.css';
import React, { useState, useEffect } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const events = [
  {
    date: '2024-11-23',
    startHour: 14,
    duration: 3,
    title: "Calgary Flames vs. Minnesota Wild",
    type: "sports",
    location: "Scotiabank Saddledome - 555 Saddledome Rise SE, Calgary, AB T2G 2W1"
  },
  {
    date: '2024-11-23',
    startHour: 11,
    duration: 2,
    title: "Production: Beauty and the Grinch",
    type: "music",
    location: "Jubilations Dinner Theatre - 1002 37 Street SW Calgary, AB T3C 1S1 Canada"
  },
  {
    date: '2024-11-22',
    startHour: 18,
    duration: 3,
    title: "Top Talent Wrestling",
    type: "sports",
    location: "The Palace Theatre - 219 8 Ave SW, Calgary, AB T2P 7N2"
  },
  {
    date: '2024-11-22',
    startHour: 13,
    duration: 2,
    title: "International Christmas Market",
    type: "music",
    location: "Spruce Meadoes - 18011 Spruce Meadows Way SW, Calgary, AB T2X 4B7"
  },
  {
    date: '2024-11-21',
    startHour: 19,
    duration: 2,
    title: "Storybook Theatre: Beauty & the Beast The Musical",
    type: "music",
    location: "Jubilations Dinner Theatre - 1002 37 Street SW Calgary, AB T3C 1S1 Canada"
  },
  {
    date: '2024-11-21',
    startHour: 11,
    duration: 2,
    title: "Takao Tanabe Printmaker Exhibition",
    type: "musuems",
    location: "The Edison, floor 2 - 150 9 Ave SW, Calgary, AB T2P 3H9"
  },
  {
    date: '2024-11-20',
    startHour: 16,
    duration: 2,
    title: "iFLY - Indoor Skydiving",
    type: "sports",
    location: "iFLY - 811 64 Ave NE, Calgary, AB T2E 3Z8"
  },

  {
    date: '2024-11-20',
    startHour: 13,
    duration: 1,
    title: "Glenbow Musuem Tour",
    type: "musuems",
    location: "Glenbow Musuem - 130 9 Ave SE, Calgary, AB T2G 0P3"
  },
  {
    date: '2024-11-19',
    startHour: 18,
    duration: 3,
    title: "All Those Rolling Stones",
    type: "music",
    location: "Jubilations Dinner Theatre - 1002 37 Street SW Calgary, AB T3C 1S1 Canada"
  },
  {
    date: '2024-11-18',
    startHour: 18,
    duration: 2,
    title: "Zoolights",
    type: "musuems",
    location: "Calgary Zoo - 210 St. George's Drive NE, Calgary, AB T2E 7V6"
  },
  {
    date: '2024-11-18',
    startHour: 9,
    duration: 3,
    title: "AI Art Intensive: Calgary Exhibition",
    type: "musuems",
    location: "cSPACE Marda Loop - 1721 29 Avenue Southwest RGO Treehouse Calgary, AB T2T 6T7"
  },
  {
    date: '2024-11-17',
    startHour: 13,
    duration: 2,
    title: "Downhill Karting",
    type: "sports",
    location: "COP - Winsport Canada Olympic Park, 88 Canada Olympic Rd S W, Calgary, AB T3B 5R5"
  },
  {
    date: '2024-11-17',
    startHour: 17,
    duration: 3,
    title: "Crossroads Market - Night Market",
    type: "music",
    location: "Crossroads Market - 1235 26 Ave SE, Calgary, AB T2G 1R7"
  },


  
];

const ViewItinerary = () => {
  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    // Force scroll to top when page becomes visible
    window.scrollTo(0, 0);
    // Set the startDate to today's date at midnight
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    setStartDate(today);
  }, []);

  const getWeekDates = (date) => {
    const week = [];
    const startOfWeek = new Date(date);
    startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Set to Sunday
    startOfWeek.setHours(0, 0, 0, 0); // Reset time to midnight local time
  
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

  // Function to get the day index (0-6) for a given date
  const getDayIndex = (eventDate) => {
    const eventDay = new Date(eventDate);
    eventDay.setUTCHours(0, 0, 0, 0); // Normalize to midnight UTC
  
    return weekDates.findIndex(
      (weekDate) => weekDate.toISOString().split('T')[0] === eventDay.toISOString().split('T')[0]
    );
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
        <label htmlFor="pick-date">Pick a Date:</label>
        <input
          type="date"
          id="pick-date"
          value={startDate.toISOString().split('T')[0]}
          onChange={handleDateChange}
        />
        <button className="scrollButton" onClick={() => handleWeekChange(-1)}>
          &#9664;
        </button>
        <button className="scrollButton" onClick={() => handleWeekChange(1)}>
          &#9658;
        </button>
      </div>

      <div className="itinerary-scroll-container">
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
          {events.map((event) => {
            const dayIndex = getDayIndex(event.date);

            // Only display events that fall within the current week
            if (dayIndex >= 0 && dayIndex < 7) {
              const startRow = event.startHour + 2; // +2 to account for headers
              const endRow = startRow + event.duration;
              const gridColumn = dayIndex + 2; // +2 to account for time column and day headers

              return (
                <div
                  className={`event ${event.type}`}
                  key={`${event.date}-${event.startHour}`}
                  style={{
                    gridColumn: gridColumn,
                    gridRow: `${startRow} / ${endRow}`,
                  }}
                >
                  <div className="event-title">{event.title}</div>
                  <div className="event-time">
                    {`${event.startHour % 12 === 0 ? 12 : event.startHour % 12}:00 ${
                      event.startHour >= 12 ? 'PM' : 'AM'
                    } - ${(event.startHour + event.duration) % 12 === 0 ? 12 : (event.startHour + event.duration) % 12
                      }:00 ${(event.startHour + event.duration) >= 12 ? 'PM' : 'AM'}`}
                  </div>

                  <Popup
                    trigger={<span className="event-link">See More Info</span>}
                    position={dayIndex === 6 ? "left center" : "right center"} // Dynamically set position
                    contentStyle={{
                      backgroundColor:
                        event.type === 'sports'
                          ? '#1C9C7A'
                          : event.type === 'music'
                          ? '#196BB2'
                          : event.type === 'musuems'
                          ? '#6D64B9'
                          : '#fff', // Default fallback
                      padding: '15px',
                      borderRadius: '8px',
                    }}
                  >
                    <div>
                      <div className="event-title">{event.title}</div>
                      <div className="event-time">
                        {`${event.startHour % 12 === 0 ? 12 : event.startHour % 12}:00 ${
                          event.startHour >= 12 ? 'PM' : 'AM'
                        } - ${(event.startHour + event.duration) % 12 === 0 ? 12 : (event.startHour + event.duration) % 12
                          }:00 ${(event.startHour + event.duration) >= 12 ? 'PM' : 'AM'}`}
                      </div>
                      <div className="event-location">{event.location}</div>
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
