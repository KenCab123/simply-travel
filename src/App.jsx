import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import DestinationPage from "./components/DestinationPage";
import Cart from "./components/Cart";

import { useState, useEffect } from "react";

const App = () => {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await fetch("https://api.ipify.org/?format=json");
    const data = await res.json()
    // console.log(data);
    setIP(data.ip);
  };

  useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/destinations" element={<DestinationPage/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
