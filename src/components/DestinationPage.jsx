import { getDestinations } from "../api/fetch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const DestinationPage = () => {
  let location = useLocation()
  console.log(`URL STATE: `, location.state)
  console.log(getDestinations())
  const [destinations, setDestinations] = useState([])
  useEffect(() => {
    getDestinations().then(data => {
      setDestinations(data)
    })
  },[])

  return <div>
    {destinations.map(destination => {
      // fetch()
      return <li key={destination.name}>{destination.name}</li>
    })}
  </div>;
};

export default DestinationPage;
