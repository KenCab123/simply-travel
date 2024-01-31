import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchForm = () => {
  
  const navigate = useNavigate();
  const [climate, setClimate] = useState('')
  const [departureAirport, setDepartureAirport] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [URL, setURL] = useState(import.meta.env.VITE_TRAVEL_API_URL)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(climate)
    console.log(departureAirport)
    let newURL = URL;
    if(departureAirport) {
      newURL += `&origin=${departureAirport}`
    }
    if(startDate) {
      newURL += `&depart_date=${startDate}`
    }
    if(endDate) {
      newURL += `&return_date=${endDate}`
    }
    console.log(newURL)
    // setURL(newURL)
    // console.log(URL)
    // console.log(startDate)
    // console.log(endDate)
    navigate('/destinations', {state: {URL: newURL}})
  }
  const handleClimate = (e) => {
    setClimate(e.target.value)
  }
  const handleDepartureAirport = (e) => {
    setDepartureAirport(e.target.value)
  }
  const handleStartDate = (e) => {
    setStartDate(e.target.value)
  }
  const handleEndDate = (e) => {
    setEndDate(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="climate" >
        climate 🌡️
        <select value={climate} name="climate" id="climate"onChange={handleClimate}>
          <option value=""></option>
          <option value="warm">warm 🌤️</option>
          <option value="hot">hot ☀️</option>
          <option value="cold">cold ❄️</option>
        </select>
      </label>
      <label htmlFor="departure-airport">
        Departure Airport
        <input id="departure-airport" value={departureAirport} name="departure-airport" type="text" onChange={handleDepartureAirport}/>
      </label>

      <label htmlFor="departure-date">
        Departure Date 🛫
        <input id="departure-date" value={startDate} name="departure-date" type="date" onChange={handleStartDate}/>
      </label>

      <label htmlFor="return-date">
        Return Date 🛬
        <input id="return-date" value={endDate} name="return-date" type="date" onChange={handleEndDate}/>
      </label>
        <button type="submit">🔍</button>
  
    </form>
  );
};

export default SearchForm;
