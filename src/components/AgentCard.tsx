import React from 'react';
import { Bot, ChevronRight } from 'lucide-react';
import { Agent } from '../types';
import { Link } from 'react-router-dom';
interface AgentCardProps {
  agent: Agent;
}

const AgentCard: React.FC<AgentCardProps> = ({ agent }) => {
  return (
    <div className="bg-[#1A1F2B] rounded-2xl overflow-hidden transition-transform hover:scale-105">
      <div className="relative p-6">
        {agent.isLive && (
          <span className="absolute right-4 top-4 px-2 py-1 text-xs font-semibold text-white bg-green-600 rounded-full">
            LIVE
          </span>
        )}
        
        <div className="flex items-center mb-4">
          {agent.avatar ? (
            <img 
              src={agent.avatar}
              alt={agent.name}
              className="w-12 h-12 mr-3 rounded-full bg-[#2C3341]"
            />
          ) : (
            <div className="flex items-center justify-center w-12 h-12 mr-3 rounded-full bg-[#2C3341]">
              <Bot className="w-6 h-6 text-white" />
            </div>
          )}
          
          <div>
            <h3 className="text-lg font-bold text-white">{agent.name}</h3>
          </div>
        </div>
        
        {agent.tagline && (
          <p className="mb-4 text-sm text-[#9CA3AF]">{agent.tagline}</p>
        )}
        
        <p className="mb-6 text-[#38BDF8]">{agent.token}</p>
        
        <button> <Link to="/agentmarket" className="flex items-center justify-center w-full px-4 py-2 text-white border border-white rounded-lg hover:bg-[#2C3341] transition-colors">
          <span className="text-sm font-medium">View Details</span>
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
        </button>
      </div>
    </div>
  );
};

export default AgentCard;