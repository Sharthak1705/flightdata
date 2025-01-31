import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Flight from "./components/flight/flight";
import Navbar from "./components/navbar/Navbar";
import Form from "./components/registerpage/form";
import FlightDetail from "./components/flight/FlightDetails";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/flight" element={<Flight />} />
        <Route path="/flight/:id" element={<FlightDetail />} />
        <Route path="/sign_up" element={<Form />} />
        <Route path="/" element={<Navbar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
