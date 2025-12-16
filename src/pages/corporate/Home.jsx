import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Leaf, ShoppingBag, TrendingUp } from 'lucide-react';
import './Home.css';

const Home = () => {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  return (
    <ReactLenis root>
      <div className="home-wrapper">
        
        {/* --- 1. THE \"ALIVE\" HERO --- */}
        <section ref={targetRef} className="agric-hero-section">
          {/* Ken Burns Effect Background */}
          <div className="ken-burns-container">
            <motion.div style={{ y }} className="hero-bg-img" />
            <div className="hero-overlay"></div>
            
            {/* Floating Particles Effect (CSS Animation) */}
            <div className="particles-container">
              <div className="particle p1"></div>
              <div className="particle p2"></div>
              <div className="particle p3"></div>
            </div>
          </div>

          <div className="container hero-content-agric">
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1 }}
            >
              <div className="eco-badge">
                <Leaf size={14} className="spin-leaf"/> <span>Proudly Nigerian Origin</span>
              </div>
              
              <h1 className="hero-title-large">
                Cultivating <br/>
                <span className="text-highlight">Abundance.</span>
              </h1>
              
              <p className="hero-desc-agric">
                EG Group is Nigeria’s premier agricultural conglomerate. 
                We own the entire value chain—from our <strong>4,000-hectare plantations</strong> to your family's table.
              </p>
              
              <div className="hero-btn-group">
                <Link to="/agriculture" className="btn-primary-green">
                  Explore Our Farms
                </Link>
                <Link to="/contact" className="btn-outline-white">
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 2. THE \"GOLDEN HARVEST\" PROMO (Rice Offer) --- */}
        <section className="promo-section">
          <div className="container">
            <div className="promo-card">
              <div className="promo-text">
                <div className="deal-tag">LIMITED OFFER</div>
                <h2>EG Premium Tomato Rice</h2>
                <p className="promo-lead">
                  We are moving <strong>100,000 Bags</strong> in the next 21 days. 
                  Secure your stock of Nigeria's finest, stone-free, premium rice.
                </p>
                
                <ul className="promo-features">
                  <li><ShoppingBag size={18}/> <strong>50kg Bags:</strong> ₦60,000 (Delivery) / ₦56,000 (Pickup)</li>
                  <li><TrendingUp size={18}/> <strong>Bulk Order:</strong> Minimum 750 Bags (1 Truck)</li>
                  <li><Leaf size={18}/> <strong>Varieties:</strong> 50kg, 25kg, 10kg Branding Available</li>
                </ul>

                <a href="https://wa.me/2348039227191" className="btn-whatsapp">
                  Order on WhatsApp (0803 922 7191) <ArrowRight size={18} />
                </a>
              </div>
              
              {/* Product Visual */}
              <div className="promo-visual">
                <img src="/images/logos/promo image.png" alt="EG Rice Bags" className="rice-bag-img" />
                <div className="discount-circle">
                  <span>Direct</span>
                  <strong>Factory</strong>
                  <span>Price</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 3. CORE PILLARS (Agric First) --- */}
        <section className="pillars-section">
          <div className="container">
            <div className="section-header-center">
              <h2>Our Expertise</h2>
              <p>Rooted in Agriculture. Expanded by Construction.</p>
            </div>

            <div className="pillars-grid">
              {/* Card 1: AGRICULTURE (Featured) */}
              <div className="pillar-card main-pillar">
                <div className="pillar-img" style={{backgroundImage: "url('/images/logos/rice farm.jpg')"}}></div>
                <div className="pillar-content">
                  <h3>EG Agriculture</h3>
                  <p>Poultry, Fishery, Palm Oil, and Rice Production on a massive scale.</p>
                  <Link to="/agriculture" className="link-green">View Products &rarr;</Link>
                </div>
              </div>

              {/* Card 2: CONSTRUCTION */}
              <div className="pillar-card sub-pillar">
                <div className="pillar-img" style={{backgroundImage: "url('/images/logos/green eco friendly building architecture.jpg')"}}></div>
                <div className="pillar-content">
                  <h3>EG Construction</h3>
                  <p>Eco-friendly housing and infrastructure development.</p>
                  <Link to="/construction" className="link-green">View Projects &rarr;</Link>
                </div>
              </div>

              {/* Card 3: MEDIA */}
              <div className="pillar-card sub-pillar">
                <div
                  className="pillar-img"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80')",
                  }}
                ></div>
                <div className="pillar-content">
                  <h3>EG Media</h3>
                  <p>The voice of modern agriculture in Nigeria.</p>
                  <Link to="/media" className="link-green">Read News &rarr;</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. SCALE STATS --- */}
        <section className="green-stats" ref={statsRef}>
          <div className="container stats-flex">
            <div className="stat-box-green">
              <span className="stat-num">{statsInView && <CountUp end={4000} duration={2.5} />}Ha</span>
              <span className="stat-txt">Cultivated Land</span>
            </div>
            <div className="stat-box-green">
              <span className="stat-num">{statsInView && <CountUp end={100} duration={2.5} />}k</span>
              <span className="stat-txt">Bags Capacity</span>
            </div>
            <div className="stat-box-green">
              <span className="stat-num">{statsInView && <CountUp end={20} duration={2.5} />}</span>
              <span className="stat-txt">Years Farming</span>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Home;

