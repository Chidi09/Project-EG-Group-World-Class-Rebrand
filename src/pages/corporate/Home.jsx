import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import './Home.css';

// Client Logos (Ensure these paths exist or use external URLs)
const clientLogos = [
  { name: "ExxonMobil", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Exxon_Mobil_Logo.svg/1200px-Exxon_Mobil_Logo.svg.png" },
  { name: "First Bank", url: "https://upload.wikimedia.org/wikipedia/en/thumb/6/62/First_Bank_of_Nigeria_logo.svg/1200px-First_Bank_of_Nigeria_logo.svg.png" },
  { name: "Delta State", url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Delta_State_Nigeria_Flag.png" },
  { name: "Imo State", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Flag_of_Imo_State.svg/2560px-Flag_of_Imo_State.svg.png" },
  { name: "FGN", url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Coat_of_arms_of_Nigeria.svg/1200px-Coat_of_arms_of_Nigeria.svg.png" }
];

const Home = () => {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.5 });

  return (
    <div className="home-wrapper">
      
      {/* --- 1. CINEMATIC HERO --- */}
      <section className="hero-section">
        <div className="hero-bg-overlay"></div>
        {/* Ideally, replace this image with a high-quality video loop of a construction site or farm drone shot */}
        <div className="hero-bg-image" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop')"}}></div>
        
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 100 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="hero-subtitle">Building Tomorrow, Today</span>
            <h1 className="hero-title">Pioneering Excellence in <br/> <span className="text-gradient">Agriculture</span> & <span className="text-gradient">Construction</span>.</h1>
            <p className="hero-desc">EG Group is a diversified conglomerate transforming visions into reality through world-class solutions.</p>
            
            <div className="hero-actions">
              <Link to="/about" className="btn-elite btn-white">Discover Our Story</Link>
              <Link to="/contact" className="btn-elite btn-glass">Get In Touch</Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. SECTORS (Split Layout) --- */}
      <section className="sectors-section">
        <div className="container header-container">
          <motion.h2 
             initial={{ opacity: 0 }} 
             whileInView={{ opacity: 1 }} 
             viewport={{ once: true }}
             className="section-title"
          >
            Two Pillars of Growth
          </motion.h2>
        </div>

        <div className="sectors-grid">
          {/* Agric Panel */}
          <motion.div className="sector-panel agric-panel" whileHover={{ scale: 0.98 }} transition={{ duration: 0.4 }}>
            <div className="panel-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1000&q=80')"}}></div>
            <div className="panel-content">
              <h3>EG Agriculture</h3>
              <p>Sustainable farming and agritech solutions for modern food production.</p>
              <Link to="/agriculture" className="link-arrow">Explore Agriculture <ArrowUpRight /></Link>
            </div>
          </motion.div>

          {/* Construction Panel */}
          <motion.div className="sector-panel const-panel" whileHover={{ scale: 0.98 }} transition={{ duration: 0.4 }}>
            <div className="panel-bg" style={{backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80')"}}></div>
            <div className="panel-content">
              <h3>EG Construction</h3>
              <p>Premium infrastructure and commercial projects built to the highest standards.</p>
              <Link to="/construction" className="link-arrow">Explore Construction <ArrowUpRight /></Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. ELEGANT STATS --- */}
      <section className="stats-section" ref={statsRef}>
        <div className="container stats-grid">
          <div className="stat-item">
            <span className="stat-number">
              {statsInView && <CountUp end={15} duration={2.5} />}+
            </span>
            <span className="stat-label">Years of Excellence</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {statsInView && <CountUp end={200} duration={2.5} />}+
            </span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {statsInView && <CountUp end={500} duration={2.5} />}+
            </span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {statsInView && <CountUp end={10} duration={2.5} />}+
            </span>
            <span className="stat-label">Countries Served</span>
          </div>
        </div>
      </section>

      {/* --- 4. TRUSTED PARTNERS (Monochrome Marquee) --- */}
      <section className="partners-section">
        <p className="partners-label">Trusted Partners & Clients</p>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {[...clientLogos, ...clientLogos, ...clientLogos].map((client, i) => (
              <img key={i} src={client.url} alt={client.name} className="partner-logo" />
            ))}
          </div>
        </div>
      </section>

      {/* --- 5. CALL TO ACTION --- */}
      <section className="cta-elite">
        <div className="container">
          <h2>Ready to Build Something Extraordinary?</h2>
          <p>Partner with EG Group and let's create lasting impact together.</p>
          <Link to="/contact" className="btn-elite btn-black">Start Your Project <ArrowRight size={18} /></Link>
        </div>
      </section>

    </div>
  );
};

export default Home;

