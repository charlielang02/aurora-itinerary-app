import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import "./CreateEvent.css";
import EventPicturesUpload from "../components/EventPicturesUpload";
import TagInput from "../components/TagInput";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../hooks/GlobalContext";

// Hardcoded data for countries, states/provinces, and cities
const countries = [
  { value: "FR", label: "France" },
  { value: "JP", label: "Japan" },
  { value: "UK", label: "United Kingdom" },
  { value: "USA", label: "United States" },
  { value: "AUS", label: "Australia" },
  { value: "CAN", label: "Canada" },
  { value: "UAE", label: "United Arab Emirates" },
];

const states = {
  FR: [{ value: "IDF", label: "Île-de-France" }], // Paris
  JP: [{ value: "TYO", label: "Tokyo Prefecture" }], // Tokyo
  UK: [{ value: "ENG", label: "England" }], // London
  USA: [{ value: "NY", label: "New York" }], // New York City
  AUS: [{ value: "NSW", label: "New South Wales" }], // Sydney
  CAN: [
    { value: "BC", label: "British Columbia" }, // Vancouver
    { value: "AB", label: "Alberta" }, // Calgary, Banff, Lake Louise
    { value: "ON", label: "Ontario" }, // Toronto
  ],
  UAE: [{ value: "DU", label: "Dubai" }], // Dubai
};

const cities = {
  IDF: [{ value: "PAR", label: "Paris" }],
  TYO: [{ value: "TOK", label: "Tokyo" }],
  ENG: [{ value: "LON", label: "London" }],
  NY: [{ value: "NYC", label: "New York City" }],
  NSW: [{ value: "SYD", label: "Sydney" }],
  BC: [{ value: "VAN", label: "Vancouver" }],
  AB: [
    { value: "CAL", label: "Calgary" },
    { value: "BAN", label: "Banff" },
    { value: "LAK", label: "Lake Louise" },
  ],
  ON: [{ value: "TOR", label: "Toronto" }],
  DU: [{ value: "DXB", label: "Dubai" }],
};

