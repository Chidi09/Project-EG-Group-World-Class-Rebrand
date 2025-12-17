import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/corporate/Home'; 
import About from './pages/corporate/About';
import Team from './pages/corporate/Team';
import Contact from './pages/corporate/Contact';
import Blog from './pages/corporate/Blog';
import Media from './pages/corporate/Media';
import Services from './pages/corporate/Services';
import AgricHome from './pages/agric/AgricHome';
import ConstHome from './pages/construct/ConstHome';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Corporate Main Site */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/media" element={<Media />} />
        <Route path="/services" element={<Services />} />

        {/* Sub-Sites */}
        <Route path="/agriculture" element={<AgricHome />} />
        <Route path="/construction" element={<ConstHome />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
