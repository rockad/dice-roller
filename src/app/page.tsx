'use client';

import { useState } from 'react';
import GameBoard from '@/components/GameBoard';
import PlayerList from '@/components/PlayerList';
import { GameState, Player } from '@/types';
import styles from './page.module.css';

export default function Home() {
  const [gameState, setGameState] = useState<GameState>({
    players: [],
    currentTurn: '',
    isGameActive: false
  });
  const [playerName, setPlayerName] = useState('');

  const joinGame = () => {
    if (!playerName) return;

    const newPlayer: Player = {
      id: Math.random().toString(36).substr(2, 9),
      name: playerName,
      score: 0
    };

    setGameState(prev => ({
      ...prev,
      players: [...prev.players, newPlayer],
      currentTurn: prev.players.length === 0 ? newPlayer.id : prev.currentTurn,
      isGameActive: true
    }));
  };

  return (
    <main className={styles.container}>
      {!gameState.isGameActive ? (
        <div className={styles.joinGameContainer}>
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            placeholder="Enter your name"
            className={styles.inputField}
          />
          <button
            onClick={joinGame}
            className={styles.buttonPrimary}
          >
            Join Game
          </button>
        </div>
      ) : (
        <div className={styles.gameContainer}>
          <PlayerList players={gameState.players} currentTurn={gameState.currentTurn} />
          <GameBoard gameState={gameState} setGameState={setGameState} />
        </div>
      )}
    </main>
  );
}
