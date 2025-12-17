import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Tractor, Hammer } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Determine active section for styling
  const isAgric = location.pathname.includes('/agriculture');
  const isConst = location.pathname.includes('/construction');

  return (
    <nav className={`navbar ${isAgric ? 'nav-agric' : isConst ? 'nav-const' : ''}`}>
      <div className="container nav-container">
        
        {/* LOGO - UPDATED */}
        <Link to="/" className="logo">
          <img 
            src="/images/logos/logo (2).jpg" 
            alt="EG Group" 
            className="logo-img" 
          />
        </Link>

        {/* DESKTOP LINKS */}
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/team">Our Team</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/services">Our Expertise</Link></li>
          <li><Link to="/contact" className="nav-btn">Contact</Link></li>
        </ul>

        {/* MOBILE MENU TOGGLE */}
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* MOBILE MENU - UPDATED WITH ALL LINKS */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About Us</Link>
        <Link to="/team" onClick={() => setIsOpen(false)}>Our Team</Link>
        <Link to="/blog" onClick={() => setIsOpen(false)}>Newsroom</Link>
        <Link to="/media" onClick={() => setIsOpen(false)}>Media</Link>
        
        <div className="mobile-divider"></div>
        
        <span className="mobile-label">Sectors</span>
        <Link to="/services#agriculture" className="mobile-sub-link" onClick={() => setIsOpen(false)}>
          <Tractor size={16}/> EG Agriculture
        </Link>
        <Link to="/services#construction" className="mobile-sub-link" onClick={() => setIsOpen(false)}>
          <Hammer size={16}/> EG Construction
        </Link>
        
        <Link to="/contact" className="mobile-contact-btn" onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

