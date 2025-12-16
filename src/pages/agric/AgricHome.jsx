import React, { useRef } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Droplets, Zap, Anchor } from 'lucide-react';
import './AgricHome.css';

const AgricHome = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <ReactLenis root>
      <div className="agric-elite-wrapper">
        
        {/* --- 1. HERO: NATURE MEETS SCIENCE --- */}
        <section ref={targetRef} className="agric-hero-elite">
          <motion.div style={{ y }} className="hero-bg-parallax" />
          <div className="hero-overlay-gradient"></div>
          
          <div className="container hero-content-elite">
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
              <span className="scrolling-text-bg">YIELD</span>
              <div className="badge-tech">
                <span className="pulse-dot"></span> Precision Agriculture
              </div>
              <h1 className="hero-title-tech">
                Cultivating the <span className="text-outline">Future.</span><br/>
                Engineered for <span className="text-filled">Yield.</span>
              </h1>
              <p className="hero-desc-tech">
                4,000 Hectares. 0% Metal Residue. 100% Organic. <br/>
                We don't just farm; we engineer abundance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- 2. THE LAB (Science Strip) --- */}
        <section className="science-lab-section">
          <div className="container lab-grid">
            <div className="lab-card">
              <div className="lab-icon"><Droplets size={32}/></div>
              <h3>97.5% Floatability</h3>
              <p>Hydro-dynamic feed technology keeps pellets on surface.</p>
            </div>
            <div className="lab-card">
              <div className="lab-icon"><Zap size={32}/></div>
              <h3>0% Metal Residue</h3>
              <p>Electromagnetic extraction ensures pure, safe feed.</p>
            </div>
            <div className="lab-card">
              <div className="lab-icon"><Leaf size={32}/></div>
              <h3>100% Organic</h3>
              <p>Sourced directly from our zero-chemical plantations.</p>
            </div>
          </div>
        </section>

        {/* --- 3. PREMIUM PRODUCT CATALOG --- */}
        <section className="product-catalog-section">
          <div className="container">
            <div className="section-head-center">
              <span className="sub-tag">Our Formulations</span>
              <h2>Nutritional Excellence</h2>
              <p>Precision-formulated feed for maximum growth and health.</p>
            </div>

            <div className="catalog-grid">
              {/* Product 1 */}
              <div className="catalog-card">
                <div className="card-image-box">
                   <img src="/images/logos/feed-bag.png" alt="Catfish Feed" />
                </div>
                <div className="card-details">
                  <span className="category-badge">Aquaculture</span>
                  <h3>Catfish Premium Start</h3>
                  <ul className="specs-list-simple">
                     <li>Protein: <strong>52%</strong></li>
                     <li>Floatability: <strong>98%</strong></li>
                  </ul>
                </div>
              </div>

              {/* Product 2 */}
              <div className="catalog-card">
                <div className="card-image-box">
                   <img src="/images/logos/feed-bag.png" alt="Grower Feed" />
                </div>
                <div className="card-details">
                  <span className="category-badge">Aquaculture</span>
                  <h3>Catfish Grower Feed</h3>
                  <ul className="specs-list-simple">
                     <li>Protein: <strong>45%</strong></li>
                     <li>Size: <strong>4mm</strong></li>
                  </ul>
                </div>
              </div>

              {/* Product 3 */}
              <div className="catalog-card">
                <div className="card-image-box">
                   <img src="/images/logos/feed-bag.png" alt="Poultry Feed" />
                </div>
                <div className="card-details">
                  <span className="category-badge">Poultry</span>
                  <h3>EG Layer Mash</h3>
                  <ul className="specs-list-simple">
                     <li>Yield: <strong>High</strong></li>
                     <li>Calcium: <strong>Enriched</strong></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. MACHINE BLUEPRINT --- */}
        <section className="blueprint-section">
          <div className="container blueprint-flex">
            <div className="blueprint-info">
              <span className="tech-id">MODEL: EG500F</span>
              <h2>Engineering Marvel:<br/>The Fish Drier</h2>
              <p>Designed and fabricated by EG Group. This machine creates hygienic, grit-free dried fish with zero charring.</p>
              
              <ul className="tech-specs">
                <li><strong>Capacity:</strong> 500kg / cycle</li>
                <li><strong>Speed:</strong> 4 Hours Rapid Dry</li>
                <li><strong>Safety:</strong> Thermal Insulation</li>
                <li><strong>Emission:</strong> 1% Smoke Filter</li>
              </ul>
            </div>
            <div className="blueprint-visual">
              <div className="blueprint-paper">
                <img src="/images/logos/drier.jpg" alt="Machine" className="machine-img"/>
                <div className="grid-lines"></div>
                {/* Hotspots */}
                <div className="hotspot h1"><span>Insulation</span></div>
                <div className="hotspot h2"><span>Filter</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 5. GLOBAL PARTNERSHIP --- */}
        <section className="global-connect">
          <div className="container">
            <div className="connect-card">
              <div className="connect-content">
                <h3><Anchor className="icon-gold"/> Thailand Partnership</h3>
                <p>
                  Executing MOUs with the <strong>Royal Kingdom of Thailand</strong>. 
                  Training staff at <strong>Kasetsart University</strong>.
                </p>
                <div className="tech-tags">
                  <span>Shrimp Culture</span>
                  <span>Food Processing</span>
                  <span>Textiles</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default AgricHome;
