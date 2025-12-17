import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        
        {/* Column 1: Brand */}
        <div className="footer-col">
          <img src="/images/logos/logo (2).jpg" alt="EG Group" className="footer-logo" />
          <p className="footer-desc">
            Redefining standards in Agriculture, Construction, and Media since 1992. 
            Moving from words to action.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h4>Corporate</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/team">Our Leadership</Link></li>
            <li><Link to="/blog">Newsroom</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Sectors */}
        <div className="footer-col">
          <h4>Sectors</h4>
          <ul className="footer-links">
            <li><Link to="/services#agriculture">EG Agriculture</Link></li>
            <li><Link to="/services#construction">EG Construction</Link></li>
            <li><Link to="/services#media">EG Media</Link></li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div className="footer-col">
          <h4>Head Office</h4>
          <div className="contact-row">
            <MapPin size={16} className="f-icon"/>
            <span>6 Gasline Road, Opposite Chelsea, Ota, Ogun State.</span>
          </div>
          <div className="contact-row">
            <Phone size={16} className="f-icon"/>
            <span>0802 312 3167</span>
          </div>
          <div className="contact-row">
            <Mail size={16} className="f-icon"/>
            <span>erstegraceland@yahoo.co.uk</span>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container bottom-flex">
          <p>&copy; {new Date().getFullYear()} Erste Graceland Limited. All rights reserved.</p>
          <div className="social-links">
            <a href="#"><Facebook size={18}/></a>
            <a href="#"><Twitter size={18}/></a>
            <a href="#"><Linkedin size={18}/></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
