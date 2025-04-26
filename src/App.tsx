import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import Whitepaper from './pages/Whitepaper';
import Loading from './pages/Loading';
import ScrollToTop from './components/ScrollToTop';
import About from './pages/About';
import AgentMarket from './pages/AgentMarket';
import PredictionMarket from './pages/PredictionMarket';
import './styles/animations.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0B0E15] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/about" element={<About />} />
          <Route path="/agentmarket" element={<AgentMarket />} />
          <Route path="/predictionmarket" element={<PredictionMarket />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;