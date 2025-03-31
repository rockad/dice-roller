'use client';

import DiceRoller from './DiceRoller';
import ScoreBoard from './ScoreBoard';
import {GameState, Player} from '@/types';
import {Dispatch, SetStateAction} from "react";

interface GameBoardProps {
  gameState: GameState;
  setGameState: Dispatch<SetStateAction<GameState>>;
}

function GameBoard({gameState, setGameState}: GameBoardProps) {
  const handleRoll = (playerId: string, rollValue: number) => {
    setGameState(prev => ({
      ...prev,
      players: prev.players.map(player =>
        player.id === playerId
          ? {...player, score: player.score + rollValue, lastRoll: rollValue}
          : player
      ),
      currentTurn: getNextPlayer(playerId, prev.players)
    }));
  };

  const getNextPlayer = (currentPlayerId: string, players: Player[]) => {
    const currentIndex = players.findIndex(p => p.id === currentPlayerId);
    const nextIndex = (currentIndex + 1) % players.length;
    return players[nextIndex].id;
  };

  return (
    <div className="game-board">
      <DiceRoller
        onRoll={handleRoll}
        currentTurn={gameState.currentTurn}
      />
      <ScoreBoard players={gameState.players}/>
    </div>
  );
}

export default GameBoard;
