import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Loader2 } from 'lucide-react';

const AgentMarket: React.FC = () => {
  const contentRef = useScrollAnimation();

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div 
        ref={contentRef} 
        className="max-w-4xl mx-auto py-20 opacity-0 translate-y-10 transition-all text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-8">
          Agent Marketplace Coming Soon!
        </h1>
        <Loader2 className="w-12 h-12 text-[#38BDF8] animate-spin mx-auto" />
      </div>
    </main>
  );
};

export default AgentMarket;