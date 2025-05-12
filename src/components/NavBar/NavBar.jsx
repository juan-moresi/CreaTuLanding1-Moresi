import React, { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand-container">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <a href="#" className="navbar-brand">Sneakers Shop</a>
        </div>
        
        <button className="navbar-toggle" onClick={toggleMenu}>
          <span>☰</span>
        </button>
        
        <ul className={`navbar-menu ${menuActive ? 'active' : ''}`}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Categorías</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
        </ul>
        
        <div className="navbar-right">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;