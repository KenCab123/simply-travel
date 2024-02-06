import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNearestAirport } from "../api/fetch";
import "./SearchForm.css"

const SearchForm = ({formInput, setFormInput, nearestAirport}) => {
  
  
  // console.log(`DEPARTURE AIRPORT: `, formInput.departureAirport)
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault()
    let newURL = import.meta.env.VITE_TRAVEL_API_URL;
    if (formInput.departureAirport) {
      newURL += `&origin=${formInput.departureAirport.toUpperCase()}`
    }
    if (formInput.startDate) {
      newURL += `&depart_date=${formInput.startDate}`
    }
    if (formInput.endDate) {
      newURL += `&return_date=${formInput.endDate}`
    }
    navigate('/destinations', { state: { URL: newURL } })
  }

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
    <h1>Enter Your Details Below</h1>
    <form onSubmit={handleSubmit} className="search-form">
      <label className="climate" htmlFor="climate" >
        <span >climate 🌡️</span>
        <select value={formInput.climate} name="climate" id="climate" onChange={handleChange} required>
          <option value=""></option>
          <option value="warm">warm 🌤️</option>
          <option value="hot">hot ☀️</option>
          <option value="cold">cold ❄️</option>
        </select>
      </label>
      <div className="modal">

      <p onMouseEnter={openModal} onMouseLeave={closeModal}>Nearest Airport</p>
        {/* The Modal */}
        {isOpen && (
          <div className="modal-content">
              <p>{nearestAirport}</p>
            </div>
        )}
      </div>

      <label className="depart-airport"  htmlFor="departure-airport">
        <span >Departure Airport 🛄</span>
        <input id="departure-airport" placeholder={nearestAirport} value={formInput.departureAirport} name="departureAirport" type="text" onChange={handleChange} />
      </label>

      <label className="depart-date" htmlFor="departure-date">
        <span>Departure Date 🛫</span>
        <input id="departure-date" value={formInput.startDate} name="startDate" type="date" onChange={handleChange} />
      </label>

      <label className="return-date" htmlFor="return-date">
        <span>Return Date 🛬</span>
        <input id="return-date" value={formInput.endDate} name="endDate" type="date" onChange={handleChange} />
      </label>
      <button type="submit">🔍</button>

    </form>
    </>
  );
};

export default SearchForm;
