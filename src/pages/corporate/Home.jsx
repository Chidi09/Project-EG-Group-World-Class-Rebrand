import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, AnimatePresence } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, Leaf, Hammer, Globe, TrendingUp, Users, ShieldCheck } from 'lucide-react';
import './Home.css';

// --- HERO SLIDES DATA ---
const slides = [
  {
    id: 1,
    theme: 'agric',
    image: '/images/hero-agric.jpg', // Ensure this exists
    badge: 'Food Security',
    icon: <Leaf size={14} className="spin-icon"/>,
    title: <>Cultivating <br/><span className="text-highlight">Abundance.</span></>,
    desc: "We are the architects of Nigeria's food future. Through precision agronomy and mechanized processing, we transform 4,000 hectares of raw potential into sustainable nourishment for millions.",
    ctaLink: '/services',
    ctaText: 'Explore Our Farms'
  },
  {
    id: 2,
    theme: 'const',
    image: '/images/const-hero-skyline.jpg', // Ensure this exists
    badge: 'Infrastructure',
    icon: <Hammer size={14} className="spin-icon"/>,
    title: <>Building <br/><span className="text-highlight gold">Legacies.</span></>,
    desc: "From complex civil engineering to master-planned communities. We blend structural integrity with eco-conscious design to build the skylines of tomorrow.",
    ctaLink: '/services',
    ctaText: 'View Projects'
  },
  {
    id: 3,
    theme: 'corp',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80', // Corporate Skyline
    badge: 'Global Vision',
    icon: <Globe size={14} className="spin-icon"/>,
    title: <>Redefining <br/><span className="text-highlight blue">Standards.</span></>,
    desc: "A diversified conglomerate moving from words to action. We leverage global partnerships and local expertise to drive economic growth and industrial excellence.",
    ctaLink: '/about',
    ctaText: 'Our Story'
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

                {/* Buttons */}
                <div className="hero-btn-group">
                  <Link to={slides[current].ctaLink} className="btn-primary-dynamic">
                    {slides[current].ctaText}
                  </Link>
                  <Link to="/contact" className="btn-outline-dynamic">
                    Partner With Us
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
                />
              ))}
            </div>
          </div>
        </section>

        {/* --- 2. THE "GOLDEN HARVEST" PROMO (Rice Offer) --- */}
        <section className="promo-section">
          <div className="container">
            <div className="promo-card">
              <div className="promo-text">
                <div className="deal-tag">MARKET ALERT</div>
                <h2>EG Premium Tomato Rice</h2>
                <p className="promo-lead">
                  <strong>Food security is national security.</strong> We are releasing 100,000 bags of premium, stone-free rice to the market. 
                  This is part of our commitment to stabilizing local food prices while maintaining export-grade quality.
                </p>
                
                <ul className="promo-features">
                  <li><strong>Wholesale:</strong> 50kg Bags @ ₦60,000 (Nationwide Delivery)</li>
                  <li><strong>Bulk Logic:</strong> Minimum Order Quantity (MOQ) of 750 Bags (1 Truck)</li>
                  <li><strong>Customization:</strong> White-label branding available for corporate partners.</li>
                </ul>

                <a href="https://wa.me/2348039227191" className="btn-whatsapp">
                  Secure Allocation (WhatsApp) <ArrowRight size={18} />
                </a>
              </div>
              <div className="promo-visual">
                <img src="/images/Gemini_Generated_Image_sqco47sqco47sqco.jpg" alt="EG Rice Bags" className="rice-bag-img" />
                <div className="discount-circle">
                  <span>Factory</span>
                  <strong>Direct</strong>
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
