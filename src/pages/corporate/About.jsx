import React from 'react';
import { Briefcase, MapPin, TrendingUp, Anchor, Truck, Home, Wheat } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <div className="about-wrapper">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h4>Since 1992</h4>
          <h1>Driven by Principles.<br />Defined by Growth.</h1>
          <p>
            From a small consultancy to a global conglomerate. 
            We are EG Group—redefining standards in Agriculture, Construction, and Media.
          </p>
        </div>
      </section>

      {/* --- 2. THE STORY (TIMELINE) --- */}
      <section className="history-section">
        <div className="container">
          <div className="section-head">
            <h2>Our Journey</h2>
            <div className="underline"></div>
            <p>From humble beginnings to multinational operations.</p>
          </div>

          <div className="timeline">
            {/* 1992 */}
            <div className="timeline-item">
              <div className="timeline-icon"><Anchor size={24} /></div>
              <div className="timeline-content">
                <span className="year">1992</span>
                <h3>The Foundation</h3>
                <p>Started as <strong>Anchor Services Ltd</strong>, a small-scale agricultural consultancy focused on delivering expertise to local farmers.</p>
              </div>
            </div>

            {/* Expansion */}
            <div className="timeline-item right">
              <div className="timeline-icon"><TrendingUp size={24} /></div>
              <div className="timeline-content">
                <span className="year">2000s</span>
                <h3>Rapid Expansion</h3>
                <p>Grew to include cereal farming, poultry, and fish farming. We began processing activities and global marketing of agricultural products.</p>
              </div>
            </div>

            {/* Today */}
            <div className="timeline-item">
              <div className="timeline-icon"><Briefcase size={24} /></div>
              <div className="timeline-content">
                <span className="year">Today</span>
                <h3>The Conglomerate</h3>
                <p>Now <strong>EG Group</strong>. A powerhouse with subsidiaries in Construction, Food, Palm Oil, and Media, partnering with associates in Europe, America, and Asia.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. THE GROUP STRUCTURE (SUBSIDIARIES) --- */}
      <section className="subsidiaries-section">
        <div className="container">
          <div className="section-head">
            <h2>Our Structure</h2>
            <p>A diversified portfolio ensuring stability and excellence.</p>
          </div>

          <div className="subsidiary-grid">
            <div className="sub-card">
              <Wheat className="sub-icon" />
              <h3>EG Agriculture</h3>
              <p>Poultry, Fish Farming, and extensive Cereal production.</p>
            </div>
            <div className="sub-card">
              <Home className="sub-icon" />
              <h3>EG Construction</h3>
              <p>Affordable housing, roads, and allied infrastructure.</p>
            </div>
            <div className="sub-card">
              <Truck className="sub-icon" />
              <h3>EG Palm Ltd</h3>
              <p>Managing over 14,000 hectares of palm plantations.</p>
            </div>
            <div className="sub-card">
              <Briefcase className="sub-icon" />
              <h3>Anchor Services</h3>
              <p>The original consultancy arm, still driving strategy.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. SCALE & FOOTPRINT (DATA) --- */}
      <section className="scale-section">
        <div className="scale-overlay">
          <div className="container">
            <h2>Our Footprint</h2>
            <div className="scale-grid">
              
              <div className="scale-item">
                <div className="scale-marker">
                  <MapPin className="pin-icon" />
                  <span>Imo State</span>
                </div>
                <h3>4,000</h3>
                <p>Hectares Palm Plantation<br/>(Imo Palm Ltd)</p>
              </div>

              <div className="scale-item">
                <div className="scale-marker">
                  <MapPin className="pin-icon" />
                  <span>Calabar</span>
                </div>
                <h3>10,000</h3>
                <p>Hectares Palm Plantation</p>
              </div>

              <div className="scale-item">
                <div className="scale-marker">
                  <MapPin className="pin-icon" />
                  <span>Cross River</span>
                </div>
                <h3>300</h3>
                <p>Ton/Day Quarry Capacity</p>
              </div>

              <div className="scale-item">
                <div className="scale-marker">
                  <MapPin className="pin-icon" />
                  <span>Lagos (HQ)</span>
                </div>
                <h3>Hub</h3>
                <p>Training & Feed Mill Center<br/>(Oko-Oba, Agege)</p>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
