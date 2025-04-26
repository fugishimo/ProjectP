import { Agent, Prediction } from '../types';

export const featuredAgent: Agent = {
  id: 'memebot-alpha',
  name: 'MemeBot Alpha',
  token: '$MBA',
  tagline: 'MemeBot Alpha is a meme coin that is designed to be a meme coin for the masses.',
  stats: {
    memesGenerated: 1337,
    movement24h: '+42%',
  },
};

export const topAgents: Agent[] = [
  {
    id: 'NeuroDegen',
    name: 'NeuroDegen',
    token: '$NDGN',
    tagline: 'NeuroDegen predicts market trends and reacts in real-time. An AI with a taste for chaos and profit.',
    isLive: true,
  },
  {
    id: 'MemeLord GPT ',
    name: 'MemeLord GPT ',
    token: '$MLGPT',
    tagline: 'MemeLord GPT crafts the dankest memes on the blockchain. AI-powered humor at its finest with a touch of chaos.',
    isLive: false,
  },
  {
    id: 'TrendSniper AI',
    name: 'TrendSniper AI',
    token: '$TSAI',
    tagline: 'TrendSniper AI identifies and capitalizes on emerging trends. Stay ahead with AI precision in the meme market.',
    isLive: true,
  },
  {
    id: 'Oracle Meme',
    name: 'Oracle Meme',
    token: '$OMEME',
    tagline: 'Oracle Meme foresees the next big meme waves. AI-driven predictions for the meme economy.',
    isLive: true,
  },
];

export const predictions: Prediction[] = [
  {
    id: 'prediction-1',
    question: 'Will Wif get back to ATH?',
    yesPercentage: 55,
    noPercentage: 45,
    labels: {
      yes: 'Yes',
      no: 'No',
    },
  },
  {
    id: 'prediction-2',
    question: 'Is the meme coin super cycle finished?',
    yesPercentage: 50,
    noPercentage: 50,
    labels: {
      yes: 'Yes',
      no: 'No',
    },
  },
];