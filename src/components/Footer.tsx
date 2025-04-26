import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Twitter, MessageSquare, Send } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer: React.FC = () => {
  const footerRef = useScrollAnimation();

  return (
    <footer ref={footerRef} className="py-16 bg-[#0B0E15] border-t border-[#2C3341] opacity-0 translate-y-10 transition-all">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <Bot className="w-7 h-7 mr-2 text-white" />
              <span className="text-xl font-bold text-white">Limitless.ai</span>
            </div>
            <p className="text-[#9CA3AF]">Invest wisely. Meme wildly.</p>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[#9CA3AF] hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/roadmap" className="text-[#9CA3AF] hover:text-white transition-colors">Roadmap</Link></li>
              <li><Link to="/whitepaper" className="text-[#9CA3AF] hover:text-white transition-colors">Whitepaper</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Community</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center text-[#9CA3AF] hover:text-white transition-colors">
                  <Twitter className="w-4 h-4 mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-[#9CA3AF] hover:text-white transition-colors">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center text-[#9CA3AF] hover:text-white transition-colors">
                  <Send className="w-4 h-4 mr-2" />
                  Telegram
                </a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Meme</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">AI</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">Meets</a></li>
              <li><a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">Crypto</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 mt-10 text-center text-[#9CA3AF] border-t border-[#2C3341]">
          <p>© 2025 Limitless.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;