import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SearchForm = () => {

  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    climate: '',
    departureAirport: '',
    startDate: '',
    endDate: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(climate)
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
    newURL += `&destination=MIA`
    console.log(newURL)
    console.log('form inputs: ', formInput)
    navigate('/destinations', { state: { URL: newURL } })
  }

  const handleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="climate" >
        climate 🌡️
        <select value={formInput.climate} name="climate" id="climate" onChange={handleChange}>
          <option value=""></option>
          <option value="warm">warm 🌤️</option>
          <option value="hot">hot ☀️</option>
          <option value="cold">cold ❄️</option>
        </select>
      </label>
      <label htmlFor="departure-airport">
        Departure Airport
        <input id="departure-airport" value={formInput.departureAirport} name="departureAirport" type="text" onChange={handleChange} />
      </label>

      <label htmlFor="departure-date">
        Departure Date 🛫
        <input id="departure-date" value={formInput.startDate} name="startDate" type="date" onChange={handleChange} />
      </label>

      <label htmlFor="return-date">
        Return Date 🛬
        <input id="return-date" value={formInput.endDate} name="endDate" type="date" onChange={handleChange} />
      </label>
      <button type="submit">🔍</button>

    </form>
  );
};

export default SearchForm;
