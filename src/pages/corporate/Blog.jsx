import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  const [showArticle, setShowArticle] = useState(false);

  return (
    <div className="blog-brand-wrapper">
      <div className="blog-header">
        <div className="container">
          <span className="blog-label">The Newsroom</span>
          <h1>EG Insights</h1>
        </div>
      </div>

      <div className="container blog-layout">
        
        {/* Main Article */}
        <div className="main-article">
           <div className="article-image-box">
             <img src="https://images.unsplash.com/photo-1555432384-2288d5756d74?auto=format&fit=crop&w=1000&q=80" alt="Award" />
           </div>
           <div className="article-content">
             <div className="meta">
               <span className="badge-gold">Milestone</span>
               <span className="date">July 14, 2013</span>
             </div>
             <h2>A Legacy of Growth: Nigeria50 List</h2>
             <p>AllWorld systematically identifies private growth companies. Being on this ranking has put EG Group on the world map—Visibility Economics™.</p>
             
             {/* BUTTON TRIGGERS MODAL */}
             <button className="read-btn" onClick={() => setShowArticle(true)}>
               Read Full Article <ArrowRight size={16}/>
             </button>
           </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar-list">
          <h3>Recent Updates</h3>
          <div className="side-item">
             <span className="side-date">July 10, 2013</span>
             <h4>Welcome to EG Group Blog</h4>
             <p>Driven by principles of good corporate governance since 1992.</p>
             <a href="#">Read More</a>
          </div>
          <div className="side-item">
             <span className="side-date">Oct 12, 2023</span>
             <h4>Expansion into Northern Region</h4>
             <p>Breaking ground on new low-cost housing developments in Abuja.</p>
             <a href="#">Read More</a>
          </div>
        </div>
      </div>

      {/* ARTICLE MODAL */}
      {showArticle && (
        <div className="article-modal-overlay" onClick={() => setShowArticle(false)}>
          <div className="article-paper" onClick={(e) => e.stopPropagation()}>
            <button className="close-article" onClick={() => setShowArticle(false)}><X size={24}/></button>
            
            <div className="paper-header">
              <span className="paper-date">July 14, 2013</span>
              <h2>A Legacy of Growth: EG Group makes the Nigeria50 List</h2>
              <div className="paper-line"></div>
            </div>
            
            <div className="paper-body">
              <p>AllWorld systematically identifies private growth companies and ranks the fastest growing. Being on an AllWorld ranking has put EG Group on the world map, drawing the market to us—what we call <strong>Visibility Economics™</strong>.</p>
              <p>In 2012, the IMF ranked Nigeria as the third fastest growing economy. EG Group, ranked 40th, has been tipped for drastic growth and is expected to quadruple in the next 5 years.</p>
              <p>"This award is a testament to the resilience and hard work of every member of the EG family," said the CEO during the ceremony at Eko Hotel & Suites. "We are moving from words to action."</p>
              <p>The ranking is based on verifiable financial data and is organized in partnership with the Tony Elumelu Foundation.</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Blog;
