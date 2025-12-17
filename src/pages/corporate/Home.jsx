import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Leaf, Hammer, Globe, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import './Home.css';

// --- HERO SLIDES DATA (FIXED LINKS) ---
const slides = [
  {
    id: 1,
    theme: 'agric',
    image: '/images/hero-agric.jpg',
    badge: 'Food Security',
    icon: <Leaf size={14} className="spin-icon"/>,
    title: <>Cultivating <br/><span className="text-highlight">Abundance.</span></>,
    desc: "We are the architects of Nigeria's food future. Through precision agronomy and mechanized processing, we transform 4,000 hectares of raw potential into sustainable nourishment.",
    // ACTION: Links to Services (Agric Section)
    primaryLink: '/services#agriculture',
    primaryText: 'Explore Our Farms',
    // ACTION: Links to Contact for Partnership
    secondaryLink: '/contact',
    secondaryText: 'Partner With Us'
  },
  {
    id: 2,
    theme: 'const',
    image: '/images/hero-const.jpg',
    badge: 'Infrastructure',
    icon: <Hammer size={14} className="spin-icon"/>,
    title: <>Building <br/><span className="text-highlight gold">Legacies.</span></>,
    desc: "From complex civil engineering to master-planned communities. We blend structural integrity with eco-conscious design.",
    // ACTION: Links to Portfolio
    primaryLink: '/services#construction',
    primaryText: 'View Projects',
    secondaryLink: '/contact',
    secondaryText: 'Start a Project'
  },
  {
    id: 3,
    theme: 'corp',
    image: '/images/hero-corp.jpg',
    badge: 'Global Vision',
    icon: <Globe size={14} className="spin-icon"/>,
    title: <>Redefining <br/><span className="text-highlight blue">Standards.</span></>,
    desc: "A diversified conglomerate moving from words to action. We leverage global partnerships and local expertise to drive economic growth.",
    // ACTION: Links to About History
    primaryLink: '/about',
    primaryText: 'Our Story',
    secondaryLink: '/team',
    secondaryText: 'Meet Leadership'
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  // Auto-Slide Logic (5 Seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ReactLenis root>
      <div className="home-wrapper">
        
        {/* --- 1. DYNAMIC HERO SECTION --- */}
        <section className="hero-section-dynamic">
          <AnimatePresence mode='wait'>
            <motion.div 
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="hero-bg-layer"
              style={{ backgroundImage: `url('${slides[current].image}')` }}
            >
              <div className={`hero-overlay ${slides[current].theme}`}></div>
            </motion.div>
          </AnimatePresence>

          <div className="container hero-content-layer">
            <AnimatePresence mode='wait'>
              <motion.div 
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-text-block"
              >
                {/* Dynamic Badge */}
                <div className="hero-badge">
                  {slides[current].icon} <span>{slides[current].badge}</span>
                </div>

                {/* Dynamic Title */}
                <h1 className="hero-title-main">
                  {slides[current].title}
                </h1>

                {/* Dynamic Description */}
                <p className="hero-desc-main">
                  {slides[current].desc}
                </p>

                {/* DYNAMIC BUTTONS (FIXED) */}
                <div className="hero-btn-group">
                  <Link to={slides[current].primaryLink} className="btn-primary-dynamic">
                    {slides[current].primaryText} <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </Link>
                  <Link to={slides[current].secondaryLink} className="btn-outline-dynamic">
                    {slides[current].secondaryText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Slider Dots */}
            <div className="slider-dots">
              {slides.map((_, idx) => (
                <button 
                  key={idx} 
                  className={`dot ${current === idx ? 'active' : ''}`}
                  onClick={() => setCurrent(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- 2. MARKET ALERT PROMO --- */}
        <section className="promo-section">
          <div className="container">
            <div className="promo-card">
              
              {/* LEFT: The Data & Offer */}
              <div className="promo-text">
                <div className="deal-header">
                  <span className="deal-tag">LIMITED STOCK</span>
                  <span className="deal-timer">Offer Ends Soon</span>
                </div>
                
                <h2>EG Premium Tomato Rice</h2>
                <p className="promo-lead">
                  <strong>100,000 Bags Released.</strong> Secure your stock of Nigeria's finest, stone-free rice. 
                  Factory direct to your warehouse.
                </p>
                
                <div className="pricing-grid">
                  <div className="price-item">
                    <span className="label">Wholesale (50kg)</span>
                    <span className="price">₦60,000</span>
                    <span className="sub">Nationwide Delivery</span>
                  </div>
                  <div className="price-item">
                    <span className="label">Pickup Price</span>
                    <span className="price">₦56,000</span>
                    <span className="sub">Ex-Factory</span>
                  </div>
                </div>
                
                <ul className="promo-specs">
                  <li>MOQ: <strong>750 Bags (1 Truck)</strong></li>
                  <li>Branding: <strong>White-label Available</strong></li>
                </ul>

                <a
                  href="https://wa.me/2348039227191"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  Secure Allocation via WhatsApp <ArrowRight size={18} />
                </a>
              </div>
              
              {/* RIGHT: The Product Visual (The Rice Image) */}
              <div className="promo-visual">
                <div className="spotlight-glow"></div>
                {/* Ensure this image is JUST the bags, cropped nicely */}
                <img src="/images/promo-rice-bags.jpg" alt="EG Rice Bags" className="rice-product-img" />
                
                <div className="floating-badge">
                  <span className="badge-title">Direct</span>
                  <span className="badge-val">Factory</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* --- 3. GLOBAL IMPACT (New "Intellectual" Section) --- */}
        <section className="impact-section-new">
          <div className="container">
            <div className="section-head-center">
              <span className="sub-tag">Our Contribution</span>
              <h2>Engineering A Better Future</h2>
              <p>We don't just operate businesses; we build ecosystems. Our integrated approach ensures that every project contributes to the triple bottom line: People, Planet, and Profit.</p>
            </div>

            <div className="impact-grid">
              <div className="impact-card">
                <TrendingUp size={40} className="impact-icon green"/>
                <h3>Economic Resilience</h3>
                <p>By localizing production chains—from palm oil processing to feed milling—we reduce Nigeria's reliance on imports, strengthening the Naira and boosting local GDP.</p>
              </div>
              <div className="impact-card">
                <Leaf size={40} className="impact-icon gold"/>
                <h3>Sustainable Nature</h3>
                <p>Our "Zero-Waste" agricultural policy ensures that by-products from our farms power our mills. We practice regenerative farming to preserve soil health for the next generation.</p>
              </div>
              <div className="impact-card">
                <Users size={40} className="impact-icon blue"/>
                <h3>Social Empowerment</h3>
                <p>With over 6,500 employees and a network of 200+ rural out-growers, we are one of the largest private employers, providing skills transfer from our partners in Thailand and the UK.</p>
              </div>
              <div className="impact-card">
                <ShieldCheck size={40} className="impact-icon dark"/>
                <h3>Corporate Integrity</h3>
                <p>Recognized by the "Nigeria Fast Growth 50" awards, our governance model is built on transparency, ISO-standard safety protocols, and ethical capital deployment.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. SCALE STATS --- */}
        <section className="green-stats" ref={statsRef}>
          <div className="container stats-flex">
            <div className="stat-box-green">
              <span className="stat-num">{statsInView && <CountUp end={4000} duration={2.5} />}Ha</span>
              <span className="stat-txt">Arable Land Cultivated</span>
            </div>
            <div className="stat-box-green">
              <span className="stat-num">{statsInView && <CountUp end={15} duration={2.5} />}</span>
              <span className="stat-txt">International Partners</span>
            </div>
            <div className="stat-box-green">
              <span className="stat-num">{statsInView && <CountUp end={32} duration={2.5} />}</span>
              <span className="stat-txt">Years of Legacy</span>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Home;
