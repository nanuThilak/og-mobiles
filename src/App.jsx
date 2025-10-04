import React from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Vivo from "./pages/Vivo";
import Oppo from "./pages/Oppo";
import R from "./pages/R";
import M from "./pages/M";
import Contact from "./pages/Contact";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vivo" element={<Vivo />} />
        <Route path="/oppo" element={<Oppo />} />
        <Route path="/realme" element={<R />} />
        <Route path="/mi" element={<M />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
