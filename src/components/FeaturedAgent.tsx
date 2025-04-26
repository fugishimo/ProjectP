import React from 'react';
import { Agent } from '../types';
import { Bot, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
interface FeaturedAgentProps {
  agent: Agent;
}

const FeaturedAgent: React.FC<FeaturedAgentProps> = ({ agent }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-[#0B0E15] opacity-0 translate-y-10 transition-all">
      <h2 className="mb-12 text-2xl font-bold text-center text-white">
        Featured Agent
      </h2>
      
      <div className="max-w-lg mx-auto overflow-hidden bg-[#1A1F2B] rounded-2xl">
        <div className="p-6">
          <div className="flex items-center mb-6">
            {agent.avatar ? (
              <img 
                src={agent.avatar} 
                alt={agent.name} 
                className="w-14 h-14 rounded-full mr-4 bg-[#2C3341]"
              />
            ) : (
              <div className="flex items-center justify-center w-14 h-14 mr-4 rounded-full bg-[#2C3341]">
                <Bot className="w-8 h-8 text-white" />
              </div>
            )}
            
            <div>
              <h3 className="text-xl font-bold text-white">{agent.name}</h3>
              <span className="text-[#38BDF8]">{agent.token}</span>
            </div>
          </div>
          
          {agent.tagline && (
            <p className="text-[#9CA3AF] mb-6">{agent.tagline}</p>
          )}
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="p-4 border rounded-lg border-[#2C3341]">
              <p className="mb-1 text-sm text-[#9CA3AF]">Memes Generated</p>
              <p className="text-xl font-bold text-white">
                {agent.stats?.memesGenerated?.toLocaleString() || 0}
              </p>
            </div>
            
            <div className="p-4 border rounded-lg border-[#2C3341]">
              <p className="mb-1 text-sm text-[#9CA3AF]">24h Movement</p>
              <p className="text-xl font-bold text-green-400">
                {agent.stats?.movement24h || '+0%'}
              </p>
            </div>
          </div>
          
          <button> <Link to="/agentmarket" className="flex items-center justify-center w-full px-5 py-3 text-black bg-white rounded-lg hover:bg-gray-100 transition-transform hover:scale-105">
            <span className="font-bold">View Agent</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAgent;