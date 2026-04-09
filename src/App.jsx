import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";

import AddProject from "./AddProject";
import EditProject from "./EditProject";

import AddService from "./AddService";
import EditService from "./EditService";

import Users from "./Users";
import AddUser from "./AddUser";
import EditUser from "./EditUser";

import References from "./References";
import AddReference from "./AddReference";
import EditReference from "./EditReference";

import EditContact from "./EditContact";

import Signin from "./signin";
import Signup from "./signup";
import Dashboard from "./dashboard";

import profile from "./IMG_4499.jpeg";

import "./App.css";

export default function App() {

  return (

    <HashRouter>

      <nav className="navbar">

        <div className="logo">

          <img
            src={profile}
            alt="Shukura Adesope"
            className="logo-img"
          />

          <span>Shukura Adesope</span>

        </div>

        <ul className="nav-links">

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/contact">Contact</Link></li>

          <li><Link to="/users">Users</Link></li>
          <li><Link to="/references">References</Link></li>

          <li><Link to="/add-project">Add Project</Link></li>
          <li><Link to="/add-service">Add Service</Link></li>
          <li><Link to="/add-user">Add User</Link></li>
          <li><Link to="/add-reference">Add Reference</Link></li>

          <li><Link to="/signin">Signin</Link></li>
          <li><Link to="/signup">Signup</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>

        </ul>

      </nav>


      <Routes>

        {/* AUTH */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* MAIN */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* PROJECT */}
        <Route path="/add-project" element={<AddProject />} />
        <Route path="/edit-project/:id" element={<EditProject />} />

        {/* SERVICE */}
        <Route path="/add-service" element={<AddService />} />
        <Route path="/edit-service/:id" element={<EditService />} />

        {/* USERS */}
        <Route path="/users" element={<Users />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />

        {/* REFERENCES */}
        <Route path="/references" element={<References />} />
        <Route path="/add-reference" element={<AddReference />} />
        <Route path="/edit-reference/:id" element={<EditReference />} />

        {/* CONTACT */}
        <Route path="/edit-contact/:id" element={<EditContact />} />

      </Routes>


      <footer className="footer">

        © 2026 Shukura Adesope

      </footer>

    </HashRouter>

  );

}