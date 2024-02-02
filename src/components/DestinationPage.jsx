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
  let location = useLocation();

  const URL = location.state.URL;

  useEffect(() => {
    getDestinations().then((data) => {
      setDestinations(data);
    });
    getCheapestFlight(URL).then((data) => {
      setCheapestFlights(data.data);
    });
  }, []);

  return (
    <div>
      {Object.keys(cheapestFlights).length > 0 &&
        destinations.map((destination) => {
          return (
            <Link to={`/${destination.id}`} key={destination.id}>
              <li>
                {destination.destination} {destination.iata}
                <p>
                  Price:{" "}
                  {findFirstObjectKey(cheapestFlights, destination.iata).price}
                </p>
              </li>
            </Link>
          );
        })}
    </div>
  );
};

export default DestinationPage;
