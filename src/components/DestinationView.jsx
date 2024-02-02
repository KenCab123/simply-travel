import { useLocation, useParams } from "react-router-dom";

const DestinationView = ({ destinations }) => {
  const { id } = useParams();

  const destination = destinations.find((destination) => destination.id === id);
  console.log(destination);
  return (
    <>
      <h1>{destination.destination}</h1>
      <img src={destination.image} alt={destination.destination} />
      <p>{destination.temperature.high}</p>
      <p>{destination.temperature.low}</p>
      <p>{destination.summary}</p>
    </>
  );
};

export default DestinationView;
