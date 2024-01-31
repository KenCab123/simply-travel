import { getDestinations, getCheapestFlight } from "../api/fetch";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";


const DestinationPage = () => {

  let location = useLocation()
  // console.log(`URL STATE: `, location.state)
  // console.log(getDestinations())
  const [destinations, setDestinations] = useState([])
  // let URL = 'https://api.travelpayouts.com/v1/prices/cheap?token=1007c3b2956c6bb6d7d10b91b86c7c17&origin=JFK&depart_date=2024-02&return_date=2024-02&destination=MIA'
  let URL = location.state.URL
  // console.log(URL)
  useEffect(() => {
    // getDestinations().then(data => {
    //   setDestinations(data)
    // })
    getCheapestFlight(URL)
  },[])

  return <div>
    {destinations.map(destination => {
      URL += `&destination=${destination.iata}`
      // console.log(URL)
      // console.log(getCheapestFlight(URL))
      return <li key={destination.id}>{destination.iata}</li>
    })}
  </div>;
};

export default DestinationPage;
