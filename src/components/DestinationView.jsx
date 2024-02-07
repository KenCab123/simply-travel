import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { findFirstObjectKey, formatDateTime } from "../helpers/helpers";
import { getCheapestFlight, updateCheapestFlight } from "../api/fetch";
import { useState, useEffect } from "react";
import { getAirlineNames } from "../api/fetch";
// const URL = import.meta.env.VITE_BASE_API_URL

import "./DestinationView.css"


const DestinationView = ({ destinations, cheapestFlights, formInput, tickets, setTickets, isOpen, URL }) => {
  const [airlineName, setAirlineName] = useState([]);
  const { id } = useParams();
  const destination = destinations.find((destination) => destination.id === id);
  const [flightInfo, setFlightInfo] = useState(
    findFirstObjectKey(cheapestFlights, destination.iata)
  );
  // let location = useLocation()
  // let URL = location.state.URL;
  // console.log(location.state)

  const navigate = useNavigate()
  useEffect(() => {
    getAirlineNames().then(data => {
      const filteredData = data.find(iata => flightInfo.airline === iata.code).name_translations.en
      setAirlineName(filteredData)
    })
  },[])
  const handleAddToCart = () => {
    const isTicketInCart = tickets.some(ticket => (
      ticket.destination === destination.destination &&
      ticket.departureAirport === formInput.departureAirport.toUpperCase() &&
      ticket.price === flightInfo.price &&
      ticket.departureDate === formatDateTime(flightInfo.departure_at).formattedDate &&
      ticket.returnDate === formatDateTime(flightInfo.return_at).formattedDate
    ));
  
    if (isTicketInCart) {
      alert('This ticket is already in the cart!');
    } else {
      const newTicket = {
        destination: destination.destination,
        departureAirport: formInput.departureAirport.toUpperCase(),
        price: flightInfo.price,
        departureDate: formatDateTime(flightInfo.departure_at).formattedDate,
        returnDate: formatDateTime(flightInfo.return_at).formattedDate
      };
      if(!isOpen){
        alert('Click on the cart to view your tickets.')
      }
      setTickets([...tickets, newTicket]);
    }
  }

  const handleDelete = () => {
    const options = { method: "DELETE"};
    fetch(`${URL}/${id}`, options)
    navigate("/")
  }
  const [updatedDates , setUpdatedDates] = useState({
    depart_date: "",
    return_date: ""
  })
  const handleUpdateSubmit = (e) => {
    e.preventDefault()
    // setUpdatedDates(e.target.value)
    const updatedURL = URL += `&depart_date=${updatedDates['depart_date']}&return_date=${updatedDates['return_date']}&destination=${destination.iata}`
   updateCheapestFlight(updatedURL).then(data => {
    setFlightInfo(Object.values(Object.values(data)[0])[0])
   })
    // console.log((data.data)[0][1])
    // setFlightInfo()
  }

  const handleChange = (e) => {
    setUpdatedDates({ ...updatedDates, [e.target.name]: e.target.value })
    // fetch cheapestFlights using the input dates
    // set fligthInfo to findFirstObjectKey(cheapestFlights, destination.iata)?
    console.log(e.target.name)
    console.log(e.target.value)
  }
  // console.log(airlineNames[0].name_translations.en)
  //console.log(airlineNames.find(iata => destination.iata === findFirstObjectKey(iata, airlineNames.indexOf(iata)).name_translations.code))
  

  return (
    <div className={`${formInput.climate === "warm" ? "warm-weather" : formInput.climate === 'hot' ? "hot-weather" : "cold-weather"}`}>
      <h1>{destination.destination}</h1>
      <img src={destination.image} alt={destination.destination} />
      <p className="weather">climate: {formInput.climate} {formInput.climate === "warm" ? "⛅️" : formInput.climate === 'hot' ? "☀️" : "❄️"}</p>
      <div className="details">
      <p className="airline">Airline: {airlineName}</p>
      <p>High: {destination.temperature.high}</p>
      <p className="price">Price: ${flightInfo.price}</p>
      <p>Low: {destination.temperature.low}</p>
      </div>
      <p className="summary">{destination.summary}</p>
      <form onSubmit={handleUpdateSubmit}className="date">
      <p >Depart Day: {formatDateTime(flightInfo.departure_at).formattedDate} @ {formatDateTime(flightInfo.departure_at).formattedTime} </p> <label>Update: <input type="date" value={updatedDates.depart_date} onChange={handleChange} name="depart_date"/></label> 
      <p >Return Day: {formatDateTime(flightInfo.return_at).formattedDate} @ {formatDateTime(flightInfo.return_at).formattedTime}  </p> <label>Update: <input type="date" value={updatedDates.return_date} onChange={handleChange} name="return_date"/></label>
      <button>Update Ticket</button>
      </form>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
      <Link className="go-home" to="/">Home</Link>
      <Link className="go-home" to="/destinations">Go Back</Link>

    </div>
  );
};

export default DestinationView;