const currencies = {
  FR: { value: "EUR", label: "Euro (€)" },
  JP: { value: "JPY", label: "Japanese Yen (¥)" },
  UK: { value: "GBP", label: "British Pound (£)" },
  USA: { value: "USD", label: "US Dollar ($)" },
  AUS: { value: "AUD", label: "Australian Dollar (A$)" },
  CAN: { value: "CAD", label: "Canadian Dollar (C$)" },
  UAE: { value: "AED", label: "UAE Dirham (د.إ)" },
};

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [country, setCountry] = useState(null);
  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState(""); 
  const [eventLink, setEventLink] = useState("");
  const [currency, setCurrency] = useState(null);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const { createdEvents, setCreatedEvents } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => window.scrollTo(0, 0), []);

  const handleDateChange = (e) => {
    setStartDate(new Date(e.target.value));
  };

  const handleCountryChange = (selectedOption) => {
    setCountry(selectedOption);
    setState(null); // Reset state and city when country changes
    setCity(null);
    setCurrency(currencies[selectedOption.value]);
  };

  const handleStateChange = (selectedOption) => {
    setState(selectedOption);
    setCity(null); // Reset city when state changes
  };

  const handleDescriptionChange = (e) => {
    const text = e.target.value;
    const wordCount = text.split(/\s+/).length;
    if (wordCount <= 200) {
      setEventDescription(text);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if the event name matches "Scott Helman Concert"
    if (eventName === "Scott Helman Concert") {
      // Update the createdEvents array in the global context
      setCreatedEvents((prev) => [...prev, eventName]);
    }
    navigate("/my-events");
  }

  return (
    <div className="create-event-container">
      <h1 className="create-event-header">Create New Event</h1>

      {/* Event Name Field */}
      <form name="create-event" onSubmit={handleSubmit}>
      <div className="input-row">
        <label htmlFor="event-name" className="input-label">Event Name*</label>
        <input
          id="event-name"
          type="text"
          placeholder="Enter event name..."
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
          className="create-event-input"
          required
        />
      </div>

      {/* Date Picker Field */}
      <div className="input-row">
        <div className="date-picker2">
          <label htmlFor="pick-date" className="input-label">Pick a Date*</label>
          <input
            type="date"
            id="pick-date"
            value={startDate.toISOString().split("T")[0]}
            onChange={handleDateChange}
            onClick={(e) => e.currentTarget.showPicker()}
            required
          />
        </div>
      </div>

      {/* Location Fields */}
      <div className="input-row">
        <label htmlFor="country" className="input-label">Country*</label>
        <Select
          id="country"
          options={countries}
          value={country}
          onChange={handleCountryChange}
          placeholder="Select a Country"
          className="react-select-container"
          classNamePrefix="react-select"
          required
        />
      </div>

      <div className="input-row">
        <label htmlFor="state" className="input-label">State/Province*</label>
        <Select
          id="state"
          options={country ? states[country.value] : []}
          value={state}
          onChange={handleStateChange}
          placeholder="Select a State/Province"
          isDisabled={!country}
          className="react-select-container"
          classNamePrefix="react-select"
          required
        />
      </div>

      <div className="input-row">
        <label htmlFor="city" className="input-label">City*</label>
        <Select
          id="city"
          options={state ? cities[state.value] : []}
          value={city}
          onChange={setCity}
          placeholder="Select a City"
          isDisabled={!state}
          className="react-select-container"
          classNamePrefix="react-select"
          required
        />
      </div>

      {/* Start Time Field */}
      <div className="input-row">
        <label htmlFor="start-time" className="input-label">Start Time*</label>
        <input
          id="start-time"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          className="create-event-input"
          required
        />
      </div>

      {/* End Time Field */}
      <div className="input-row">
        <label htmlFor="end-time" className="input-label">End Time*</label>
        <input
          id="end-time"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          className="create-event-input"
          required
        />
      </div>
      {/* Event Link Field with Tooltip */}
      <div className="input-row">
        <label htmlFor="event-link" className="input-label">Event Link*</label>
        <input
          id="event-link"
          type="url"
          placeholder="Enter booking site link..."
          value={eventLink}
          onChange={(e) => setEventLink(e.target.value)}
          className="create-event-input"
          title="Provide the link to the booking site for this event"
          required
        />
      </div>

      {/* Price Range */}
      <div className="input-row">
        <label htmlFor="currency" className="input-label">Currency*</label>
        <Select
          id="currency"
          options={Object.values(currencies)}
          value={currency}
          onChange={setCurrency}
          placeholder="Select a Currency"
          className="react-select-container"
          classNamePrefix="react-select"
          required
        />
      </div>

      <div className="input-row">
        <label htmlFor="min-price" className="input-label">Min Price*</label>
        <input
          id="min-price"
          type="number"
          placeholder="Enter minimum price..."
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="create-event-input"
          required
        />
      </div>

      <div className="input-row">
        <label htmlFor="max-price" className="input-label">Max Price*</label>
        <input
          id="max-price"
          type="number"
          placeholder="Enter maximum price..."
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="create-event-input"
          required
        />
      </div>

      <div className="input-row">
        <label htmlFor="event-pictures" className="input-label">Event Pictures*</label>
        <div className="event-pictures-files">
          <EventPicturesUpload />
        </div>
      </div>

      <div className="input-row">
        <label htmlFor="event-tags" className="input-label">Event Tags</label>
        <div className="event-tags-list">
          <TagInput />
        </div>
      </div>

      {/* Event Description Field */}
      <div className="input-row">
        <label htmlFor="event-description" className="input-label">Event Description*</label>
        <textarea
          id="event-description"
          placeholder="Enter event description (Max 200 words)"
          value={eventDescription}
          onChange={handleDescriptionChange}
          className="create-event-textarea"
          maxLength={200}
          required
        />
        <div className="word-count">{eventDescription.split(/\s+/).length}/200</div>
      </div>


      {/* Action Buttons */}
      <div className="create-event-buttons">
        <button className="create-event-cancel">
          <Link to="/">Cancel</Link>
        </button>
        <input className="create-event-post" type="submit" value="Post Event" />
      </div>
      </form>
    </div>
  );
};

export default CreateEvent;
