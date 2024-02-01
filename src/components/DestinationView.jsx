import { useLocation, useParams } from "react-router-dom";

const DestinationView = ({ destinations }) => {
  const { id } = useParams();
  console.log(id)
  console.log(destinations)
  const destination = destinations.find((destination) => destination.id === id);
  console.log(destination)
  // const location = useLocation();
  // console.log(location.state.destination)
  // console.log(location.state)
  // console.log(state.destinationState)
  return (
    <div>DestinationView</div>
  )
}

export default DestinationView;
