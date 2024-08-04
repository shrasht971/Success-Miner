// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router correctly
import Navbar from "./NavbarComponent/Navbar";
import Home from "./Pages/Home";
import Performance from "./Pages/Performance";
import Service from "./Pages/Service";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

const App = () => {
  return (
    <Router> {/* Wrap Routes with Router */}
      <Navbar /> {/* Navbar should be placed outside Routes but inside Router */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Use element prop */}
        <Route path="/performance" element={<Performance />} />
        <Route path="/service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
