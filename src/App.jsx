import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DestinationPage from "./components/DestinationPage";
import Cart from "./components/Cart";
import DestinationView from "./components/DestinationView";

import { useState, useEffect } from "react";
import { getNearestAirport } from "./api/fetch";

const App = () => {
  const [cheapestFlights, setCheapestFlights] = useState({});
  const [destinations, setDestinations] = useState([]);
  const [ip, setIP] = useState("");
  const [ nearestAirport, setNearestAirport ] = useState('')
  const [formInput, setFormInput] = useState({
    climate: '',
    departureAirport: '',
    startDate: '',
    endDate: ''
  })

  const getData = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json();
    setIP(data.ip);
  };
  
  
  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
    getNearestAirport(ip).then(data => {
      setNearestAirport(data.iata)
      setFormInput({...formInput, departureAirport: data.iata})
    })
  }, []);



  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage formInput={formInput} setFormInput={setFormInput} nearestAirport={nearestAirport}/>} />
        
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/destinations"
          element={
            <DestinationPage
              setDestinations={setDestinations}
              destinations={destinations}
              cheapestFlights={cheapestFlights}
              setCheapestFlights={setCheapestFlights}
              formInput={formInput}
            />
          }
        />
        <Route
          path=":id"
          element={
            <DestinationView
              destinations={destinations}
              cheapestFlights={cheapestFlights}
              formInput={formInput}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
