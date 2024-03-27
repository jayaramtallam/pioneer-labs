// HomePage.js
import React from 'react';
import PopulationGraph from '../PopulationGraph';
import CryptoPrices from '../CryptoPrices';
import './index.css'; // Import CSS for styling

const HomePage = () => {
  return (
      <div className="content-container">
        <h1>Home Page</h1>
        <PopulationGraph />
        <CryptoPrices />
      </div>
  );
};

export default HomePage;
