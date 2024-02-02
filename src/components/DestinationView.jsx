import { useLocation, useParams } from "react-router-dom";
import { findFirstObjectKey } from "../helpers/helpers";
import { useState } from "react";

const DestinationView = ({ destinations, cheapestFlights }) => {
  // const [cheapestFlights, setCheapestFlights] = useState({});
  const { id } = useParams();
  const destination = destinations.find((destination) => destination.id === id);
  const [flightInfo, setFlightInfo] = useState(
    findFirstObjectKey(cheapestFlights, destination.iata)
  );

  console.log(flightInfo);

  console.log(destination);
  return (
    <>
      <h1>{destination.destination}</h1>
      <img src={destination.image} alt={destination.destination} />
      <p>{destination.temperature.high}</p>
      <p>{destination.temperature.low}</p>
      <p>{destination.summary}</p>
    </>
  );
};

export default DestinationView;
