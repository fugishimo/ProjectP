import React from 'react';
import { Link } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-20 px-6 md:px-16 bg-[#0B0E15] border-b border-[#2C3341]">
      <Link to="/" className="flex items-center">
        <Bot className="w-8 h-8 mr-2 text-white" />
        <span className="text-xl font-bold text-white">Limitless.ai</span>
      </Link>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/" className="text-white hover:text-[#38BDF8] transition-colors">Home</Link>
        <Link to="/roadmap" className="text-white hover:text-[#38BDF8] transition-colors">Roadmap</Link>
        <Link to="/whitepaper" className="text-white hover:text-[#38BDF8] transition-colors">Whitepaper</Link>
        <Link to="/about" className="text-white hover:text-[#38BDF8] transition-colors">About</Link>
      </div>
      
      <div className="hidden md:flex items-center space-x-8">
        <Link to="/loading" 
        className="flex items-center px-5 py-2 text-sm font-medium text-white bg-[#1A1F2B] rounded-full hover:bg-[#2C3341] transition-colors">
         Buy $LIMIT
         </Link>
      </div>

    </nav>
  );
};

export default Navbar;