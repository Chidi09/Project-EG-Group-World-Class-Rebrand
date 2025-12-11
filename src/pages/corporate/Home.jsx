import { motion } from 'framer-motion';
import { ArrowRight, Building2, Leaf, HardHat, TrendingUp, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <span className="hero-tagline">Building Tomorrow, Today</span>
            <h1>Pioneering Excellence in <span className="highlight">Agriculture</span> & <span className="highlight">Construction</span></h1>
            <p>EG Group is a diversified conglomerate delivering world-class solutions across agriculture and construction sectors. We transform visions into reality.</p>
            <div className="hero-buttons">
              <Link to="/about" className="btn btn-primary">
                Discover Our Story <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTORS SECTION */}
      <section className="sectors">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-header"
          >
            <span className="section-tag">Our Sectors</span>
            <h2>Two Pillars of Growth</h2>
            <p>Explore our specialized divisions driving innovation and sustainable development</p>
          </motion.div>
          
          <div className="sectors-grid">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="sector-card agric"
            >
              <div className="sector-icon">
                <Leaf size={40} />
              </div>
              <h3>EG Agriculture</h3>
              <p>Sustainable farming, agribusiness consulting, and agricultural technology solutions for modern food production.</p>
              <Link to="/agriculture" className="sector-link">
                Explore Agriculture <ArrowRight size={16} />
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="sector-card construct"
            >
              <div className="sector-icon">
                <HardHat size={40} />
              </div>
              <h3>EG Construction</h3>
              <p>Premium infrastructure development, commercial buildings, and residential projects built to the highest standards.</p>
              <Link to="/construction" className="sector-link">
                Explore Construction <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="stat-item"
            >
              <TrendingUp size={32} />
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="stat-item"
            >
              <Building2 size={32} />
              <h3>200+</h3>
              <p>Projects Completed</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="stat-item"
            >
              <Users size={32} />
              <h3>500+</h3>
              <p>Team Members</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="stat-item"
            >
              <Globe size={32} />
              <h3>10+</h3>
              <p>Countries Served</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="cta-content"
          >
            <h2>Ready to Build Something Extraordinary?</h2>
            <p>Partner with EG Group and let's create lasting impact together.</p>
            <Link to="/contact" className="btn btn-gold">
              Start Your Project <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style jsx>{`
        /* HERO STYLES */
        .hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, var(--eg-dark) 0%, #2d3436 100%);
          overflow: hidden;
        }
        
        .hero-background {
          position: absolute;
          inset: 0;
          background-image: url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80');
          background-size: cover;
          background-position: center;
        }
        
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(26, 26, 26, 0.9) 0%, rgba(46, 125, 50, 0.7) 100%);
        }
        
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }
        
        .hero-text { color: white; }
        
        .hero-tagline {
          display: inline-block;
          padding: 8px 16px;
          background: rgba(212, 175, 55, 0.2);
          border: 1px solid var(--eg-gold);
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          color: var(--eg-gold);
          margin-bottom: 20px;
        }
        
        .hero h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 24px;
          color: white;
        }
        
        .hero h1 .highlight { color: var(--eg-green-light); }
        
        .hero p {
          font-size: 1.2rem;
          line-height: 1.8;
          opacity: 0.9;
          margin-bottom: 32px;
        }
        
        .hero-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        
        .btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 28px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          cursor: pointer;
          border: 2px solid transparent;
        }
        
        .btn-primary {
          background: var(--eg-green);
          color: white;
        }
        
        .btn-primary:hover {
          background: var(--eg-green-light);
          transform: translateY(-2px);
        }
        
        .btn-outline {
          background: transparent;
          border-color: white;
          color: white;
        }
        
        .btn-outline:hover {
          background: white;
          color: var(--eg-dark);
        }
        
        /* SECTORS STYLES */
        .sectors {
          padding: 100px 0;
          background: var(--eg-light);
        }
        
        .section-header {
          text-align: center;
          margin-bottom: 60px;
        }
        
        .section-tag {
          display: inline-block;
          padding: 6px 14px;
          background: var(--eg-green);
          color: white;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          margin-bottom: 16px;
        }
        
        .section-header h2 {
          font-size: 2.5rem;
          margin-bottom: 16px;
          color: var(--eg-dark);
        }
        
        .section-header p {
          font-size: 1.1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .sectors-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 40px;
        }
        
        .sector-card {
          background: white;
          padding: 50px 40px;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.08);
          transition: all 0.4s ease;
          border-bottom: 4px solid transparent;
        }
        
        .sector-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0,0,0,0.12);
        }
        
        .sector-card.agric { border-bottom-color: var(--agric-accent); }
        .sector-card.construct { border-bottom-color: var(--const-accent); }
        
        .sector-icon {
          width: 70px;
          height: 70px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
        }
        
        .sector-card.agric .sector-icon {
          background: rgba(139, 195, 74, 0.15);
          color: var(--agric-accent);
        }
        
        .sector-card.construct .sector-icon {
          background: rgba(245, 127, 23, 0.15);
          color: var(--const-accent);
        }
        
        .sector-card h3 {
          font-size: 1.6rem;
          margin-bottom: 16px;
          color: var(--eg-dark);
        }
        
        .sector-card p {
          color: #666;
          line-height: 1.7;
          margin-bottom: 24px;
        }
        
        .sector-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          color: var(--eg-green);
        }
        
        .sector-link:hover {
          gap: 12px;
        }
        
        /* STATS STYLES */
        .stats {
          padding: 80px 0;
          background: var(--eg-green);
        }
        
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 40px;
          text-align: center;
        }
        
        .stat-item {
          color: white;
        }
        
        .stat-item svg {
          margin-bottom: 16px;
          opacity: 0.8;
        }
        
        .stat-item h3 {
          font-size: 3rem;
          font-family: 'Playfair Display', serif;
          margin-bottom: 8px;
        }
        
        .stat-item p {
          font-size: 1rem;
          opacity: 0.9;
        }
        
        /* CTA STYLES */
        .cta {
          padding: 100px 0;
          background: var(--eg-dark);
          text-align: center;
        }
        
        .cta-content h2 {
          font-size: 2.5rem;
          color: white;
          margin-bottom: 16px;
        }
        
        .cta-content p {
          font-size: 1.1rem;
          color: rgba(255,255,255,0.8);
          margin-bottom: 32px;
        }
        
        .btn-gold {
          background: var(--eg-gold);
          color: var(--eg-dark);
        }
        
        .btn-gold:hover {
          background: #e6c349;
          transform: translateY(-2px);
        }
        
        @media (max-width: 768px) {
          .hero {
            min-height: 80vh;
            padding: 60px 0;
          }
          
          .hero h1 { font-size: 2rem; }
          
          .hero-buttons {
            flex-direction: column;
          }
          
          .sectors-grid {
            grid-template-columns: 1fr;
          }
          
          .sector-card {
            padding: 40px 30px;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;

