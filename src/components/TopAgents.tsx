import React, { useState, useEffect } from 'react';
import AgentCard from './AgentCard';
import { Agent } from '../types';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface TopAgentsProps {
  agents: Agent[];
}

const TopAgents: React.FC<TopAgentsProps> = ({ agents }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleAgents, setVisibleAgents] = useState<Agent[]>([]);
  const sectionRef = useScrollAnimation();
  
  useEffect(() => {
    updateVisibleAgents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex, agents]);

  const updateVisibleAgents = () => {
    let agentsToShow = 1;
    if (window.innerWidth >= 768) agentsToShow = 2;
    if (window.innerWidth >= 1280) agentsToShow = 3;
    
    const visibleAgents = [];
    for (let i = 0; i < agentsToShow; i++) {
      const index = (currentIndex + i) % agents.length;
      visibleAgents.push(agents[index]);
    }
    setVisibleAgents(visibleAgents);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? agents.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % agents.length);
  };

  return (
    <section ref={sectionRef} className="py-16 bg-[#0B0E15] opacity-0 translate-y-10 transition-all">
      <h2 className="mb-12 text-2xl font-bold text-center text-white">
        Top Agents
      </h2>
      
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-center space-x-4 mb-6 justify-end">
          <button 
            className="flex items-center justify-center w-10 h-10 text-white bg-[#1A1F2B] rounded-full hover:bg-[#2C3341]"
            onClick={handlePrev}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            className="flex items-center justify-center w-10 h-10 text-white bg-[#1A1F2B] rounded-full hover:bg-[#2C3341]"
            onClick={handleNext}
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visibleAgents.map((agent) => (
            <AgentCard key={agent.id} agent={agent} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopAgents;