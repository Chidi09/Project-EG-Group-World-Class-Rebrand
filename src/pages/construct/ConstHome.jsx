import React from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { Link } from 'react-router-dom';
import { Ruler, Home, Truck, Briefcase, Globe, ArrowRight } from 'lucide-react';
import './ConstHome.css';

const ConstHome = () => {
  return (
    <ReactLenis root>
      <div className="const-brand-wrapper">
        
        {/* --- 1. HERO: MONUMENTAL --- */}
        <section className="const-hero-brand">
          <div className="hero-bg-overlay-green"></div>
          <div className="const-hero-bg" style={{backgroundImage: "url('/images/logos/green eco friendly building architecture.jpg')"}}></div>
          
          <div className="container hero-content-brand">
            <span className="brand-pill">EG Construction</span>
            <h1>Constructing <br/> <span className="text-gold">Legacies.</span></h1>
            <p>From complex earthworks to high-rise developments. We build with the precision of engineers and the heart of nation-builders.</p>
            <Link to="/contact" className="btn-industrial" style={{textDecoration: 'none', display: 'inline-flex'}}>
              Start a Project <ArrowRight size={18}/>
            </Link>
          </div>
        </section>

        {/* --- 2. CAPABILITIES (Clean Grid) --- */}
        <section className="services-brand-section">
          <div className="container">
            <div className="brand-grid">
              <div className="brand-card">
                <Ruler className="brand-icon"/>
                <h3>Civil Engineering</h3>
                <p>Roads, bridges, and reclamation.</p>
              </div>
              <div className="brand-card">
                <Home className="brand-icon"/>
                <h3>Housing Development</h3>
                <p>Commercial & Residential Estates.</p>
              </div>
              <div className="brand-card">
                <Truck className="brand-icon"/>
                <h3>Earthworks</h3>
                <p>Quarry & Material Supply.</p>
              </div>
              <div className="brand-card">
                <Briefcase className="brand-icon"/>
                <h3>Consultancy</h3>
                <p>Planning & Budget Forecasts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. FEATURED PROJECT (ELEGANT) --- */}
        <section className="project-brand-section">
          <div className="container project-layout">
             <div className="project-text">
               <span className="case-study-tag">Case Study: 001</span>
               <h2>Evangel Housing Estate</h2>
               <p>A masterclass in our "Fast Track Delivery System." Delivering affordable luxury without cost overruns.</p>
               
               <div className="project-stats">
                 <div className="stat-row">
                   <span>Scope</span> <strong>Design & Build</strong>
                 </div>
                 <div className="stat-row">
                   <span>Status</span> <strong>Completed</strong>
                 </div>
               </div>
               <Link to="/contact" className="btn-brand-dark" style={{textDecoration: 'none', display: 'inline-flex'}}>
                 Request Case Study <ArrowRight size={16}/>
               </Link>
             </div>

             <div className="project-image-frame">
                <img src="/images/logos/evangel housing estate .jpg" alt="Evangel Estate" />
             </div>
          </div>
        </section>

        {/* --- 4. GLOBAL NETWORK (Visual Map Style) --- */}
        <section className="network-brand-section">
          <div className="container">
             <h2>Global Engineering Network</h2>
             <div className="map-styled-grid">
                <div className="map-card">
                   <Globe className="map-icon"/>
                   <h4>United Kingdom</h4>
                   <span>Technical Partners</span>
                </div>
                <div className="map-card">
                   <Globe className="map-icon"/>
                   <h4>Thailand</h4>
                   <span>Training & Development</span>
                </div>
                <div className="map-card">
                   <Globe className="map-icon"/>
                   <h4>Ireland</h4>
                   <span>Supply Chain</span>
                </div>
             </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default ConstHome;
