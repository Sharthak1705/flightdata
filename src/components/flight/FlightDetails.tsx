import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: string;
  gate: string;
  terminal: string;
  estimatedArrival: string;
}

const FlightDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [flight, setFlight] = useState<Flight | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlightDetails = async () => {
      try {
        const response = await fetch(`https://flight-status-mock.core.travelopia.cloud/flights/${id}`);
        if (!response.ok) throw new Error("Flight details not found.");
        
        const data: Flight = await response.json();
        setFlight(data);
      } catch (error) {
        setError("Could not load flight details. Please try again.");
      }
    };

    fetchFlightDetails();
  }, [id]);

  return (
    <div className="container mx-auto p-6">
      <Link to="/" className="text-blue-500 underline mb-4 block">← Back to Flight Board</Link>
      {error ? (
        <p className="text-red-600 text-center">{error}</p>
      ) : flight ? (
        <div className="border p-6 rounded-lg shadow-md bg-gray-200">
          <h2 className="text-3xl font-bold mb-2">{flight.airline} - {flight.flightNumber}</h2>
          <p className="text-lg mb-2">From: {flight.origin} → To: {flight.destination}</p>
          <p className="text-lg mb-2">Departure: {flight.departureTime}</p>
          <p className={`text-lg font-bold ${(flight.status)}`}>Status: {flight.status}</p>
        </div>
      ) : (
        <p className="text-center text-gray-500">Loading flight details...</p>
      )}
    </div>
  );
};

export default FlightDetail;
