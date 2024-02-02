import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DestinationPage from "./components/DestinationPage";
import Cart from "./components/Cart";
import DestinationView from "./components/DestinationView";

import { useState, useEffect } from "react";

const App = () => {
  const [cheapestFlights, setCheapestFlights] = useState({});
  const [destinations, setDestinations] = useState([]);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route
          path="/destinations"
          element={
            <DestinationPage
              setDestinations={setDestinations}
              destinations={destinations}
              cheapestFlights={cheapestFlights}
              setCheapestFlights={setCheapestFlights}
            />
          }
        />
        <Route
          path=":id"
          element={
            <DestinationView
              destinations={destinations}
              cheapestFlights={cheapestFlights}
            />
          }
        />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
