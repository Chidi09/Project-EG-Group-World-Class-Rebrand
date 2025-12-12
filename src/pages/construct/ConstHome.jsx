import React from 'react';
import { HardHat, Truck, Ruler, Home, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import './ConstHome.css';

const services = [
  {
    id: 1,
    title: "Civil Engineering",
    desc: "Roads, bridges, and land reclamation. From asphalt to interlocking stone paving.",
    icon: <Ruler size={32} />
  },
  {
    id: 2,
    title: "Housing Development",
    desc: "Low cost, medium income, and high-rise commercial developments like Evangel Estate.",
    icon: <Home size={32} />
  },
  {
    id: 3,
    title: "Earthworks & Haulage",
    desc: "Large scale material supply (Stones, Sandcrete) and quarry operations.",
    icon: <Truck size={32} />
  },
  {
    id: 4,
    title: "Project Consultancy",
    desc: "Budget forecasts, CAD layouts, and planning schedules for private & government clients.",
    icon: <HardHat size={32} />
  }
];

const ConstHome = () => {
  return (
    <div className="const-wrapper">
      
      {/* --- 1. HERO: ARCHITECTURAL VISION --- */}
      <section className="const-hero">
        <div className="hero-content">
          <div className="brand-tag">EG CONSTRUCTION</div>
          <h1>Building Nations.<br />Housing Dreams.</h1>
          <p>We deliver quality projects you can count on. From earthworks in Nigeria to partnerships in the UK and Thailand.</p>
          <div className="hero-actions">
            <a href="#projects" className="btn-primary" style={{textDecoration:'none', display:'inline-block', padding:'12px 30px'}}>View Portfolio</a>
            <a href="#services" className="btn-outline" style={{textDecoration:'none', display:'inline-block', padding:'12px 30px'}}>Our Capabilities</a>
          </div>
        </div>
      </section>

      {/* --- 2. SERVICES (THE BLUEPRINT GRID) --- */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-head-dark">
            <h2>Our Capabilities</h2>
            <p>From concept to concrete.</p>
          </div>

          <div className="blueprint-grid">
            {services.map((svc) => (
              <div key={svc.id} className="blueprint-card">
                <div className="card-icon-box">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <div className="blueprint-lines"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 3. FEATURED PROJECT (Evangel Estate) --- */}
      <section id="projects" className="project-spotlight">
        <div className="project-img">
          <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80" alt="Evangel Estate" />
          <div className="project-badge">Featured Project</div>
        </div>
        <div className="project-info">
          <h3>Evangel Housing Estate</h3>
          <p className="project-desc">
            A landmark development showcasing our "Fast Track Home Delivery System." 
            We produced affordable housing within a short timeframe without cost adjustments.
          </p>
          
          <div className="project-specs">
            <div className="spec">
              <strong>Type</strong>
              <span>Residential</span>
            </div>
            <div className="spec">
              <strong>Status</strong>
              <span>Completed</span>
            </div>
            <div className="spec">
              <strong>Scope</strong>
              <span>Design & Build</span>
            </div>
          </div>

          <button className="view-case-btn">View Case Study <ArrowRight size={18} /></button>
        </div>
      </section>

      {/* --- 4. GLOBAL NETWORK MAP --- */}
      <section className="global-eng-section">
        <div className="container">
          <div className="map-content">
            <h2>Global Engineering Network</h2>
            <p>We operate in Nigeria with active technical partners across the globe.</p>
            
            <div className="network-list">
              <div className="network-item">
                <Globe className="net-icon" />
                <div>
                  <h4>United Kingdom</h4>
                  <span>Technical Partners</span>
                </div>
              </div>
              <div className="network-item">
                <Globe className="net-icon" />
                <div>
                  <h4>Thailand</h4>
                  <span>Training & Development</span>
                </div>
              </div>
              <div className="network-item">
                <Globe className="net-icon" />
                <div>
                  <h4>Ireland</h4>
                  <span>Supply Chain</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Visual abstract map */}
          <div className="map-visual">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_map_blank_without_borders.svg/2000px-World_map_blank_without_borders.svg.png" className="world-map-img" alt="World Map" />
            <div className="pin pin-ng"></div>
            <div className="pin pin-uk"></div>
            <div className="pin pin-thai"></div>
            {/* Connecting lines drawn via CSS */}
            <svg className="map-lines">
              <line x1="48%" y1="55%" x2="46%" y2="25%" stroke="#F57F17" strokeWidth="2" strokeDasharray="5" />
              <line x1="48%" y1="55%" x2="75%" y2="45%" stroke="#F57F17" strokeWidth="2" strokeDasharray="5" />
            </svg>
          </div>
        </div>
      </section>

      {/* --- 5. SAFETY & INTEGRITY --- */}
      <section className="safety-bar">
        <div className="container safety-flex">
          <h3>Integrity is the foundation of all we do.</h3>
          <div className="badges">
            <span className="badge"><CheckCircle size={16}/> ISO Standards</span>
            <span className="badge"><CheckCircle size={16}/> Safety First</span>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ConstHome;

