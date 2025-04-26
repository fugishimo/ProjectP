import React from 'react';
import PredictionCard from './PredictionCard';
import { Prediction } from '../types';
import { BarChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Link } from 'react-router-dom';
interface DegeneratePredictionsProps {
  predictions: Prediction[];
}

const DegeneratePredictions: React.FC<DegeneratePredictionsProps> = ({ predictions }) => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-16 bg-[#0B0E15] opacity-0 translate-y-10 transition-all">
      <h2 className="mb-12 text-2xl font-bold text-center text-white">
        Degenerate Predictions
      </h2>
      
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {predictions.map((prediction) => (
            <PredictionCard key={prediction.id} prediction={prediction} />
          ))}
        </div>
        
        <div className="flex justify-center">
          <button> <Link to="/predictionmarket" className="flex items-center px-6 py-3 font-bold text-black bg-white rounded-lg hover:bg-gray-100 transition-transform hover:scale-105">
            <BarChart className="w-5 h-5 mr-2" />
            Explore Markets
          </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DegeneratePredictions;