import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-brand-wrapper">
      <div className="blog-header">
        <div className="container">
          <span className="blog-label">The Newsroom</span>
          <h1>EG Insights</h1>
        </div>
      </div>

      <div className="container blog-layout">
        
        {/* Main Article - No People Photos */}
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
             <button className="read-btn">Read Full Article <ArrowRight size={16}/></button>
           </div>
        </div>

        {/* Sidebar News */}
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
    </div>
  );
};

export default Blog;
