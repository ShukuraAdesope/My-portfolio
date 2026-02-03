import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Services from "./Services.jsx";
import Contact from "./Contact.jsx";

import "./App.css";

export default function App() {
  return (
    <Router>
      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">Shukura Adesope</h2>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Shukura Adesope | Software Engineering Student
      </footer>
    </Router>
  );
}
