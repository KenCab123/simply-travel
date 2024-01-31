import React from "react";
import NavBar from "./components/NavBar";
import LandingPage from "./components/LandingPage";
import { Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import SearchForm from "./components/SearchForm";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/destinations" element={<SearchForm />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
};

export default App;
