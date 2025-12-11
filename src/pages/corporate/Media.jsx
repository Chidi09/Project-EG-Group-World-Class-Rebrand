import React from 'react';
import { Newspaper, Mic, Globe, ArrowRight } from 'lucide-react';
import './Media.css';

const Media = () => {
  return (
    <div className="media-wrapper">
      
      {/* --- HERO --- */}
      <section className="media-hero">
        <div className="container">
          <span className="hero-tag">EG MEDIA</span>
          <h1>The Voice of Agriculture.</h1>
          <p>Publishers of the internationally acclaimed "The Agriculturist" magazine. We bridge the gap between innovation and practice.</p>
        </div>
      </section>

      {/* --- THE MAGAZINE SHOWCASE --- */}
      <section className="magazine-showcase">
        <div className="container showcase-grid">
          
          <div className="magazine-cover">
             {/* 3D Cover Effect */}
             <div className="book-3d">
               <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80" alt="The Agriculturist Cover" />
             </div>
          </div>

          <div className="magazine-info">
            <h2>The Agriculturist</h2>
            <p className="subtitle">Internationally Acclaimed Publication</p>
            <p className="desc">
              Erste Graceland is the publisher of "The Agriculturist" and its associated publications. 
              We work with the best to build strong corporate relationships both locally and internationally.
            </p>
            
            <ul className="features-list">
              <li><Globe size={18} /> Global Distribution</li>
              <li><Newspaper size={18} /> Industry Insights</li>
              <li><Mic size={18} /> Exclusive Interviews</li>
            </ul>

            <button className="subscribe-btn">
              Subscribe to Edition <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* --- LATEST NEWS GRID (Placeholder for dynamic content) --- */}
      <section className="news-grid-section">
        <div className="container">
          <h3>Latest Headlines</h3>
          <div className="media-grid">
            
            <div className="media-card">
              <div className="card-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="card-body">
                <span className="tag">Agriculture</span>
                <h4>New Yield Technologies in Nigeria</h4>
                <a href="#">Read Story &rarr;</a>
              </div>
            </div>

            <div className="media-card">
              <div className="card-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="card-body">
                <span className="tag">Construction</span>
                <h4>Sustainable Housing Awards 2024</h4>
                <a href="#">Read Story &rarr;</a>
              </div>
            </div>

             <div className="media-card">
              <div className="card-img" style={{backgroundImage: "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80')"}}></div>
              <div className="card-body">
                <span className="tag">Corporate</span>
                <h4>EG Group Partners with EU Firms</h4>
                <a href="#">Read Story &rarr;</a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Media;

