import "./Cart.css"
import {formatDateTime} from "../helpers/helpers"

const Cart = ({tickets}) => {
  console.log(tickets)
  return <div className="cart-container">
    <ul >
      {tickets.map((ticket,index) => {
        return <li key={index}>{`To: ${ticket.destination}, From: ${ticket.departureAirport.toUpperCase()}, Price: $${ticket.price}, Depart Time: ${formatDateTime(ticket.departureDate).formattedDate}, Return Time: ${formatDateTime(ticket.returnDate).formattedDate}`}</li>
      })}
    </ul>
    <h4>Total: $</h4>
    </div>
};

export default Cart;
