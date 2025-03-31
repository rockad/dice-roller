export interface Player {
  id: string;
  name: string;
  score: number;
  lastRoll?: number;
}

export type GameState = {
  players: Player[];
  currentTurn: string;
  isGameActive: boolean;
}
