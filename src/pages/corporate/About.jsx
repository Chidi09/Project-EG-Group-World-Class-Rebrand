import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion } from 'framer-motion';
import { Calendar, Briefcase, MapPin, Wheat, Home, Truck, Quote } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <ReactLenis root>
      <div className="about-text-wrapper">
        
        {/* --- 1. TYPOGRAPHIC HERO --- */}
        <section className="about-hero-text">
          <div className="container">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8 }}
              className="hero-text-content"
            >
              <div className="hero-top-line">
                <span className="since-badge">Est. 1992</span>
                <div className="line-divider"></div>
              </div>
              
              <h1 className="big-type">
                Driven by <span className="outline-text">Principles.</span><br />
                Defined by <span className="gold-text">Growth.</span>
              </h1>
              
              <p className="hero-lead">
                From a boutique consultancy to a trans-continental conglomerate. 
                We are <strong>EG Group</strong>—redefining standards in Agriculture, Construction, and Media.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- 2. THE TEXT TIMELINE (Central Axis) --- */}
        <section className="timeline-text-section">
          <div className="container">
            <div className="section-label">Our History</div>
            
            <div className="history-axis">
              {/* Node 1: 1992 */}
              <div className="history-node">
                <div className="node-year">1992</div>
                <div className="node-content">
                  <h3>The Foundation</h3>
                  <p>Started as <strong>Anchor Services Ltd</strong>. We began as a specialized agricultural consultancy, delivering technical expertise and feasibility studies to local farmers and state governments.</p>
                </div>
              </div>

              {/* Node 2: 2000s */}
              <div className="history-node">
                <div className="node-year">2000s</div>
                <div className="node-content">
                  <h3>Rapid Expansion</h3>
                  <p>The vision grew. We expanded into direct production—cereal farming, poultry, and fish farming. We began processing activities and established global marketing channels for Nigerian products.</p>
                </div>
              </div>

              {/* Node 3: Today */}
              <div className="history-node">
                <div className="node-year">Today</div>
                <div className="node-content">
                  <h3>The Conglomerate</h3>
                  <p>Now <strong>EG Group</strong>. A diversified powerhouse with subsidiaries in Construction, Food, Palm Oil, and Media. We operate across 3 continents, partnering with associates in Europe, America, and Asia.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. CORPORATE PHILOSOPHY (Quote) --- */}
        <section className="philosophy-section">
          <div className="container">
            <div className="quote-box">
              <Quote size={40} className="quote-icon" />
              <h2>"Integrity is the foundation of all that we do. We believe that through hard work and honesty, we can achieve unparalleled success that we all can be proud of."</h2>
              <span className="quote-author">— Corporate Mandate</span>
            </div>
          </div>
        </section>

        {/* --- 4. STRUCTURE GRID --- */}
        <section className="structure-text-section">
          <div className="container">
            <div className="section-label dark">Our Structure</div>
            <div className="text-grid">
              <div className="text-card">
                <div className="card-header">
                  <Wheat size={24} /> <span>Agriculture</span>
                </div>
                <p>Poultry, Fish Farming, and extensive Cereal production across 4,000 hectares.</p>
              </div>
              
              <div className="text-card">
                <div className="card-header">
                  <Home size={24} /> <span>Construction</span>
                </div>
                <p>Affordable housing, roads, and allied infrastructure development.</p>
              </div>
              
              <div className="text-card">
                <div className="card-header">
                  <Truck size={24} /> <span>Logistics</span>
                </div>
                <p>Managing over 14,000 hectares of palm plantations and supply chains.</p>
              </div>
              
              <div className="text-card">
                <div className="card-header">
                  <Briefcase size={24} /> <span>Consultancy</span>
                </div>
                <p>Anchor Services: The original consultancy arm driving corporate strategy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. FOOTPRINT DATA --- */}
        <section className="footprint-text-section">
          <div className="container">
            <div className="fp-row">
              <div className="fp-stat">
                <span className="fp-big">4,000</span>
                <span className="fp-label">Hectares (Imo)</span>
              </div>
              <div className="fp-stat">
                <span className="fp-big">10,000</span>
                <span className="fp-label">Hectares (Calabar)</span>
              </div>
              <div className="fp-stat">
                <span className="fp-big">300</span>
                <span className="fp-label">Ton/Day Quarry</span>
              </div>
              <div className="fp-stat">
                <span className="fp-big">HQ</span>
                <span className="fp-label">Lagos Hub</span>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default About;
