import { useLocation, useParams } from "react-router-dom";
import { findFirstObjectKey } from "../helpers/helpers";
import { useState, useEffect } from "react";
import { getAirlineNames } from "../api/fetch";


const DestinationView = ({ destinations, cheapestFlights }) => {
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
  // console.log(airlineNames[0].name_translations.en)
  //console.log(airlineNames.find(iata => destination.iata === findFirstObjectKey(iata, airlineNames.indexOf(iata)).name_translations.code))
  

  return (
    <>
      <h1>{destination.destination}</h1>
      <img src={destination.image} alt={destination.destination} />
      <p>{destination.temperature.high}</p>
      <p>{destination.temperature.low}</p>
      <p>{destination.summary}</p>
      <p>Price: ${flightInfo.price}</p>
      <p>Airline: {airlineName}</p>

    </>
  );
};

export default DestinationView;
