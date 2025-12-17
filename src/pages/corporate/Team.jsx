import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Award, Briefcase, X } from 'lucide-react';
import './Team.css';

const executives = [
  {
    name: "Chidi Ulelu",
    credential: "MSc",
    role: "CEO",
    image: "/images/team-chidi.jpg",
    bio: "A visionary agro-consultant and international businessman with decades of experience across South Africa, Europe, and Thailand. He has championed sustainable farming practices that have increased yield by 40% across partner farms.",
    fullBio: "Chidi Ulelu is an alumnus of University of Port Harcourt and Lagos. An Agro-Consultant and an International businessman. He has practiced Agriculture in South Africa, East Central and West Europe and studied in the prestigious Kasetsart (Agriculture) University of Thailand and the Prince of Chumphon Fisheries College."
  },
  {
    name: "Victoria Nkechi Ulelu",
    credential: "Mgmt",
    role: "Executive Director",
    image: "/images/team-nkechi.jpg",
    bio: "An expert in Cluster Management and Distribution Systems, ensuring high-level customer service and operational excellence.",
    fullBio: "Trained in Cluster Management of small and medium Enterprises in Thailand. Guidance Counsellor and skilled in distribution systems. Her effort has provided a high level of customer service with excellent communication, personalised delivery, and a highly flexible and adaptable approach to every project."
  }
];

const Team = () => {
  const [selectedExec, setSelectedExec] = useState(null);

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
                </div>
                <div className="exec-info">
                  <h2>{exec.name} <span className="cred">{exec.credential}</span></h2>
                  <p className="role">{exec.role}</p>
                  <p className="bio-preview">{exec.bio}</p>
                  
                  {/* BUTTON NOW TRIGGERS STATE */}
                  <button 
                    className="view-profile-btn"
                    onClick={() => setSelectedExec(exec)}
                  >
                    View Full Profile
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
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

      {/* --- POPUP MODAL --- */}
      <AnimatePresence>
        {selectedExec && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedExec(null)}
          >
            <motion.div 
              className="modal-box"
              initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedExec(null)}><X size={24}/></button>
              
              <div className="modal-content-flex">
                <div className="modal-img-col">
                  <img src={selectedExec.image} alt={selectedExec.name} />
                </div>
                <div className="modal-text-col">
                  <h3>{selectedExec.name} <span className="cred">{selectedExec.credential}</span></h3>
                  <p className="modal-role">{selectedExec.role}</p>
                  <div className="modal-bio-text">
                    <p>{selectedExec.fullBio}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Team;
