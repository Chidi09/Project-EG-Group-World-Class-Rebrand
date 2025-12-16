import React, { useRef } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Ruler, Home, Truck, HardHat, ArrowRight, Globe } from 'lucide-react';
import './ConstHome.css';

const ConstHome = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <ReactLenis root>
      <div className="const-elite-wrapper">
        
        {/* --- 1. HERO: ARCHITECTURAL VISION --- */}
        <section ref={targetRef} className="const-hero-elite">
          <motion.div style={{ y }} className="hero-bg-blueprint" />
          <div className="hero-overlay-dark"></div>
          
          <div className="container hero-content-struct">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <div className="brand-line"></div>
              <h1 className="hero-title-struct">
                Building <span className="text-stroke">Nations.</span><br/>
                Housing <span className="text-solid">Dreams.</span>
              </h1>
              <p className="hero-desc-struct">
                We don't just build structures; we engineer legacies. 
                From complex earthworks to high-rise developments.
              </p>
              <button className="btn-industrial">View Portfolio <ArrowRight size={18}/></button>
            </motion.div>
          </div>
        </section>

        {/* --- 2. CAPABILITIES (Drafting Table) --- */}
        <section className="capabilities-section">
          <div className="container">
            <div className="cap-grid">
              <div className="cap-card">
                <Ruler size={40} className="cap-icon"/>
                <h3>Civil Engineering</h3>
                <p>Roads, bridges, land reclamation. From asphalt to interlocking stone.</p>
              </div>
              <div className="cap-card active">
                <Home size={40} className="cap-icon"/>
                <h3>Housing Development</h3>
                <p>High-rise, low cost, and commercial estates like Evangel.</p>
              </div>
              <div className="cap-card">
                <Truck size={40} className="cap-icon"/>
                <h3>Earthworks</h3>
                <p>Large scale material supply and quarry operations.</p>
              </div>
              <div className="cap-card">
                <HardHat size={40} className="cap-icon"/>
                <h3>Consultancy</h3>
                <p>CAD layouts, planning schedules, and budget forecasts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. FEATURED PROJECT (Slider Style) --- */}
        <section className="featured-project-section">
          <div className="project-split">
            <div className="project-visual" style={{backgroundImage: "url('/images/evangel-estate.jpg')"}}>
              <div className="project-badge">FEATURED CASE STUDY</div>
            </div>
            <div className="project-details">
              <span className="project-id">RESIDENTIAL // 001</span>
              <h2>Evangel Housing Estate</h2>
              <p>A landmark development showcasing our "Fast Track Home Delivery System." We produced affordable housing within a short timeframe without cost adjustments.</p>
              
              <div className="specs-grid">
                <div className="spec-box">
                  <strong>Status</strong>
                  <span>Completed</span>
                </div>
                <div className="spec-box">
                  <strong>Scope</strong>
                  <span>Design & Build</span>
                </div>
              </div>
              
              <button className="btn-outline-dark">Read Case Study</button>
            </div>
          </div>
        </section>

        {/* --- 4. GLOBAL NETWORK (Dark Map) --- */}
        <section className="global-net-section">
          <div className="container">
            <h2>Global Engineering Network</h2>
            <div className="net-list">
              <div className="net-item">
                <Globe className="net-icon"/> 
                <div><h4>UK</h4><span>Technical Partners</span></div>
              </div>
              <div className="net-item">
                <Globe className="net-icon"/> 
                <div><h4>Thailand</h4><span>Training</span></div>
              </div>
              <div className="net-item">
                <Globe className="net-icon"/> 
                <div><h4>Ireland</h4><span>Supply Chain</span></div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default ConstHome;
