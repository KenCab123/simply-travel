import { getDestinations, getCheapestFlight } from "../api/fetch";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const DestinationPage = ({ setDestinations, destinations }) => {
  let location = useLocation()

  const [cheapestFlights, setCheapestFlights] = useState({})
  const URL = location.state.URL;

  useEffect(() => {
    getDestinations().then(data => {
      setDestinations(data)
    })
    getCheapestFlight(URL).then(data => {
      setCheapestFlights(data.data)
    })
  }, [])

  const findFirstObjectKey = (obj, key) => {
    const objectAtKey = obj[key]
    if (!objectAtKey) {
      return "No flights available"
      //maybe fetch????
    }
    const firstKey = Object.keys(objectAtKey)[0]
    return obj[key][firstKey].price
  }

  return <div>
    {Object.keys(cheapestFlights).length > 0 && destinations.map(destination => {
      return (
        <Link to={`/${destination.id}`} key={destination.id} >
          <li >
            {destination.destination} {destination.iata}
            <p>Price: {
              findFirstObjectKey(cheapestFlights, destination.iata)
            }</p>
          </li>
        </Link>
      )
    })}
  </div>;
};

export default DestinationPage;
