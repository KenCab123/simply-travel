import { getDestinations } from "../api/fetch";
import { useEffect, useState } from "react";


const DestinationPage = () => {
  
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
