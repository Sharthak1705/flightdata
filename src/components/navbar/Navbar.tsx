import { Link } from "react-router-dom"; 
import FlightTable from "../flight/flight";
import Image from "../../assets/flight.png";

const Navbar = () => {
  return (
    <>
      <header className="p-4 flex justify-between items-center bg-gray-300 shadow-md">
        <div className="flex items-center gap-2">
          <img src={Image} alt="Flight Logo" className="h-10 w-10" />
          <span className="text-xl font-bold">Flights</span>
        </div>     
        <h2 className="text-2xl font-bold"> Flight Status</h2>
        <Link to="/sign_up">
          <button className="bg-red-600 px-4 py-2 rounded-full text-white hover:bg-red-400">
            Sign In
          </button>
        </Link>
      </header>
      <div className="p-4 bg-gray-300">
        <FlightTable />
      </div>
    </>
  );
};

export default Navbar;
