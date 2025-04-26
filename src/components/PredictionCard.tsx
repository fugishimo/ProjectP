import React from 'react';
import { Prediction } from '../types';

interface PredictionCardProps {
  prediction: Prediction;
}

const PredictionCard: React.FC<PredictionCardProps> = ({ prediction }) => {
  return (
    <div className="bg-[#1A1F2B] rounded-2xl p-6">
      <h3 className="mb-6 text-lg font-bold text-white">
        {prediction.question}
      </h3>
      
      <div className="mb-4">
        <div className="relative h-4 mb-2 overflow-hidden bg-[#2C3341] rounded-full">
          <div 
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${prediction.yesPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm">
          <span className="text-white">{prediction.yesPercentage}% {prediction.labels?.yes || 'Yes'}</span>
          <span className="text-[#9CA3AF]">{prediction.noPercentage}% {prediction.labels?.no || 'No'}</span>
        </div>
      </div>
    </div>
  );
};

export default PredictionCard;