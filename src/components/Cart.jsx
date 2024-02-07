import "./Cart.css"
import {formatDateTime} from "../helpers/helpers"
import { useState, useEffect } from "react"



let Total = 0;
const Cart = ({tickets, setTickets}) => {
  const handleCheckout = () => {
    alert(`Purchase Complete! Thanks For Traveling With Simply Travel!`)
    setTickets([])
  }
  
  const handleDelete = (index) => {
    const deletedTicketPrice = tickets[index].price;
    const updatedTickets = tickets.filter((_, i) => i !== index);
    setTickets(updatedTickets);
    console.log(`Deleted`)
    setTotal(prevTotal => prevTotal - deletedTicketPrice); // Update total by subtracting the price of the deleted ticket
  };

  const calculateTotalPrice = () => {
    return tickets.reduce((total, ticket) => total + ticket.price, 0);
  };

  const [Total, setTotal] = useState(calculateTotalPrice()); // Initialize total price using the current tickets array

  useEffect(() => {
    // Update total price whenever tickets array changes
    setTotal(calculateTotalPrice());
  }, [tickets]);






  return <div className="cart-container">
    <ul>
        {tickets.map((ticket, index) => (
          <div key={index}>
            <li>{`To: ${ticket.destination}, From: ${ticket.departureAirport.toUpperCase()}, Price: $${ticket.price}, Depart Time: ${formatDateTime(ticket.departureDate).formattedDate}, Return Time: ${formatDateTime(ticket.returnDate).formattedDate}`}</li>
            <button onClick={() => handleDelete(index)} className="delete">Delete</button>
          </div>
        ))}
        <h4>Total: ${Total}</h4>
        <button onClick={handleCheckout} className="checkout-btn">Checkout</button>
      </ul>
    
    </div>
};

export default Cart;
