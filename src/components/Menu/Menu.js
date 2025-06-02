import React, { useState, useEffect } from 'react';
import '../../styles/Header.css';

import logo from '../../assets/logo.png';
import fondo from '../../assets/fondo.png';

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Mujer');
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 0);
      setHideHeader(scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = {
    Mujer: ['Ir a Inicio', 'New in', 'Malva Edition', 'Ropa', 'Calzado', 'Diseñadores', 'Accesorios', 'Joyería', 'Black Days'],
    Hombre: ['Ir a Inicio', 'Novedades', 'Destacados', 'Ropa', 'Calzado', 'Diseñadores', 'Black Days'],
    'Shop By Brand': ['Ir a Inicio', 'Moda internacional', 'Moda nacional', 'Bolsos y Carteras', 'Accesorios'],
  };

  return (
    <header
      className={`header ${scrolled ? 'scrolled' : ''} ${hideHeader ? 'hide' : ''}`}
      style={{
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: scrolled ? '120px' : '100vh', //
        position: 'relative',
      }}
    >
      <div style={{ height: scrolled ? '120px' : '100vh', transition: 'height 0.5s ease' }}></div>
      <div className="overlay"></div>

      <div className="header-content">
        <div className="menu-logo">
          <div className="hamburger" onClick={toggleMenu}>☰</div>
          <img src={logo} alt="Logo" className="logo" />
          <div className="genero">
            <h6>MUJER</h6>
            <h6>HOMBRE</h6>
          </div>
        </div>
        <div className="menu-icons">
          <i className="bi bi-search"></i>
          <i className="bi bi-person"></i>
          <i className="bi bi-bag"></i>
        </div>
      </div>

      {menuOpen && (
        <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
          <div className="top-tabs">
            {['Mujer', 'Hombre', 'Shop By Brand'].map(tab => (
              <button
                key={tab}
                className={activeTab === tab ? 'active' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
            <button onClick={toggleMenu} className="close-btn">✕</button>
          </div>
          <ul className="menu-items">
            {menuItems[activeTab].map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Menu;
