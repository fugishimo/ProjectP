import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, Terminal } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 pt-20 text-center bg-[#0B0E15]">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
        Where AI Meets Degeneracy
      </h1>
      
      <p className="max-w-2xl mx-auto mb-10 text-lg text-[#9CA3AF] animate-fade-in-delayed">
        The first memecoin with onchain AI agents that generate chaos, 
        value, and memes in real-time. Welcome to the future of decentralized 
        intelligence.
      </p>
      
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-fade-in-delayed-more">
        <button> <Link to="/loading" className="flex items-center px-6 py-3 font-bold text-black bg-white rounded-lg hover:bg-gray-100 transition-transform hover:scale-105">
          <Wallet className="w-5 h-5 mr-2" />
          Buy $LIMIT
        </Link></button>
        
        <button> <Link to="/loading" className="flex items-center px-6 py-3 font-bold text-white border border-white rounded-lg hover:bg-[#1A1F2B] transition-transform hover:scale-105">
          <Terminal className="w-5 h-5 mr-2" />
          Launch Agent
        </Link></button>
      </div>
      
      <a> <Link to="/whitepaper" className="text-[#9CA3AF] hover:text-white underline transition-colors animate-fade-in-delayed-more">
        Read Whitepaper
      </Link></a>
    </section>
  );
};

export default HeroSection;