import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/corporate/Home'; 
import About from './pages/corporate/About';
import Team from './pages/corporate/Team';
import AgricHome from './pages/agric/AgricHome';

// Placeholder components for pages we haven't built yet to prevent errors
const Placeholder = ({ title }) => (
  <div style={{ padding: '100px', textAlign: 'center' }}>
    <h1>{title}</h1><p>Coming Soon in Phase 2</p>
  </div>
);

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Corporate Main Site */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Placeholder title="Contact Us" />} />
        <Route path="/blog" element={<Placeholder title="EG Insights" />} />

        {/* Sub-Sites */}
        <Route path="/agriculture" element={<AgricHome />} />
        <Route path="/construction" element={<Placeholder title="EG Construction" />} />
      </Routes>
    </>
  );
}

export default App;
