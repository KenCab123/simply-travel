import { useLocation, useParams, useNavigate } from "react-router-dom";
import { findFirstObjectKey, formatDateTime } from "../helpers/helpers";
import { useState, useEffect } from "react";
import { getAirlineNames } from "../api/fetch";
const URL = import.meta.env.VITE_BASE_API_URL

import "./DestinationView.css"


const DestinationView = ({ destinations, cheapestFlights, formInput, tickets, setTickets }) => {
  const [airlineName, setAirlineName] = useState([]);
  const { id } = useParams();
  const destination = destinations.find((destination) => destination.id === id);
  const [flightInfo, setFlightInfo] = useState(
    findFirstObjectKey(cheapestFlights, destination.iata)
  );
  const navigate = useNavigate()
  useEffect(() => {
    getAirlineNames().then(data => {
      const filteredData = data.find(iata => flightInfo.airline === iata.code).name_translations.en
      setAirlineName(filteredData)
    })
  },[])
  const handleAddToCart = () => {
    // const ul = document.getElementsByClassName("cart-container")
    // const ul = document.querySelector("cart-container ul");
    // console.log(ul);
    console.log(`IM CLICKED`);
    const newTicket = {
      destination: destination.destination,
      departureAirport: formInput.departureAirport.toUpperCase(),
      price: flightInfo.price,
      departureDate: formatDateTime(flightInfo.departure_at).formattedDate,
      returnDate: formatDateTime(flightInfo.return_at).formattedDate
    };
    setTickets([...tickets, newTicket]);
    console.log(tickets)
    // console.log(flightInfo)
    // ul.innerHTML = <li>{`To: ${destination.destination}, From: ${formInput.departureAirport.toUpperCase()}, Price: $${flightInfo.price}, Depart Time: ${formatDateTime(flightInfo.departure_at).formattedDate}, Return Time: ${formatDateTime(flightInfo.return_at).formattedDate}`}</li>
    // console.log(ul)
  }

  const handleDelete = () => {
    const options = { method: "DELETE"};
    fetch(`${URL}/api/travel/${id}`, options)
    navigate("/destinations")
    
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
      <div className="date">
      <p >Depart Day: {formatDateTime(flightInfo.departure_at).formattedDate} @ {formatDateTime(flightInfo.departure_at).formattedTime}</p>
      <p >Return Day: {formatDateTime(flightInfo.return_at).formattedDate} @ {formatDateTime(flightInfo.return_at).formattedTime}</p>
      </div>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
      <button className="delete" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DestinationView;
