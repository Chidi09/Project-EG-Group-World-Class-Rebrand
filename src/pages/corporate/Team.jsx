import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Award, Briefcase } from 'lucide-react';
import './Team.css';

const executives = [
  {
    name: "Chidi Ulelu",
    credential: "MSc",
    role: "CEO",
    image: "/images/logos/Chidi.jpg",
    bio: "A visionary agro-consultant and international businessman with decades of experience across South Africa, Europe, and Thailand."
  },
  {
    name: "Victoria Nkechi Ulelu",
    credential: "Mgmt",
    role: "Executive Director",
    image: "/images/logos/Nkechi.jpg",
    bio: "An expert in Cluster Management and Distribution Systems, ensuring high-level customer service and operational excellence."
  }
];

const Team = () => {
  return (
    <div className="team-elite-wrapper">
      
      {/* HERO */}
      <section className="team-elite-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="elite-tag">Our Leadership</span>
            <h1>Visionaries. Experts. <br/>Global Citizens.</h1>
            <p>Meet the seasoned professionals pushing beyond the benchmark.</p>
          </motion.div>
        </div>
      </section>

      {/* PORTRAIT GRID */}
      <section className="portrait-section">
        <div className="container">
          <div className="portrait-grid">
            {executives.map((exec, index) => (
              <motion.div 
                key={index} 
                className="portrait-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="image-frame">
                  <img src={exec.image} alt={exec.name} />
                  <div className="frame-overlay"></div>
                </div>
                <div className="exec-info">
                  <h2>{exec.name} <span className="cred">{exec.credential}</span></h2>
                  <p className="role">{exec.role}</p>
                  <p className="bio-preview">{exec.bio}</p>
                  <button className="view-profile-btn">View Full Profile</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES (Iconography) */}
      <section className="elite-values">
        <div className="container values-flex">
          <div className="val-item">
            <Globe size={32} className="val-icon"/>
            <h3>Global Exposure</h3>
            <p>Experience across Thailand, Italy, South Africa, and Europe.</p>
          </div>
          <div className="val-item">
            <Award size={32} className="val-icon"/>
            <h3>Excellence</h3>
            <p>Grooming talent to reach true potential regardless of position.</p>
          </div>
          <div className="val-item">
            <Briefcase size={32} className="val-icon"/>
            <h3>Experience</h3>
            <p>Over 25 years of sectorial expertise on every project.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Team;
