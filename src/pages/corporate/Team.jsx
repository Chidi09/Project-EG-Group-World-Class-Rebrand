import React, { useState } from 'react';
import { X, Globe, Award, Briefcase } from 'lucide-react';
import './Team.css';

// --- DATA: Only the 2 Executives ---
const teamMembers = [
  {
    id: 1,
    name: "Chidi Ulelu",
    role: "CEO",
    credential: "MSc",
    image: "/images/logos/Chidi.jpg", 
    bio: "Chidi Ulelu is an alumnus of University of Port Harcourt and Lagos. An Agro-Consultant and an International businessman. He has practiced Agriculture in South Africa, East Central and West Europe and studied in the prestigious Kasetsart (Agriculture) University of Thailand and the Prince of Chumphon Fisheries College."
  },
  {
    id: 3, // Keeping unique ID
    name: "Victoria Nkechi Ulelu",
    role: "Executive Director",
    credential: "Mgmt",
    image: "/images/logos/Nkechi.jpg", 
    bio: "Trained in Cluster Management of small and medium Enterprises in Thailand. Guidance Counsellor and skilled in distribution systems. Her effort has provided a high level of customer service with excellent communication, personalised delivery, and a highly flexible approach to every project."
  }
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className="team-wrapper">
      
      {/* --- HERO --- */}
      <section className="team-hero">
        <div className="team-hero-content">
          <h4>Our Leadership</h4>
          <h1>Visionaries. Experts.<br />Global Citizens.</h1>
          <p>Meet the seasoned professionals pushing beyond the benchmark to achieve unevened success.</p>
        </div>
      </section>

      {/* --- TEAM GRID --- */}
      <section className="team-grid-section">
        <div className="container">
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card" onClick={() => setSelectedMember(member)}>
                <div className="member-image-wrapper">
                  <img src={member.image} alt={member.name} className="member-image" />
                  <div className="overlay-content">
                    <span className="view-btn">View Full Profile</span>
                  </div>
                </div>
                <div className="member-info">
                  <h3>{member.name} <span className="credential">{member.credential}</span></h3>
                  <p className="role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- CULTURE / VALUES --- */}
      <section className="values-section">
        <div className="container">
          <div className="values-grid">
            <div className="value-item">
              <Globe size={40} className="value-icon" />
              <h3>Global Exposure</h3>
              <p>Our team has studied and worked across Thailand, Italy, South Africa, and Europe.</p>
            </div>
            <div className="value-item">
              <Award size={40} className="value-icon" />
              <h3>Excellence</h3>
              <p>We breed and groom people to reach their true potential regardless of position.</p>
            </div>
            <div className="value-item">
              <Briefcase size={40} className="value-icon" />
              <h3>Experience</h3>
              <p>Over 25 years of sectorial experience brought to bear on every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- BIO DRAWER (MODAL) --- */}
      {selectedMember && (
        <div className="modal-backdrop" onClick={() => setSelectedMember(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setSelectedMember(null)}>
              <X size={24} />
            </button>
            
            <div className="modal-header">
              <img src={selectedMember.image} alt={selectedMember.name} />
              <div>
                <h2>{selectedMember.name}</h2>
                <p className="modal-role">{selectedMember.role}</p>
                <span className="modal-badge">{selectedMember.credential}</span>
              </div>
            </div>

            <div className="modal-body">
              <p>{selectedMember.bio}</p>
            </div>
            
          </div>
        </div>
      )}

    </div>
  );
};

export default Team;

