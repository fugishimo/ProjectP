import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturedAgent from '../components/FeaturedAgent';
import TopAgents from '../components/TopAgents';
import DegeneratePredictions from '../components/DegeneratePredictions';
import { featuredAgent, topAgents, predictions } from '../data/mockData';

const Home: React.FC = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedAgent agent={featuredAgent} />
      <TopAgents agents={topAgents} />
      <DegeneratePredictions predictions={predictions} />
    </main>
  );
};

export default Home;