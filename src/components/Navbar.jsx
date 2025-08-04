import React from 'react';
import { Link } from 'react-router-dom';
// import '../App.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Helping Hands</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/volunteer">Volunteer</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
