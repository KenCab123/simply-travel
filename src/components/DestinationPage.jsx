import { getDestinations, getCheapestFlight } from "../api/fetch";
import { useEffect, useState } from "react";
import { Link, json, useLocation } from "react-router-dom";
import { findFirstObjectKey } from "../helpers/helpers";
import "./DestinationPage.css"
import LoadingSpinner from "./LoadingSpinner";
// const URL = import.meta.env.VITE_BASE_API_URL


const DestinationPage = ({
  setDestinations,
  destinations,
  cheapestFlights,
  setCheapestFlights,
  formInput
}) => {
  let location = useLocation();

//  let URL = location.state.URL;
//  console.log(URL)
  // const [isDataLoaded, setIsDataLoaded] = useState()
  console.log(JSON.parse(window.localStorage.getItem("url")))
  const [error, setError] = useState('')
  const [URL, setURL] = useState( JSON.parse(window.localStorage.getItem("url")))
  const [loading, setLoading] = useState(false)
  
    useEffect(() => {
      setLoading(true)
      getDestinations().then((data) => {
        setDestinations(data);
        console.log(`i ran`, data)
        // console.log(destinations)
      });
       if (URL) { // Check if URL is truthy and valid
      getCheapestFlight(URL).then((data) => {
        // console.log(`url: `, URL)
        // console.log(`data: `, Object.keys(data.data))
        // console.log(`data: `, data.data)
        setCheapestFlights(data.data);
        // console.log(Object.keys(cheapestFlights))
        // console.log(`fetch completed`);
      }).then(data => setLoading(false)).catch((error) => {
        console.error('Error fetching cheapest flight:', error);
        setError(`INVALID ORIGIN.`)
        setLoading(false)
        setCheapestFlights({})
        // Handle the error, e.g., set an error state or display an error message
      });
    } 
    }, [URL]);

    // useEffect(() => {
    //   // figure out how to set the item in localstorage. then in the state on line 23 u have to do to or operator.
    //   window.localStorage.setItem("url", JSON.stringify(URL))
    // }, [])

    const filteredDestinations = destinations.filter(destination => destination.climate === formInput.climate)
   
      return (
        <div className='destination'>
          {loading ? <LoadingSpinner /> : 
          <>
         <h1>Results</h1>
         {error && <h2 style={{ color: 'red' , fontSize: '100px', padding: '80px'}}>{error}</h2>}
         {error && <Link to="/">Home</Link>}
       {Object.keys(cheapestFlights).length > 0 ?
        filteredDestinations.map((destination) => {
          if(findFirstObjectKey(cheapestFlights, destination.iata) === 'No flights available'){
            // console.log(`No flights available.`)
            return;
          } else {
            //  console.log(`testing`)
            return (
              <Link to={`/${destination.id}`} key={destination.id} >
               <li >
                 {destination.destination} {destination.iata}
                 <p>
                   Price:{" $"}
                   {findFirstObjectKey(cheapestFlights, destination.iata).price}
                 </p>
               </li>
             </Link>
           );
          }
        }) : <h1>No flights available.</h1>}
      </>
      }
         </div>
         )
};

export default DestinationPage;


  //results: array of objects for each destination that has received a flight from fetch
    //format: {iata:, name:, id:, flight:{}}, where the flight value is the resulting object from the api (that contains the airline, date/time, price, etc.)
    // const results = [];
    // //mapping through each destination from the call to OUR api
    // destinations.map((destination) => {
    //   //check if the flight is returned in our first fetch call: getCheapestFlights
    //   let flightInfo = findFirstObjectKey(cheapestFlights, destination.iata);
    //   //create an object with the name, iata, and id
    //   const obj = { name: destination.destination, iata: destination.iata, id: destination.id };
    //   //if we cannot find the flight in the cheapestFlights array, try calling a new fetch call ONLY with the specific destination
    //   if (flightInfo === "No flights available") {
    //     const url = `${URL}&destination=${destination.iata}`
    //     getCheapestFlight(url).then((data) => {
    //       flightInfo = findFirstObjectKey(data.data, destination.iata)
    //       obj.flight = flightInfo;
    //     })
    //   } else {
    //     obj.flight = flightInfo;
    //   }
    //   if (flightInfo !== "No flights available") {
    //     results.push(obj);
    //   }
    // })
  
    // if (!results.length) {
    //   return <h1>No flights available</h1>
    // } else
    //   return (
    //     <div className="destination">
    //       <h1>Results</h1>
    //      {error && <h2 style={{ color: 'red' }}>{error}</h2>}
    //     {results.map((destination) => {
    //       const { name, flight, id } = destination;
    //       return (
    //         <Link to={`/${destination.id}`} key={destination.id} >
    //            <li >
    //              {destination.destination} {destination.iata}
    //              <p>
    //                Price:{" $"}
    //                {findFirstObjectKey(cheapestFlights, destination.iata).price}
    //              </p>
    //            </li>
    //          </Link>
    //       );
    //     })}
    //     </div>
    //   )







    // KEnneth
    // <div className='destination'>
    //   {/* {cheapestFlights.every(flight => flight === `No flights available`) ? <div>No flights available</div> : } */}
    //     {/* {if(cheapestFlights.every(flight => flight === `No flights available`)) {
    //       throw new Error(`NO FLIGHTS AVAILABLE`)
    //     }
    //     } */}
    //     <h1>Results</h1>
    //     {error && <h2 style={{ color: 'red' }}>{error}</h2>}
    //   {Object.keys(cheapestFlights).length > 0 &&
    //     destinations.map((destination) => {
    //       if(findFirstObjectKey(cheapestFlights, destination.iata) === 'No flights available'){
    //         return;
    //       } else {
    //         return (
    //           <Link to={`/${destination.id}`} key={destination.id} >
    //           <li >
    //             {destination.destination} {destination.iata}
    //             <p>
    //               Price:{" $"}
    //               {findFirstObjectKey(cheapestFlights, destination.iata).price}
    //             </p>
    //           </li>
    //         </Link>
    //       );
    //     }
    //     })}
    //     </div>
    //     )