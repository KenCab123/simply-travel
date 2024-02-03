import { getDestinations, getCheapestFlight } from "../api/fetch";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { findFirstObjectKey } from "../helpers/helpers";

const DestinationPage = ({
  setDestinations,
  destinations,
  cheapestFlights,
  setCheapestFlights,
}) => {

  //destructure the url form useLocation
  const { URL } = useLocation().state;

  useEffect(() => {
    getDestinations().then((data) => {
      setDestinations(data);
    });
    getCheapestFlight(URL).then((data) => {
      setCheapestFlights(data.data);
    });
  }, []);

  //results: array of objects for each destination that has received a flight from fetch
  //format: {iata:, name:, id:, flight:{}}, where the flight value is the resulting object from the api (that contains the airline, date/time, price, etc.)
  const results = [];
  //mapping through each destination from the call to OUR api
  destinations.map((destination) => {
    //check if the flight is returned in our first fetch call: getCheapestFlights
    let flightInfo = findFirstObjectKey(cheapestFlights, destination.iata);
    //create an object with the name, iata, and id
    const obj = { name: destination.destination, iata: destination.iata, id: destination.id };
    //if we cannot find the flight in the cheapestFlights array, try calling a new fetch call ONLY with the specific destination
    if (flightInfo === "No flights available") {
      const url = `${URL}&destination=${destination.iata}`
      getCheapestFlight(url).then((data) => {
        flightInfo = findFirstObjectKey(data.data, destination.iata)
        obj.flight = flightInfo;
      });
    } else {
      obj.flight = flightInfo;
    }
    if (flightInfo !== "No flights available") {
      results.push(obj);
    }
  })

  if (!results.length) {
    return <h1>No flights available</h1>
  } else
    return (
      results.map((destination) => {
        const { name, flight, id } = destination;
        return (
          <Link to={`/${id}`} key={id}>
            <li >
              <p>{name}</p>
              <p>Price: ${flight && flight.price}</p>
            </li>
          </Link>
        );
      })
    )

};

export default DestinationPage;
