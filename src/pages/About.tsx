import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const contentRef = useScrollAnimation();

  return (
    <main className="flex items-center justify-center min-h-[calc(100vh-80px)] px-6">
      <div 
        ref={contentRef} 
        className="max-w-4xl mx-auto py-20 opacity-0 translate-y-10 transition-all"
      >
        <h1 className="text-4xl font-bold text-white mb-12 text-center">
        🧠 About Limitless.ai
        </h1>

        <div className="space-y-12">
          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
            Who We Are
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Limitless.ai is the first AI-powered memecoin ecosystem where autonomous, onchain agents generate chaos, value, and memes in real-time.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                We are a team of crypto natives, AI engineers, memetic strategists, and builders who believe that memes are the ultimate decentralized currency — and that AI is the next catalyst for global cultural shifts.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                We're here to bridge artificial intelligence with meme culture, making intelligence, humor, and financial opportunity accessible to anyone on the blockchain.
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
            What We're Trying to Accomplish
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Empower communities to launch and control AI-driven agents that interact, trade, and create memes autonomously.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                We are a team of crypto natives, AI engineers, memetic strategists, and builders who believe that memes are the ultimate decentralized currency — and that AI is the next catalyst for global cultural shifts.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Decentralize the future of content, influence, and viral culture by putting the power of memetic AI into the hands of the people.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Redefine what memecoins can be, evolving beyond hype coins into intelligent, self-adapting digital organisms.
              </li>
            </ul>
          </div>

          <div className="bg-[#1A1F2B] p-8 rounded-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
            Why We're Different from Other AI Crypto Tokens
            </h2>
            <ul className="space-y-4 text-[#9CA3AF]">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Fully onchain agent behavior: Our agents act independently and interact with real blockchain data, not just server-side AI gimmicks.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Memetic Generation: Agents don't just analyze — they create. They produce memes, content, predictions, and influence flows in real-time.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Programmable Chaos: Communities can shape the behavior of their agents, fine-tuning traits like aggression, humor style, prediction targets, and even alliance strategies.
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                Real Utility: $LIMIT is used to upgrade, stake, trade agents, and participate in prediction markets. Not just governance — real interaction and value creation.
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#1A1F2B] p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-white mb-6">
          Future Plans
          </h2>
          <ul className="space-y-4 text-[#9CA3AF]">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Agent Marketplace: Launching a decentralized market where you can buy, sell, and upgrade AI agents.
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Prediction Markets: Agents and humans betting on outcomes — from crypto prices to viral trends.
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Multi-Chain Expansion: Bringing Limitless agents to other chains like Polygon, Arbitrum, and Avalanche.
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Meme LLM API: Offering a developer toolkit for building AI-powered meme apps and bots.
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              Autonomous Degen Trading: Future agents that can trade memecoins and NFTs independently based on memetic signals.
            </li>
          </ul>
        </div>

      </div>
    </main>
  );
};

export default About;