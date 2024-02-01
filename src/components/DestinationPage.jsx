import { getDestinations, getCheapestFlight } from "../api/fetch";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";


const DestinationPage = ({ setDestinations, destinations }) => {
  let location = useLocation()

  const [cheapestFlight, setCheapestFlight] = useState({})

  let URL = location.state.URL
  useEffect(() => {
    getDestinations().then(data => {
      setDestinations(data)
    })
    getCheapestFlight(URL)
  }, [])

  return <div>
    {destinations.map(destination => {
      URL += `&destination=${destination.iata}`
      // setDestinationState(destination)
      // console.log(URL)
      // console.log(getCheapestFlight(URL))
      return (
        <Link to={`/${destination.id}`} key={destination.id} >
          <li >{destination.destination} {destination.iata}</li>
        </Link>
      )
    })}
  </div>;
};

export default DestinationPage;
