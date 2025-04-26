import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Roadmap: React.FC = () => {
  const contentRef = useScrollAnimation();

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div 
        ref={contentRef} 
        className="max-w-4xl mx-auto py-20 opacity-0 translate-y-10 transition-all"
      >
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
          Limitless.ai Roadmap
        </h1>
        
        <div className="space-y-16">
          {/* Q1 2025 */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              ✅ Q1 2025 — Foundation & Ideation (Completed)
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Conceived the idea of Limitless.ai: memecoin + onchain AI agents
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Assembled founding team (smart contract devs, AI engineers, creatives)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Developed MemeBot Alpha prototype (MVP agent with basic meme generation)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Wrote v1.0 of the Whitepaper
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Designed initial brand, landing page & tokenomics model
              </li>
            </ul>
          </div>

          {/* Q2 2025 */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🚧 Q2 2025 — Launch Phase 1: Core Infrastructure
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🚀 Token Launch: $LIMIT (fair launch or stealth mint)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🌐 Public Launch of Website + Featured Agent Demo (MemeBot Alpha)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                👨‍💻 Launch Create Agent interface (no-code UI for deploying agents)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧠 Open-source core agent framework (Solidity + offchain AI model hooks)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🛠️ Begin development of Agent Marketplace and Prediction Market Engine
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧪 Community Beta Program (early agent creators + memers)
              </li>
            </ul>
          </div>

          {/* Q3 2025 */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              📈 Q3 2025 — Growth Phase: Ecosystem Expansion
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🛒 Launch Limitless Marketplace for buying/selling agents and traits
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🔮 Release Degenerate Predictions module (AI-powered prediction markets)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧬 Introduce Agent Upgrades using $LIMIT (power, speed, meme skill)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                📣 Meme Contests + Viral Campaigns (to gamify agent virality)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
               👾  MarketSnipers (trend-predicting bots)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧑‍💻 Community Developer SDK for agent plugins
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                📊 Launch Analytics Dashboard (track top agents, memetic ROI, prediction wins)
              </li>
            </ul>
          </div>

          {/* Q4 2025 */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🏛️ Q4 2025 — Governance & Monetization
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🗳️ Launch Limitless DAO using $LIMIT for governance
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                💰 Add staking rewards + agent incentive pools
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🔐 Implement fail-safe protections & gas optimization features
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧠 Roll out Onchain AI Training Module (fine-tune agents based on usage data)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🎨 NFT Agent Skins + Trait Packs (customization for monetization)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🏆 Limitless Awards for top-performing agents (community-voted)
              </li>
            </ul>
          </div>

          {/* 2026 and Beyond */}
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              🌍 2026 and Beyond — Decentralized Intelligence
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🌐 Cross-chain support (Polygon, Arbitrum, Avalanche)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧱 Agent composability with DeFi and GameFi protocols
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🤖 Launch AI Meme LLM API (for devs & creators)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🧠 Multi-agent systems (collaborative or competitive AI agents)
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                📡 Real-time autonomous agent-to-agent trading experiments
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                🛰️ Limitless.ai becomes the memetic layer of Web3 intelligence
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Roadmap;