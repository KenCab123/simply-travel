import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import IndexPage from "./components/IndexPage";
import Cart from "./components/Cart";

import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [ip, setIP] = useState("");

  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
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
        <Route path="/destinations" element={<IndexPage/>} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
