import { useLocation, useParams } from "react-router-dom";
import { findFirstObjectKey } from "../helpers/helpers";
import { useState, useEffect } from "react";
import { getAirlineNames } from "../api/fetch";
import "./DestinationView.css"


const DestinationView = ({ destinations, cheapestFlights, formInput }) => {
  const [airlineName, setAirlineName] = useState([]);
  const { id } = useParams();
  const destination = destinations.find((destination) => destination.id === id);
  const [flightInfo, setFlightInfo] = useState(
    findFirstObjectKey(cheapestFlights, destination.iata)
  );

  useEffect(() => {
    getAirlineNames().then(data => {
      const filteredData = data.find(iata => flightInfo.airline === iata.code).name_translations.en
      setAirlineName(filteredData)
    })
  },[])

  const handleAddToCart = () => {
    console.log(flightInfo)
    console.log(`Flight To: ${destination.destination}, From: ${formInput.departureAirport.toUpperCase()}, Depart Time: ${formInput.endDate}` )
  }


  function formatDateTime(dateTimeString) {
    if (!dateTimeString) {
      return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Date' };
    }
  
    let dateTimeStringWithoutOffset = dateTimeString;
  
    // Check if the date string contains a timezone offset
    if (dateTimeStringWithoutOffset.endsWith('Z') || dateTimeStringWithoutOffset.includes('+') || dateTimeStringWithoutOffset.includes('-')) {
      dateTimeStringWithoutOffset = dateTimeStringWithoutOffset.slice(0, -6);
    }
  
    const dateTime = new Date(dateTimeStringWithoutOffset);
  
    if (isNaN(dateTime.getTime())) {
      // Invalid date
      return { formattedDate: 'Invalid Date', formattedTime: 'Invalid Date' };
    }
  
    const dateFormatter = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const timeFormatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
    const formattedDate = dateFormatter.format(dateTime);
    const formattedTime = timeFormatter.format(dateTime);
  
    return { formattedDate, formattedTime };
    }
  // console.log(airlineNames[0].name_translations.en)
  //console.log(airlineNames.find(iata => destination.iata === findFirstObjectKey(iata, airlineNames.indexOf(iata)).name_translations.code))
  

  return (
    <div className="destination-view">
      <h1>{destination.destination}</h1>
      <p className="airline">Airline: {airlineName}</p>
      <div className="high-low">
      <p>High: {destination.temperature.high}</p>
      <p>Low: {destination.temperature.low}</p>
      </div>
      <p>climate: {formInput.climate}</p>
      <img src={destination.image} alt={destination.destination} />
      <div className="details">
      <p className="summary">{destination.summary}</p>
      </div>
      <p className="price">Price: ${flightInfo.price}</p>
      <p className="blah">Depart Day: {formatDateTime(flightInfo.departure_at).formattedDate} @ {formatDateTime(flightInfo.departure_at).formattedTime}</p>
      <p className="blah">Return Day: {formatDateTime(flightInfo.expires_at).formattedDate} @ {formatDateTime(flightInfo.departure_at).formattedTime}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DestinationView;
