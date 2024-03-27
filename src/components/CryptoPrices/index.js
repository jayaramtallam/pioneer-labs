// CryptoPrices.js
import React, { useState, useEffect } from 'react';
import CryptoCard from '../CryptoCard';
import './index.css'; // Import CSS for styling

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState({});

  useEffect(() => {
    // Fetch cryptocurrency prices from API
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
        const data = await response.json();
        console.log(data);
        setCryptoData(data.bpi); // Set data from the 'bpi' key
      } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="crypto-prices-container">
      <h2>Cryptocurrency Prices</h2>
      <div className="crypto-cards">
        {Object.keys(cryptoData).map((key) => (
          <CryptoCard key={key} data={cryptoData[key]} />
        ))}
      </div>
    </div>
  );
};

export default CryptoPrices;
