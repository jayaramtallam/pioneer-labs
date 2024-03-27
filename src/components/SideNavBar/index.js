import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import { SiBlockchaindotcom } from "react-icons/si";
import { IoMdHome } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";


import './index.css'; // Import the CSS file

const SideNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`side-nav-container ${isOpen ? 'open' : ''}`}>
      <button type="button" className="menu-toggle" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className="side-nav">
        <img src="https://media.licdn.com/dms/image/C4E0BAQGRlPeqdUfHOw/company-logo_200_200/0/1631346591619?e=1719446400&v=beta&t=lytqijLx0T-lMl_LJPMU1WVzWwxlRPsp6qCrKMR4_Nc" alt="Logo" className='logo' />
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button type="submit"><FontAwesomeIcon icon={faSearch} /></button>
        </div>
        <ul>
          <li><IoMdHome/><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><IoPersonSharp/><Link to="/population" className={location.pathname === '/population' ? 'active' : ''}>Population</Link></li>
          <li><SiBlockchaindotcom /><Link to="/crypto" className={location.pathname === '/crypto' ? 'active' : ''}>Crypto Prices</Link></li>
          {/* Add more navigation items as needed */}
        </ul>
      </div>
    </div>
  );
};

export default SideNavBar;
