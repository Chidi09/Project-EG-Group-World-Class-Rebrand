import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, Wheat, Home, Truck } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <ReactLenis root>
      <div className="about-elite-wrapper">
        
        {/* --- 1. HERO --- */}
        <section className="about-hero-elite">
          <div className="container">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="since-tag">Since 1992</span>
              <h1>Driven by Principles.<br />Defined by <span className="text-accent">Growth.</span></h1>
              <p>From a small consultancy to a global agricultural conglomerate. We are EG Group.</p>
            </motion.div>
          </div>
        </section>

        {/* --- 2. VISUAL TIMELINE --- */}
        <section className="timeline-section">
          <div className="container">
            <div className="section-head">
              <h2>Our Journey</h2>
              <div className="green-line"></div>
            </div>

            <div className="timeline-container">
              {/* Node 1: 1992 */}
              <div className="timeline-row">
                <div className="timeline-content left">
                  <span className="year-label">1992</span>
                  <h3>The Foundation</h3>
                  <p>Started as <strong>Anchor Services Ltd</strong>, a small-scale consultancy delivering expertise to local farmers.</p>
                </div>
                <div className="timeline-visual right" style={{backgroundImage: "url('/images/history-1992.jpg')"}}></div>
              </div>

              {/* Node 2: 2000s */}
              <div className="timeline-row reverse">
                <div className="timeline-content right">
                  <span className="year-label">2000s</span>
                  <h3>Rapid Expansion</h3>
                  <p>Expanded into cereal farming, poultry, and fish farming. Began global marketing of agricultural products.</p>
                </div>
                <div className="timeline-visual left" style={{backgroundImage: "url('/images/history-growth.jpg')"}}></div>
              </div>

              {/* Node 3: Today */}
              <div className="timeline-row">
                <div className="timeline-content left">
                  <span className="year-label">Today</span>
                  <h3>The Conglomerate</h3>
                  <p>Now <strong>EG Group</strong>. A powerhouse with subsidiaries in Construction, Palm Oil, and Media, spanning 3 continents.</p>
                </div>
                <div className="timeline-visual right" style={{backgroundImage: "url('/images/history-today.jpg')"}}></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. STRUCTURE GRID --- */}
        <section className="structure-section">
          <div className="container">
            <div className="section-head-white">
              <h2>Our Structure</h2>
              <p>A diversified portfolio ensuring stability.</p>
            </div>

            <div className="structure-grid">
              <div className="structure-card">
                <Wheat className="struct-icon" />
                <h3>EG Agriculture</h3>
                <p>Poultry, Fish Farming, Cereal.</p>
              </div>
              <div className="structure-card">
                <Home className="struct-icon" />
                <h3>EG Construction</h3>
                <p>Housing & Infrastructure.</p>
              </div>
              <div className="structure-card">
                <Truck className="struct-icon" />
                <h3>EG Palm Ltd</h3>
                <p>14,000 Hectares of Palm.</p>
              </div>
              <div className="structure-card">
                <Briefcase className="struct-icon" />
                <h3>Anchor Services</h3>
                <p>Consultancy & Strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. FOOTPRINT MAP (Data) --- */}
        <section className="footprint-section">
          <div className="container">
            <h2>Our Footprint</h2>
            <div className="footprint-grid">
              <div className="fp-item">
                <MapPin className="fp-icon"/>
                <h3>4,000</h3>
                <span>Hectares (Imo State)</span>
              </div>
              <div className="fp-item">
                <MapPin className="fp-icon"/>
                <h3>10,000</h3>
                <span>Hectares (Calabar)</span>
              </div>
              <div className="fp-item">
                <MapPin className="fp-icon"/>
                <h3>300</h3>
                <span>Ton/Day Quarry</span>
              </div>
              <div className="fp-item">
                <MapPin className="fp-icon"/>
                <h3>HQ</h3>
                <span>Lagos Hub</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default About;
