import React, { useRef, useState } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Droplets, Zap, Anchor, MapPin, Search, ArrowRight, X } from 'lucide-react';
import './AgricHome.css';

const products = [
  { id: 1, name: "Catfish Premium Start", category: "Aquaculture", protein: "52%", image: "/images/feed-bag.png" },
  { id: 2, name: "Catfish Grower Feed", category: "Aquaculture", protein: "45%", image: "/images/feed-bag.png" },
  { id: 3, name: "EG Poultry Layer Mash", category: "Poultry", protein: "18%", image: "/images/feed-bag.png" },
  { id: 4, name: "EG Poultry Starter", category: "Poultry", protein: "23%", image: "/images/feed-bag.png" }
];

const AgricHome = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  
  const [activeProd, setActiveProd] = useState(null);

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

        {/* --- 3. PRODUCT SCANNER (Interactive) --- */}
        <section className="product-scanner-section">
          <div className="container">
            <div className="section-head-tech">
              <h2>Nutritional Engineering</h2>
              <p>Select a formulation to analyze composition.</p>
            </div>

            <div className="scanner-grid">
              {products.map((prod) => (
                <div key={prod.id} className="scan-card" onClick={() => setActiveProd(prod)}>
                  <div className="scan-visual">
                    <img src={prod.image} alt={prod.name} />
                    <div className="scan-laser"></div>
                  </div>
                  <div className="scan-info">
                    <span className="cat-tag">{prod.category}</span>
                    <h4>{prod.name}</h4>
                    <button className="scan-btn">Analyze Specs <Search size={14}/></button>
                  </div>
                </div>
              ))}
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
                <img src="/images/fish-drier.jpg" alt="Machine" className="machine-img"/>
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
