// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideNavBar from './components/SideNavBar';
import PopulationGraph from './components/PopulationGraph';
import CryptoPrices from './components/CryptoPrices';
import HomePage from './components/HomePage';
import './App.css'; // Import CSS for styling

function App() {
  return (
    <Router>
      <div className="app-container">
        <SideNavBar />
        <div className="main-content">
          <Routes>
            <Route path="/population" element={<PopulationGraph />} />
            <Route path="/crypto" element={<CryptoPrices />} />
            {/* Add more routes for other tasks if needed */}
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
