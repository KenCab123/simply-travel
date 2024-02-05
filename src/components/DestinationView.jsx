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
      <img src={destination.image} alt={destination.destination} />
      <div className="details">
      <p className="summary">{destination.summary}</p>
      </div>
      <p className="price">Price: ${flightInfo.price}</p>
      <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default DestinationView;
