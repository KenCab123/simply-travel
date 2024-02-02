import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getNearestAirport } from "../api/fetch";


const SearchForm = () => {
  const [ip, setIP] = useState("");
  const [ nearestAirport, setNearestAirport ] = useState('')
  

  const getData = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json();
    setIP(data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    getNearestAirport(ip).then(data => {
      setNearestAirport(data.iata)
    })
  }, []);

  const navigate = useNavigate();
  const [formInput, setFormInput] = useState({
    climate: '',
    departureAirport: '',
    startDate: '',
    endDate: ''
  })

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
      <p onMouseEnter={openModal} onMouseLeave={closeModal}>Nearest Airport</p>
        {/* The Modal */}
        {isOpen && (
          <div className="modal">
            {/* Modal Content */}
            <div className="modal-content">
              <p>{nearestAirport}</p>
            </div>
          </div>
        )}
      <label htmlFor="departure-airport">
        Departure Airport
        <input id="departure-airport" placeholder={nearestAirport} value={formInput.departureAirport} name="departureAirport" type="text" onChange={handleChange} />
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
