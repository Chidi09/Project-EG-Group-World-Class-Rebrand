import React, { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf,
  Droplets,
  Zap,
  Cpu,
  Sprout,
  Ruler,
  Home,
  Truck,
  Mic,
  Globe,
  PenTool,
  CheckCircle,
  Building
} from 'lucide-react';
import './Services.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const Services = () => {
  // Preserve smooth scroll to hash anchors (/services#agriculture, etc.)
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <ReactLenis root>
      <div className="services-master-wrapper">
        {/* --- 1. TYPOGRAPHIC HERO --- */}
        <section className="svc-hero">
          <div className="container">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="mono-badge">Our Capabilities</span>
              <h1 className="svc-title">
                The Engine Room <br />
                of <span className="text-gold">Development.</span>
              </h1>
              <p className="svc-lead">
                We do not dabble. We dominate. <br />
                EG Group operates three integrated engines of growth, creating a self-sustaining ecosystem
                that bridges the gap between raw potential and refined excellence.
              </p>
            </motion.div>
          </div>
          <div className="hero-divider" />
        </section>

        {/* --- 2. AGRICULTURE (THE GIANT) --- */}
        <section id="agriculture" className="sector-block">
          <div className="container sector-layout">
            {/* Sticky Sidebar */}
            <div className="sector-sidebar">
              <span className="sector-num">01</span>
              <h2>Agriculture</h2>
              <div className="sector-icon">
                <Leaf size={40} />
              </div>
              <p className="sidebar-desc">The bedrock of our existence. From soil to silo.</p>
            </div>

            {/* Deep Content */}
            <div className="sector-content">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  Precision Agronomy & <br />
                  Industrial Processing.
                </h3>
                <p className="body-text">
                  EG Agriculture is not just a farm; it is a bio-industrial complex. We own the entire
                  value chain, mitigating the risks of supply shortage and quality fluctuation. Our
                  4,000-hectare operations serve as the raw material base for our downstream processing.
                </p>

                {/* Technical Grid */}
                <div className="tech-grid">
                  <div className="tech-item">
                    <Sprout className="t-icon" />
                    <h4>Plantation Management</h4>
                    <p>
                      We manage vast estates of Oil Palm, Rubber, and Cassava. Our agronomy team employs
                      precision soil mapping to maximize yield per hectare, ensuring a steady supply of
                      Crude Palm Oil (CPO) for industrial use.
                    </p>
                  </div>
                  <div className="tech-item">
                    <Droplets className="t-icon" />
                    <h4>Advanced Aquaculture</h4>
                    <p>
                      Our fish farming division is a closed-loop system. We breed our own fingerlings,
                      formulate our own feed, and process the final catch. This ensures 100% organic
                      traceability from hatch to harvest.
                    </p>
                  </div>
                  <div className="tech-item">
                    <Zap className="t-icon" />
                    <h4>Feed Milling Technology</h4>
                    <p>
                      We operate 0% Metal Residue mills. Using electromagnetic extraction, we produce
                      floating fish feed (98% floatability) and nutrient-dense poultry mash that beats
                      market standards for conversion ratios.
                    </p>
                  </div>
                  <div className="tech-item">
                    <Cpu className="t-icon" />
                    <h4>Fabrication & Engineering</h4>
                    <p>
                      We don&apos;t import what we can build. The EG500F Fish Drier was designed and
                      fabricated in-house, capable of drying 500kg of fish in 4 hours with zero charring.
                    </p>
                  </div>
                </div>

                {/* Data Strip */}
                <div className="data-strip">
                  <div className="data-point">
                    <span className="dp-val">4,000</span>
                    <span className="dp-label">Hectares Cultivated</span>
                  </div>
                  <div className="data-point">
                    <span className="dp-val">25T</span>
                    <span className="dp-label">Daily Feed Output</span>
                  </div>
                  <div className="data-point">
                    <span className="dp-val">100%</span>
                    <span className="dp-label">Organic Input</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className="marquee-divider">
          <div className="marquee-content">
            SUSTAINABILITY • INTEGRITY • PRECISION • GROWTH • SUSTAINABILITY • INTEGRITY • PRECISION •
            GROWTH
          </div>
        </div>

        {/* --- 3. CONSTRUCTION (THE BACKBONE) --- */}
        <section id="construction" className="sector-block bg-dark">
          <div className="container sector-layout reverse">
            <div className="sector-sidebar light-text">
              <span className="sector-num">02</span>
              <h2>Construction</h2>
              <div className="sector-icon">
                <Building size={40} />
              </div>
              <p className="sidebar-desc">Building the infrastructure of tomorrow.</p>
            </div>

            <div className="sector-content light-text">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  Civil Engineering & <br />
                  Structural Integrity.
                </h3>
                <p className="body-text">
                  EG Construction bridges the gap between architectural vision and engineering reality.
                  We specialize in the &quot;Fast Track Home Delivery System,&quot; a proprietary project
                  management methodology that allows us to deliver mass housing projects in record time
                  without compromising structural fidelity.
                </p>

                <div className="list-layout">
                  <div className="list-row">
                    <div className="lr-head">
                      <Ruler size={24} /> <span>Civil Works</span>
                    </div>
                    <p>
                      We execute complex earthworks, road construction, and land reclamation. Our fleet
                      of heavy-duty earthmovers ensures we control the pace of site preparation,
                      independent of third-party rentals.
                    </p>
                  </div>
                  <div className="list-row">
                    <div className="lr-head">
                      <Home size={24} /> <span>Residential Development</span>
                    </div>
                    <p>
                      From the Evangel Housing Estate to low-cost government housing schemes, we build
                      communities. Our designs prioritize ventilation, spatial efficiency, and long-term
                      durability.
                    </p>
                  </div>
                  <div className="list-row">
                    <div className="lr-head">
                      <Truck size={24} /> <span>Quarry &amp; Haulage</span>
                    </div>
                    <p>
                      We operate our own supply chain for granite, sandcrete, and sharp sand. This
                      vertical integration allows us to guarantee the quality of every block laid and
                      every road paved.
                    </p>
                  </div>
                  <div className="list-row">
                    <div className="lr-head">
                      <PenTool size={24} /> <span>Consultancy (Anchor Services)</span>
                    </div>
                    <p>
                      Our legacy arm, Anchor Services, provides feasibility studies, CAD layouts, and
                      budget forecasting for state governments and private investors.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 4. MEDIA (THE VOICE) --- */}
        <section id="media" className="sector-block">
          <div className="container sector-layout">
            <div className="sector-sidebar">
              <span className="sector-num">03</span>
              <h2>Media &amp; Training</h2>
              <div className="sector-icon">
                <Mic size={40} />
              </div>
              <p className="sidebar-desc">Narratives that move markets.</p>
            </div>

            <div className="sector-content">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
              >
                <h3>
                  Knowledge Transfer &amp; <br />
                  Strategic Communication.
                </h3>
                <p className="body-text">
                  We believe that data without a story is just noise. EG Media serves as the
                  intellectual wing of the group, tasked with documenting the agricultural revolution and
                  training the next generation of agri-preneurs.
                </p>

                <div className="dual-grid">
                  <div className="dual-card">
                    <Globe size={32} className="dual-icon" />
                    <h4>&quot;The Agriculturist&quot;</h4>
                    <p>
                      We are the publishers of this internationally acclaimed magazine. It serves as a
                      bridge between research institutes and local farmers, translating complex agronomy
                      into actionable advice.
                    </p>
                  </div>
                  <div className="dual-card">
                    <CheckCircle size={32} className="dual-icon" />
                    <h4>Capacity Building</h4>
                    <p>
                      Through our partnership with <strong>Kasetsart University</strong> in Thailand, we
                      facilitate knowledge transfer programs. We train local co-operatives in shrimp
                      culture, food processing, and textile management.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Services;
