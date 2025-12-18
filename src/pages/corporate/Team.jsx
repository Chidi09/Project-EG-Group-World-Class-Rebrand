import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Award, Briefcase, X, Linkedin, ChevronRight } from 'lucide-react';
import './Team.css';

const executives = [
  {
    id: 1,
    name: "Chidi Ulelu",
    credential: "MSc",
    role: "Group CEO",
    image: "/images/logos/team-chidi.jpg",
    bio: "A visionary agro-consultant and international businessman with decades of experience.",
    fullBio: "Chidi Ulelu is an alumnus of University of Port Harcourt and Lagos. An Agro-Consultant and an International businessman. He has practiced Agriculture in South Africa, East Central and West Europe and studied in the prestigious Kasetsart (Agriculture) University of Thailand and the Prince of Chumphon Fisheries College."
  },
  {
    id: 2,
    name: "Geoffrey Onuoha",
    credential: "PhD Arch",
    role: "Head, Concept Division",
    image: "/images/logos/team-geoffrey.jpg", // The Man in Red
    bio: "Arc. Onuoha holds a Doctorate in Architecture from the prestigious Italian Architecture system.",
    fullBio: "Arc. Onuoha holds a Doctorate in Architecture from the prestigious Italian Architecture system. With over 25 years of experience in Europe and Nigeria, he ably mans the EG conceptualization division. His long years of sectorial experience are usually brought to bear on our many projects."
  },
  {
    id: 3,
    name: "Victoria Nkechi Ulelu",
    credential: "Mgmt",
    role: "Executive Director",
    image: "/images/logos/team-nkechi.jpg",
    bio: "Trained in Cluster Management of small and medium Enterprises in Thailand.",
    fullBio: "Trained in Cluster Management of small and medium Enterprises in Thailand. Guidance Counsellor and skilled in distribution systems. Her effort has provided a high level of customer service with excellent communication, personalised delivery, and a highly flexible and adaptable approach to every project we are involved in."
  },
  {
    id: 4,
    name: "Engr. Chikodi Ben Obi",
    credential: "B.Eng",
    role: "S.O. Electrical Division",
    image: "/images/logos/team-chikodi.jpg", // The Woman
    bio: "In charge of the Electrical department of EG Construction and project cost evaluation.",
    fullBio: "In charge of the Electrical department of EG Construction. She is in charge of evaluating project cost and proper implementation of the resources in the construction sector. Her supervision in the day to day activities helps our workers understand exactly what is required of them every step of the way."
  },
  {
    id: 5,
    name: "Prince George",
    credential: "IT/Brand",
    role: "Brand Manager",
    image: "/images/logos/team-prince.jpg", // The Young Man
    bio: "Wealth of experience in Cinematography, Photography, Event Marketing and Brand Management.",
    fullBio: "IT Personnel/Brand Consultant with wealth of experience in Cinematography, Photography, Videography, Event Marketing and Brand Management. Started his career as Computer Engineer/Programmer which gave him the edge in wiggling through demanding projects. Freelanced in brand consultancy for different organizations locally and internationally."
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
            <p>At EG Group, we breed and groom people to reach their true potentials. Our well-balanced team ensures that teamwork is a culture.</p>
          </motion.div>
        </div>
      </section>

      {/* PORTRAIT GRID */}
      <section className="portrait-section">
        <div className="container">
          <div className="portrait-grid">
            {executives.map((exec, index) => (
              <motion.div 
                key={exec.id} 
                className="portrait-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedExec(exec)}
              >
                <div className="card-inner">
                  <div className="image-frame">
                    <img src={exec.image} alt={exec.name} />
                    <div className="overlay-btn">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                  <div className="exec-info">
                    <div className="name-row">
                      <h2>{exec.name}</h2>
                      <span className="cred">{exec.credential}</span>
                    </div>
                    <span className="role">{exec.role}</span>
                    <p className="bio-preview">{exec.bio}</p>
                    <span className="read-more">View Full Profile</span>
                  </div>
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
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-modal" onClick={() => setSelectedExec(null)}><X size={24}/></button>
              
              <div className="modal-content-flex">
                <div className="modal-img-col">
                  <img src={selectedExec.image} alt={selectedExec.name} />
                </div>
                <div className="modal-text-col">
                  <h3>{selectedExec.name} <span className="cred-modal">{selectedExec.credential}</span></h3>
                  <p className="modal-role">{selectedExec.role}</p>
                  <div className="modal-divider"></div>
                  <div className="modal-bio-text">
                    <p>{selectedExec.fullBio}</p>
                  </div>
                  <div className="modal-footer">
                    <Linkedin size={20} className="modal-icon"/>
                    <span>Connect on LinkedIn</span>
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
