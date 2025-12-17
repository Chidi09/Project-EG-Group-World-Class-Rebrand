import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ReactLenis } from '@studio-freight/react-lenis';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import {
  ArrowRight,
  Leaf,
  Hammer,
  Globe,
  TrendingUp,
  Users,
  ShieldCheck,
  Factory,
  Truck
} from 'lucide-react';
import './Home.css';

// PARTNER LOGOS (Ensure these match your file names in public/images/logos/)
const partners = [
  '/images/logos/exxon.jpg',
  '/images/logos/firstbank.jpg',
  '/images/logos/imo.jpg',
  '/images/logos/cross-river.jpg',
  '/images/logos/delta.jpg',
  '/images/logos/fgn-coat.jpg'
];

// HERO DATA
const slides = [
  {
    id: 1,
    theme: 'agric',
    image: '/images/hero-agric.jpg',
    badge: 'Food Security',
    icon: <Leaf size={14} className="spin-icon" />,
    title: (
      <>
        Cultivating <br />
        <span className="text-highlight">Abundance.</span>
      </>
    ),
    desc: 'We are the architects of Nigeria\'s food future. Through precision agronomy and mechanized processing, we transform 4,000 hectares of raw potential into sustainable nourishment.',
    primaryLink: '/services#agriculture',
    primaryText: 'Explore Our Farms',
    secondaryLink: '/contact',
    secondaryText: 'Partner With Us'
  },
  {
    id: 2,
    theme: 'const',
    image: '/images/hero-const.jpg',
    badge: 'Infrastructure',
    icon: <Hammer size={14} className="spin-icon" />,
    title: (
      <>
        Building <br />
        <span className="text-highlight gold">Legacies.</span>
      </>
    ),
    desc: 'From complex civil engineering to master-planned communities. We blend structural integrity with eco-conscious design to build the skylines of tomorrow.',
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
    icon: <Globe size={14} className="spin-icon" />,
    title: (
      <>
        Redefining <br />
        <span className="text-highlight blue">Standards.</span>
      </>
    ),
    desc: 'A diversified conglomerate moving from words to action. We leverage global partnerships and local expertise to drive economic growth.',
    primaryLink: '/about',
    primaryText: 'Our Story',
    secondaryLink: '/team',
    secondaryText: 'Meet Leadership'
  }
];

