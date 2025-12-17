import React, { useEffect } from 'react';
import { ReactLenis } from '@studio-freight/react-lenis';
import { useLocation } from 'react-router-dom';
import { Leaf, Hammer, Radio } from 'lucide-react';
import './Services.css';

const Services = () => {
  // Smooth scroll to hash anchors (/services#agriculture, etc.)
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash]);

  return (
    <ReactLenis root>
      <div className="services-wrapper">

        {/* HERO */}
        <section className="services-hero">
          <div className="container">
            <h1>Our Expertise</h1>
            <p>Three integrated engines of growth: Agriculture, Construction, and Media.</p>
          </div>
        </section>

        {/* SECTION 1: AGRICULTURE */}
        <section id="agriculture" className="core-sector">
          <div className="container sector-grid">
            <div className="sector-icon-col">
              <Leaf size={40} className="sector-icon agric" />
            </div>
            <div className="sector-text-col">
              <h2>EG Agriculture</h2>
              <p>
                From plantations to processing, EG Agriculture owns the full value chain. 
                Poultry, fish farming, feed milling, palm oil and rice production are integrated 
                into a single, data-driven ecosystem designed for food security.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 2: CONSTRUCTION */}
        <section id="construction" className="support-sector bg-light">
          <div className="container sector-grid">
            <div className="sector-icon-col">
              <Hammer size={40} className="sector-icon const" />
            </div>
            <div className="sector-text-col">
              <h2>EG Construction</h2>
              <p>
                We design and deliver housing estates, civil works and infrastructure projects that
                balance structural integrity with environmental sensitivity. From earthworks to
                finished communities, our projects are built to outlive trends.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: MEDIA */}
        <section id="media" className="support-sector">
          <div className="container sector-grid">
            <div className="sector-icon-col">
              <Radio size={40} className="sector-icon media" />
            </div>
            <div className="sector-text-col">
              <h2>EG Media</h2>
              <p>
                EG Media tells the story of modern agriculture and responsible development across Africa.
                Through broadcast, digital and on-ground activations we turn data, projects and impact
                into narratives that move markets and communities.
              </p>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
};

export default Services;


