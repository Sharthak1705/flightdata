import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Flight {
  id: string;
  flightNumber: string;
  airline: string;
  origin: string;
  destination: string;
  departureTime: string;
  status: "On Time" | "Delayed" | "Boarding" | "Departed";
}

const Flight: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [error, setError] = useState<string | null>(null);
  const fetchInterval = 5000; // Refresh every 5 seconds

  // Function to fetch flight data
  const fetchFlights = async () => {
    try {
      const response = await fetch("https://flight-status-mock.core.travelopia.cloud/flights");
      if (!response.ok) throw new Error("Failed to fetch flights");
      const data: Flight[] = await response.json();
      setFlights(data);
      setError(null);
    } catch (error) {
      setError("Could not fetch flight data. Please try again later.");
    }
  };

  useEffect(() => {
    fetchFlights();
    const interval = setInterval(fetchFlights, fetchInterval);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      {error && <p className="text-red-600 text-center mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-500 shadow-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="p-3 border">Flight Number</th>
              <th className="p-3 border">Airline</th>
              <th className="p-3 border">Origin</th>
              <th className="p-3 border">Destination</th>
              <th className="p-3 border">Departure Time</th>
              <th className="p-3 border">Status</th>
              <th className="p-3 border">Details</th>
            </tr>
          </thead>
          <tbody>
            {flights.length > 0 ? (
              flights.map((flight) => (
                <tr key={flight.id} className="text-center border-b hover:bg-gray-400">
                  <td className="p-3 border">{flight.flightNumber}</td>
                  <td className="p-3 border">{flight.airline}</td>
                  <td className="p-3 border">{flight.origin}</td>
                  <td className="p-3 border">{flight.destination}</td>
                  <td className="p-3 border">{flight.departureTime}</td>
                  <td className={`p-3 border font-bold ${getStatusColor(flight.status)}`}>
                    {flight.status}
                  </td>
                  <td className="p-3 border">
                    <Link to={`/flight/${flight.id}`} className="text-blue-500 underline">
                      View Details
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-3 text-center text-gray-500">
                  Loading flights...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Function to style status
const getStatusColor = (status: string) => {
  switch (status) {
    case "On Time":
      return "text-green-600";
    case "Delayed":
      return "text-red-600";
    case "Boarding":
      return "text-blue-600";
    default:
      return "text-gray-600";
  }
};

export default Flight;
