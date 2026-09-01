
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Booking from "./pages/Booking";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <nav
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          background: "#12343b",
        }}
      >
        <Link
          to="/booking"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Booking
        </Link>

        <Link
          to="/contact"
          style={{
            color: "white",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Contact
        </Link>
      </nav>

      <Routes>
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

