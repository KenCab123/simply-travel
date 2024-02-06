import { Link } from "react-router-dom";
import { useState } from "react";
import "./NavBar.css"
import Cart from "./Cart";

const NavBar = ({tickets}) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCheckout = () => {
    alert(`Purchase Complete! Thanks For Traveling With Simply Travel!`)
  }
  return (
    <nav className="nav-bar">
      <h1>
        <Link to="/" className="nav-link">Simply Travel</Link>
      </h1>
      <ul>
        <li>
          <Link to="/about" className="nav-link">About Us</Link>
        </li>
        <li>
            <button className="nav-link cart-btn" onMouseEnter={openModal}>Cart</button>
            {isOpen && (
              <>
              <div>
              <Cart tickets={tickets}/>
              <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
              <button onClick={closeModal} className="close-btn">❌</button>
              </div>
              </>
            )}
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
