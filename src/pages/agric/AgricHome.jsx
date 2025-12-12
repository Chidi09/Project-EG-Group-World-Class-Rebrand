import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Droplets, Zap, Anchor, MapPin, X, Info } from 'lucide-react';
import './AgricHome.css';

// --- DATA: Feeds & Specs ---
const products = [
  {
    id: 1,
    category: "Aquaculture",
    name: "Catfish Premium Start",
    image: "/images/logos/catfish.jpg",
    specs: { size: "0.5mm - 1.0mm", protein: "52%", fat: "8%", floatability: "95%" }
  },
  {
    id: 2,
    category: "Aquaculture",
    name: "Catfish Grower Feed",
    image: "/images/logos/catfish.jpg",
    specs: { size: "4.0mm - 6.0mm", protein: "45%", fat: "6%", floatability: "98%" }
  },
  {
    id: 3,
    category: "Poultry",
    name: "EG Poultry Layer Mash",
    image: "/images/logos/poultry feed.jpg",
    specs: { type: "Layers", protein: "18%", calcium: "High", energy: "2800 Kcal" }
  },
  {
    id: 4,
    category: "Poultry",
    name: "EG Poultry Starter",
    image: "/images/logos/poultry feed.jpg",
    specs: { type: "Broiler/Chick", protein: "23%", calcium: "Medium", energy: "3000 Kcal" }
  }
];

const AgricHome = () => {
  const [activeProduct, setActiveProduct] = useState(null);

  return (
    <div className="agric-wrapper">
      
      {/* --- 1. HERO: PRECISION FARMING --- */}
      <section className="agric-hero">
        <div className="agric-overlay">
          <div className="hero-badge">EG AGRICULTURE</div>
          <h1>Cultivating the Future.<br/>Engineered for Yield.</h1>
          <p>From our 4,000-hectare plantations to our 0% metal residue feed mills. We set the standard.</p>
          <div className="stats-row">
            <div className="stat">
              <span className="num">20k</span>
              <span className="label">Poultry Capacity</span>
            </div>
            <div className="stat">
              <span className="num">14k</span>
              <span className="label">Hectares Managed</span>
            </div>
            <div className="stat">
              <span className="num">25T</span>
              <span className="label">Daily Feed Output</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. THE SCIENCE (WHY US) --- */}
      <section className="science-strip">
        <div className="container strip-grid">
          <div className="science-item">
            <Droplets className="science-icon" />
            <div>
              <h4>97.5% Floatability</h4>
              <p>Our fish feed stays on surface longer.</p>
            </div>
          </div>
          <div className="science-item">
            <Zap className="science-icon" />
            <div>
              <h4>0% Metal Residue</h4>
              <p>Electromagnetic extraction technology.</p>
            </div>
          </div>
          <div className="science-item">
            <Leaf className="science-icon" />
            <div>
              <h4>100% Organic</h4>
              <p>Sourced from our own plantations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. PRODUCT LAB (Interactive) --- */}
      <section className="product-lab">
        <div className="container">
          <div className="section-header">
            <h2>Nutritional Engineering</h2>
            <p>Select a product to analyze its composition.</p>
          </div>

          <div className="product-grid">
            {products.map((prod) => (
              <div key={prod.id} className="product-card" onClick={() => setActiveProduct(prod)}>
                <div className="prod-img" style={{ backgroundImage: `url(${prod.image})` }}>
                  <div className="scan-line"></div>
                </div>
                <div className="prod-info">
                  <span className="category">{prod.category}</span>
                  <h3>{prod.name}</h3>
                  <button className="analyze-btn">Analyze Specs</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. MACHINERY SHOWCASE (Hotspots) --- */}
      <section className="machinery-section">
        <div className="container">
          <div className="machine-layout">
            <div className="machine-text">
              <h4>Engineering Marvel</h4>
              <h2>EG500F Fish Drier</h2>
              <p>Designed and fabricated by EG Group. This machine creates hygienic, grit-free dried fish with zero charring.</p>
              <ul className="specs-list">
                <li><strong>Capacity:</strong> 500kg / cycle</li>
                <li><strong>Speed:</strong> Dries in 4 hours</li>
                <li><strong>Energy:</strong> Charcoal or Sawdust</li>
                <li><strong>Safety:</strong> Insulated Body</li>
              </ul>
            </div>
            <div className="machine-visual">
              <div className="machine-blueprint">
                <img src="/images/logos/drier.jpg" alt="EG500F Fish Drier Machine" />
                
                <div className="hotspot" style={{ top: '30%', left: '40%' }}>
                  <div className="dot"></div>
                  <div className="pulse"></div>
                  <div className="tooltip">Thermal Insulation</div>
                </div>

                <div className="hotspot" style={{ top: '60%', left: '70%' }}>
                  <div className="dot"></div>
                  <div className="pulse"></div>
                  <div className="tooltip">Smoke Filter (1% Emission)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. GLOBAL IMPACT MAP --- */}
      <section className="impact-section">
        <div className="container">
          <h2>Global Knowledge Transfer</h2>
          <div className="impact-card">
            <div className="impact-content">
              <h3><Anchor className="icon-inline"/> Thailand Partnership</h3>
              <div style={{ marginBottom: '20px' }}>
                <img src="/images/logos/kaeserat university.jpg" alt="Kasetsart University Partnership" style={{ width: '100%', maxWidth: '600px', borderRadius: '8px', marginBottom: '15px' }} />
              </div>
              <p>
                We execute MOUs with the <strong>Royal Kingdom of Thailand</strong>. 
                Our staff and local co-operatives train at <strong>Kasetsart University</strong> and 
                <strong>Prince of Chumphon Fisheries College</strong>.
              </p>
              <div className="tags">
                <span>Shrimp Culture</span>
                <span>Food Processing</span>
                <span>Textiles</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRODUCT SPECS MODAL --- */}
      {activeProduct && (
        <div className="specs-modal-backdrop" onClick={() => setActiveProduct(null)}>
          <div className="specs-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-specs" onClick={() => setActiveProduct(null)}><X /></button>
            <div className="specs-header">
              <h3>{activeProduct.name}</h3>
              <span>{activeProduct.category}</span>
            </div>
            
            <div className="specs-body">
              {Object.entries(activeProduct.specs).map(([key, value]) => (
                <div key={key} className="spec-row">
                  <span className="spec-label">{key}</span>
                  <div className="spec-bar-container">
                    <div className="spec-bar-fill" style={{ width: value.includes('%') ? value : '100%' }}></div>
                  </div>
                  <span className="spec-value">{value}</span>
                </div>
              ))}
            </div>
            
            <Link to="/contact" className="quote-btn" style={{textAlign:'center', display:'block', textDecoration:'none'}}>
              Request Bulk Quote
            </Link>
          </div>
        </div>
      )}

    </div>
  );
};

export default AgricHome;

