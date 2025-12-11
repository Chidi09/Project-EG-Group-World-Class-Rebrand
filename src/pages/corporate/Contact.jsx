import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, ArrowRight } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  // Data for the offices
  const offices = [
    {
      id: 'lagos',
      city: 'Lagos (HQ)',
      address: '96, Awolowo Way, Ikeja, Lagos',
      phone: '0802 312 3167',
      email: 'info@erstegraceland.net'
    },
    {
      id: 'ph',
      city: 'Port Harcourt',
      address: '61, Aba Road, Port Harcourt, Rivers State',
      phone: '0802 312 3167',
      email: 'info@erstegraceland.net'
    },
    {
      id: 'imo',
      city: 'Imo',
      address: 'Area E, Plot 58, Behind Concord Hotels, New Owerri',
      phone: '0802 312 3167',
      email: 'info@erstegraceland.net'
    },
    {
      id: 'calabar',
      city: 'Calabar',
      address: '139, Ndidem Usang Iso Road, Calabar, Cross River',
      phone: '0802 312 3167',
      email: 'info@erstegraceland.net'
    }
  ];

  const [activeOffice, setActiveOffice] = useState(offices[0]);

  return (
    <div className="contact-wrapper">
      
      {/* --- HERO SECTION --- */}
      <section className="contact-hero">
        <div className="hero-content">
          <h4>Get in Touch</h4>
          <h1>Let's Build the<br />Future Together.</h1>
          <p>Whether you need agricultural solutions, construction expertise, or media partnership, we are ready to listen.</p>
        </div>
      </section>

      {/* --- INTERACTIVE LOCATIONS & FORM --- */}
      <section className="contact-interface">
        <div className="container contact-grid">
          
          {/* LEFT: Location Selector */}
          <div className="location-panel">
            <div className="panel-header">
              <h3>Our Presence</h3>
              <p>Select a location to view details</p>
            </div>
            
            <div className="city-list">
              {offices.map((office) => (
                <button 
                  key={office.id} 
                  className={`city-btn ${activeOffice.id === office.id ? 'active' : ''}`}
                  onClick={() => setActiveOffice(office)}
                >
                  <MapPin size={18} /> {office.city}
                  {activeOffice.id === office.id && <ArrowRight size={16} className="active-arrow"/>}
                </button>
              ))}
            </div>

            {/* The Dynamic Address Card */}
            <div className="address-card fade-in-up" key={activeOffice.id}>
              <div className="card-row">
                <MapPin className="card-icon" />
                <div>
                  <label>Visit Us</label>
                  <p>{activeOffice.address}</p>
                </div>
              </div>
              <div className="card-row">
                <Phone className="card-icon" />
                <div>
                  <label>Call Us</label>
                  <p>{activeOffice.phone}</p>
                </div>
              </div>
              <div className="card-row">
                <Mail className="card-icon" />
                <div>
                  <label>Email Us</label>
                  <p>{activeOffice.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="form-panel">
            <h3>Send a Message</h3>
            <form className="contact-form">
              <div className="form-group">
                <input type="text" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <select>
                  <option>General Inquiry</option>
                  <option>Agriculture Services</option>
                  <option>Construction Projects</option>
                  <option>Media & Partnerships</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="How can we help you?" rows="5"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Contact;

