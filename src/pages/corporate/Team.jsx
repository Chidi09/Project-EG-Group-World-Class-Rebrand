import React, { useState } from 'react';
import { X, Globe, Award, Briefcase } from 'lucide-react';
import './Team.css';

// --- DATA: The specific profiles you sent ---
const teamMembers = [
  {
    id: 1,
    name: "Chidi Ulelu",
    role: "CEO",
    credential: "MSc",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", // Placeholder
    bio: "Chidi Ulelu is an alumnus of University of Port Harcourt and Lagos. An Agro-Consultant and an International businessman. He has practiced Agriculture in South Africa, East Central and West Europe and studied in the prestigious Kasetsart (Agriculture) University of Thailand and the Prince of Chumphon Fisheries College."
  },
  {
    id: 2,
    name: "Geoffrey Onuoha",
    role: "Head Concept Division",
    credential: "PhD Arch",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80", // Placeholder
    bio: "Arc. Onuoha holds a Doctorate in Architecture from the prestigious Italian Architecture system. With over 25 years of experience in Europe and Nigeria, he ably mans the EG conceptualization division. His long years of sectorial experience are usually brought to bear on our many projects."
  },
  {
    id: 3,
    name: "Victoria Nkechi Ulelu",
    role: "Executive Director",
    credential: "Mgmt",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", // Placeholder
    bio: "Trained in Cluster Management of small and medium Enterprises in Thailand. Guidance Counsellor and skilled in distribution systems. Her effort has provided a high level of customer service with excellent communication, personalised delivery, and a highly flexible approach to every project."
  },
  {
    id: 4,
    name: "Engr. Chikodi Ben Obi",
    role: "S.O. Electrical Division",
    credential: "Engr",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80", // Placeholder
    bio: "In charge of the Electrical department of EG Construction. She is in charge of evaluating project cost and proper implementation of the resources in the construction sector. Her supervision in day-to-day activities helps our workers understand exactly what is required of them every step of the way."
  },
  {
    id: 5,
    name: "Prince George",
    role: "Brand Manager / IT",
    credential: "IT",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80", // Placeholder
    bio: "IT Personnel/Brand Consultant with wealth of experience in Cinematography, Photography, Videography, Event Marketing and Brand Management. Started his career as Computer Engineer/Programmer which gave him the edge in wiggling through demanding projects."
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
                    <span className="view-btn">View Profile</span>
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

