import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Globe, Tractor, Hammer } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  // Determine active section for styling
  const isAgric = location.pathname.includes('/agriculture');
  const isConst = location.pathname.includes('/construction');

  return (
    <nav className={`navbar ${isAgric ? 'nav-agric' : isConst ? 'nav-const' : ''}`}>
      <div className="container nav-container">
        
        {/* LOGO */}
        <Link to="/" className="logo">
          <span className="logo-text">EG</span>
          <span className="logo-suffix">GROUP</span>
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact" className="nav-btn">Contact</Link></li>
          
          {/* THE "EXPLORE US" SWITCHER */}
          <li 
            className="explore-dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="explore-btn">
              Explore Sectors <ChevronDown size={16} />
            </button>
            
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-item">
                  <Globe size={18} /> <span>EG Corporate</span>
                </Link>
                <Link to="/agriculture" className="dropdown-item">
                  <Tractor size={18} /> <span>EG Agriculture</span>
                </Link>
                <Link to="/construction" className="dropdown-item">
                  <Hammer size={18} /> <span>EG Construction</span>
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
          <Link to="/agriculture" onClick={() => setIsOpen(false)}>Agriculture</Link>
          <Link to="/construction" onClick={() => setIsOpen(false)}>Construction</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

