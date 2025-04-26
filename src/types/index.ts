export interface Agent {
  id: string;
  name: string;
  token: string;
  tagline?: string;
  isLive?: boolean;
  stats?: {
    memesGenerated?: number;
    movement24h?: string;
  };
}

export interface Prediction {
  id: string;
  question: string;
  yesPercentage: number;
  noPercentage: number;
  labels?: {
    yes: string;
    no: string;
  };
}