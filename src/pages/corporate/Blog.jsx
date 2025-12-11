import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-wrapper">
      
      {/* --- 1. HERO: INSIGHTS HEADER --- */}
      <section className="blog-hero">
        <div className="container">
          <span className="blog-label">The Newsroom</span>
          <h1>EG Insights</h1>
          <p>Tracking our journey in Agriculture, Construction, and Economic Growth.</p>
        </div>
      </section>

      <div className="container blog-content-grid">
        
        {/* --- 2. MAIN FEATURE (The Nigeria 50 Story) --- */}
        <div className="main-feature">
          <div className="feature-img">
            <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80" alt="Award Ceremony" />
            <div className="feature-badge">Milestone</div>
          </div>
          
          <div className="feature-text">
            <div className="meta-row">
              <span><Calendar size={14}/> July 14, 2013</span>
              <span><Tag size={14}/> Awards</span>
            </div>
            <h2>A Legacy of Growth: EG Group makes the Nigeria50 List</h2>
            <p className="excerpt">
              AllWorld systematically identifies private growth companies and ranks the fastest growing. 
              Being on an AllWorld ranking has put EG Group on the world map, drawing the market to us—what we call <strong>Visibility Economics™</strong>.
            </p>
            <p className="excerpt">
              In 2012, the IMF ranked Nigeria as the third fastest growing economy. EG Group, ranked 40th, has been tipped for drastic growth and is expected to quadruple in the next 5 years.
            </p>
            <button className="read-more">Read Full Article <ArrowRight size={16} /></button>
          </div>
        </div>

        {/* --- 3. SIDEBAR / RECENT NEWS --- */}
        <div className="sidebar-news">
          <h3 className="sidebar-title">Recent Updates</h3>
          
          {/* Post 1 */}
          <div className="mini-post">
            <span className="mini-date">July 10, 2013</span>
            <h4>Welcome to EG Group Blog</h4>
            <p>We are a global company driven by principles of good corporate governance. Starting from a small scale Agricultural consultancy in 1992...</p>
            <a href="#" className="mini-link">Read More</a>
          </div>

          {/* Post 2 (Generic Placeholder for future content) */}
          <div className="mini-post">
            <span className="mini-date">Oct 12, 2023</span>
            <h4>Expansion into Northern Region</h4>
            <p>EG Construction breaks ground on new low-cost housing developments in Abuja, expanding our footprint...</p>
            <a href="#" className="mini-link">Read More</a>
          </div>

          <div className="newsletter-box">
            <h4>Subscribe to Insights</h4>
            <p>Get the latest updates directly to your inbox.</p>
            <input type="email" placeholder="Your email address" />
            <button>Subscribe</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Blog;

