import React, { useState } from 'react';

// Smooth Scroll Component
const SmoothScroll = () => {
  const handleClick = (event, hash) => {
    if (hash !== "") {
      event.preventDefault();
      const element = document.querySelector(hash);
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth',
      });
      window.location.hash = hash;
    }
  };

  return (
    <div>
      <a href="#section1" onClick={(e) => handleClick(e, '#section1')}>Go to Section 1</a>
      <a href="#section2" onClick={(e) => handleClick(e, '#section2')}>Go to Section 2</a>
      
      {/* Example sections to scroll to */}
      <div id="section1" style={{ height: '100vh', backgroundColor: 'lightblue' }}>Section 1</div>
      <div id="section2" style={{ height: '100vh', backgroundColor: 'lightgreen' }}>Section 2</div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false);
  
    const handleCheckboxChange = () => {
      setMenuActive(!menuActive);
    };
  
    return (
      <div className="navbar-container">
        <input type="checkbox" onChange={handleCheckboxChange} />
        <div className={`menu-items ${menuActive ? 'active' : ''}`}>
          {/* Menu items */}
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
          </ul>
        </div>
      </div>
    );
  };
  
