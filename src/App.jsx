import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/corporate/Home'; 
import About from './pages/corporate/About';
import Team from './pages/corporate/Team';
import Contact from './pages/corporate/Contact';
import Blog from './pages/corporate/Blog';
import Media from './pages/corporate/Media';
import Services from './pages/corporate/Services';

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/media" element={<Media />} />
        {/* Fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
