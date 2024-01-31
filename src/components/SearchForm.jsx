import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchForm = () => {
  let URL = import.meta.env.VITE_TRAVEL_API_URL;
  const navigate = useNavigate();
  const [climate, setClimate] = useState('')
  const [departureAirport, setDepartureAirport] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/destinations')
    console.log(climate)
    console.log(departureAirport)
    if(departureAirport) {
      URL += `&origin=${departureAirport}`
    }
    if(startDate) {
      URL += `&depart_date=${startDate}`
    }
    if(endDate) {
      URL += `&return_date=${endDate}`
    }
    console.log(startDate)
    console.log(endDate)
    console.log(URL)
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
        <select name="climate" id="climate"onChange={handleClimate}>
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
