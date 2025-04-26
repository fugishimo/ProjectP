import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Whitepaper: React.FC = () => {
  const contentRef = useScrollAnimation();

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div 
        ref={contentRef} 
        className="max-w-3xl mx-auto py-20 opacity-0 translate-y-10 transition-all"
      >
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Limitless.ai Whitepaper
        </h1>
        
        <div className="space-y-12">
          {/* Abstract */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🧠 Abstract
            </h2>
            <div className="text-[#9CA3AF] space-y-4">
              <p>
                Limitless.ai is the world's first memecoin powered by onchain AI agents, designed to generate chaos, value, and memes in real-time. We are building a decentralized ecosystem where intelligence becomes viral, humor becomes currency, and the community drives the narrative. Our agents are not just reactive — they're generative, adaptive, and built to disrupt the crypto landscape with autonomous onchain behavior.
              </p>
              <p>
                As AI continues to evolve and meme culture continues to drive internet virality, Limitless.ai merges the two into a permissionless, programmable future of decentralized intelligence.
              </p>
            </div>
          </div>

          {/* Purpose */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🚀 Purpose
            </h2>
            <div className="text-[#9CA3AF] space-y-4">
              <p>
                The purpose of Limitless.ai is to decentralize the creation and utility of memetic content through autonomous, onchain AI agents that can:
              </p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Predict market trends
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Generate viral content
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Interact with protocols autonomously
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Serve as programmable bots for both humor and utility
                </li>
              </ul>
              <p>
                We believe memes are more than entertainment — they are financial primitives, and AI is the medium through which they will be weaponized.
              </p>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🔩 Technology Stack
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Solana Blockchain: scalability and low-cost interactions
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Smart Contracts: Solidity-based agent framework with modular AI behavior
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                AI Layer: Onchain + offchain hybrid architecture using open-source LLMs and custom fine-tuned meme generation models
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Agent Types:
              </li>
                  <li className="flex items-start">
                    <span className="mr-3">-</span>
                    MemeBots: Create memetic assets autonomously
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">-</span>
                    MarketSnipers: Predict and react to token trends
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">-</span>
                    DegensAI: Vote in prediction markets, interact with protocols
                  </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Token: $LIMIT — Solana utility token for access, rewards, and governance
              </li>
            </ul>
          </div>

          {/* Token Utility */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🎭 Token Utility
            </h2>
            <div className="text-[#9CA3AF]">
              <p className="mb-4">$LIMIT will power the Limitless.ai economy. Use cases include:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Access to premium AI agents or agent customization
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Staking to influence agent behavior (e.g. meme themes, targets)
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Participation in prediction markets
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Governance votes on roadmap decisions
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Marketplace transactions (buy/sell agents, custom skins, datasets)
                </li>
              </ul>
            </div>
          </div>

          {/* AI Agent Mechanics */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🧬 AI Agent Mechanics
            </h2>
            <div className="text-[#9CA3AF] space-y-4">
              <p>Each AI agent is deployed onchain and is:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Programmable: Users define behavioral traits during launch (risk level, meme style, targets)
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Upgradeable: Traits can be evolved with $LIMIT
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Autonomous: Agents respond to onchain data, social feeds, and user interaction
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Memetic: Agents can generate memes, tweets, and prediction market activity in real-time
                </li>
              </ul>
              <p>
                Agents have "Degeneracy Scores" based on activity, volatility, and virality. High-performing agents can be cloned or sold in the open marketplace.
              </p>
            </div>
          </div>

          {/* Prediction Markets */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              📊 Prediction Markets
            </h2>
            <div className="text-[#9CA3AF]">
              <p className="mb-4">Limitless.ai includes a native prediction market system powered by AI.</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Users can bet on future outcomes (crypto, memes, culture)
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  AI agents autonomously place predictions and influence odds
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Winning predictions earn $LIMIT and onchain clout
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Powered by a dynamic bonding curve and AI-powered sentiment tracking
                </li>
              </ul>
            </div>
          </div>

          {/* Governance */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🧱 Governance
            </h2>
            <div className="text-[#9CA3AF]">
              <p className="mb-4">Governance is conducted through the Limitless DAO:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  1 $LIMIT = 1 vote
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Vote on agent traits, marketplace features, partnerships, and treasury allocations
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  Proposals are AI-assisted for clarity and fairness
                </li>
              </ul>
            </div>
          </div>

          {/* Security */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🔐 Security
            </h2>
            <ul className="space-y-2 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Smart contracts audited before deployment
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                AI behavior sandboxed with programmable safety rules
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Fail-safes for runaway agent activity (e.g., excessive gas usage)
              </li>
            </ul>
          </div>

          {/* Vision */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🌐 Vision
            </h2>
            <div className="text-[#9CA3AF] space-y-4">
              <p>
                In a world driven by content, Limitless.ai turns memes into programmable weapons of influence. By giving communities the tools to launch and guide autonomous meme agents, we are creating a decentralized memetic superorganism — one that learns, adapts, and disrupts. Not financial advice please do your research.
              </p>
              <p className="font-bold">
                Limitless.ai is not just a project. It's a movement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Whitepaper;