import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import HomePage from './components/Home.jsx';
import AboutUs from './components/AboutUs';
import VolunteerForm from './components/VolunteerForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/volunteer" element={<VolunteerForm />} />
      </Routes>
      <footer className="footer">
        <p>&copy; 2025 Helping Hands NGO | All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