const Home = () => {
  const [current, setCurrent] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView({
    triggerOnce: true,
    threshold: 0.5
  });

  // Parallax Logic for Project Strip
  const stripRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: stripRef,
    offset: ['start end', 'end start']
  });
  const stripY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  // Auto-Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ReactLenis root>
      <div className="home-wrapper">
        {/* --- 1. DYNAMIC HERO --- */}
        <section className="hero-section-dynamic">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="hero-bg-layer"
              style={{ backgroundImage: `url('${slides[current].image}')` }}
            >
              <div className={`hero-overlay ${slides[current].theme}`} />
            </motion.div>
          </AnimatePresence>

          <div className="container hero-content-layer">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="hero-text-block"
              >
                <div className="hero-badge">
                  {slides[current].icon} <span>{slides[current].badge}</span>
                </div>
                <h1 className="hero-title-main">{slides[current].title}</h1>
                <p className="hero-desc-main">{slides[current].desc}</p>
                <div className="hero-btn-group">
                  <Link to={slides[current].primaryLink} className="btn-primary-dynamic">
                    {slides[current].primaryText}
                    <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </Link>
                  <Link to={slides[current].secondaryLink} className="btn-outline-dynamic">
                    {slides[current].secondaryText}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
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

        {/* --- 2. MANIFESTO (NEW STORY SECTION) --- */}
        <section className="manifesto-section">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="manifesto-content"
            >
              <span className="section-label">The EG Philosophy</span>
              <h2>"We are moving from words to action."</h2>
              <p className="lead-text">
                Since 1992, EG Group has stood at the intersection of <strong>innovation</strong> and{' '}
                <strong>integrity</strong>. What began as a specialized consultancy has evolved into a
                trans-continental powerhouse. We believe that true development isn&apos;t just about
                building structures or harvesting crops—it&apos;s about building <em>capacity</em>,
                harvesting <em>potential</em>, and engineering a future where Nigeria leads the global
                conversation.
              </p>
              <div className="signature-line">
                <div className="sig-block">
                  <strong>Chidi Ulelu</strong>
                  <span>Group CEO</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- 3. MARKET ALERT PROMO (RICE) --- */}
        <section className="promo-section">
          <div className="container">
            <div className="promo-card">
              <div className="promo-text">
                <div className="deal-header">
                  <span className="deal-tag">LIMITED STOCK</span>
                  <span className="deal-timer">Offer Ends Soon</span>
                </div>
                <h2>EG Premium Tomato Rice</h2>
                <p className="promo-lead">
                  <strong>100,000 Bags Released.</strong> Secure your stock of Nigeria&apos;s finest,
                  stone-free rice. Factory direct to your warehouse. No middle-men, no delays.
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
                  <li>
                    MOQ: <strong>750 Bags</strong>
                  </li>
                  <li>
                    Branding: <strong>White-label</strong>
                  </li>
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
              <div className="promo-visual">
                <div className="spotlight-glow" />
                <img
                  src="/images/promo-rice-bags.jpg"
                  alt="EG Rice Bags"
                  className="rice-product-img"
                />
                <div className="floating-badge">
                  <span className="badge-title">Direct</span>
                  <span className="badge-val">Factory</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- 4. THE INTEGRATED VALUE CHAIN (NEW ANIMATED PROCESS) --- */}
        <section className="process-section">
          <div className="container">
            <div className="section-head-center">
              <span className="sub-tag">Operational Excellence</span>
              <h2>The Value Chain</h2>
              <p>How we control quality from the soil to the shelf.</p>
            </div>

            <div className="process-grid">
              <motion.div className="process-step" whileHover={{ y: -10 }}>
                <div className="step-icon">
                  <Leaf size={32} />
                </div>
                <h4>1. Source</h4>
                <p>
                  We cultivate raw materials on our own 4,000-hectare estates, ensuring 100% organic
                  inputs.
                </p>
              </motion.div>
              <div className="step-arrow">
                <ArrowRight size={24} />
              </div>

              <motion.div className="process-step" whileHover={{ y: -10 }}>
                <div className="step-icon">
                  <Factory size={32} />
                </div>
                <h4>2. Process</h4>
                <p>
                  Our fabricated machines (like the EG500F) process goods with zero metal residue and
                  high hygiene standards.
                </p>
              </motion.div>
              <div className="step-arrow">
                <ArrowRight size={24} />
              </div>

              <motion.div className="process-step" whileHover={{ y: -10 }}>
                <div className="step-icon">
                  <Truck size={32} />
                </div>
                <h4>3. Distribute</h4>
                <p>
                  We leverage a nationwide logistics network to deliver fresh, premium products
                  directly to consumers.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- 5. PARALLAX PROJECT STRIP (NEW VISUAL BREAK) --- */}
        <section className="parallax-strip" ref={stripRef}>
          <motion.div style={{ y: stripY }} className="strip-bg" />
          <div className="strip-overlay">
            <div className="container strip-content">
              <h2>Infrastructure for a New Era.</h2>
              <p>Evangel Housing Estate • Abuja Road Network • Imo Palm Facility</p>
              <Link to="/services#construction" className="btn-strip">
                View Construction Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* --- 6. GLOBAL IMPACT --- */}
        <section className="impact-section-new">
          <div className="container">
            <div className="section-head-center">
              <span className="sub-tag">Our Contribution</span>
              <h2>Engineering A Better Future</h2>
              <p>
                Our integrated approach ensures that every project contributes to the triple bottom
                line: People, Planet, and Profit.
              </p>
            </div>
            <div className="impact-grid">
              <div className="impact-card">
                <TrendingUp size={40} className="impact-icon green" />
                <h3>Economic Resilience</h3>
                <p>Localizing production to strengthen the Naira and boost GDP.</p>
              </div>
              <div className="impact-card">
                <Leaf size={40} className="impact-icon gold" />
                <h3>Sustainable Nature</h3>
                <p>Zero-Waste policy and regenerative farming for the next generation.</p>
              </div>
              <div className="impact-card">
                <Users size={40} className="impact-icon blue" />
                <h3>Social Empowerment</h3>
                <p>
                  One of the largest private employers with 200+ rural out-growers and 6,500+
                  staff.
                </p>
              </div>
              <div className="impact-card">
                <ShieldCheck size={40} className="impact-icon dark" />
                <h3>Corporate Integrity</h3>
                <p>
                  Governance built on transparency and ISO-standard safety protocols for every
                  project.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- 7. PARTNER MARQUEE (NEW PROOF) --- */}
        <section className="partners-marquee">
          <div className="container">
            <p className="partners-label">Trusted by Industry Giants</p>
          </div>
          <div className="marquee-track-wrapper">
            <div className="marquee-track">
              {[...partners, ...partners, ...partners].map((logo, i) => (
                <div key={i} className="partner-logo-box">
                  <img src={logo} alt="Partner" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- 8. SCALE STATS --- */}
        <section className="green-stats" ref={statsRef}>
          <div className="container stats-flex">
            <div className="stat-box-green">
              <span className="stat-num">
                {statsInView && <CountUp end={4000} duration={2.5} />}
                Ha
              </span>
              <span className="stat-txt">Arable Land</span>
            </div>
            <div className="stat-box-green">
              <span className="stat-num">
                {statsInView && <CountUp end={15} duration={2.5} />}
              </span>
              <span className="stat-txt">Global Partners</span>
            </div>
            <div className="stat-box-green">
              <span className="stat-num">
                {statsInView && <CountUp end={32} duration={2.5} />}
              </span>
              <span className="stat-txt">Years Legacy</span>
            </div>
          </div>
        </section>

        {/* --- 9. FINAL CTA (NEW) --- */}
        <section className="final-cta">
          <div className="container">
            <h2>Ready to Build Something Extraordinary?</h2>
            <p>Whether you need bulk agricultural supply or a partner for major infrastructure.</p>
            <Link to="/contact" className="btn-final">
              Get in Touch
            </Link>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Home;
