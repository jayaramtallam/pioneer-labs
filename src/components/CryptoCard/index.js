import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEuroSign, faPoundSign, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const CryptoCard = ({ data }) => {
  // Define the icon for each cryptocurrency
  const getIcon = (code) => {
    switch (code) {
      case 'EUR':
        return <FontAwesomeIcon icon={faEuroSign} />;
      case 'GBP':
        return <FontAwesomeIcon icon={faPoundSign} />;
      case 'USD':
        return <FontAwesomeIcon icon={faDollarSign} />;
      default:
        return null; // Default icon
    }
  };

  return (
    <div className="crypto-card">
      {/* Display the icon */}
      {getIcon(data.code)}

      {/* Display other data */}
      <h2>{data.code}</h2>
      <p>{data.description}</p>
      <p>{data.rate} <FontAwesomeIcon icon={faDollarSign} /></p>
    </div>
  );
};

export default CryptoCard;
