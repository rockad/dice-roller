import {Player} from '@/types';

interface PlayerListProps {
  players: Player[];
  currentTurn: string;
}

export default function PlayerList({players, currentTurn}: PlayerListProps) {
  return (
    <div className="player-list">
      <h2>Players</h2>
      <div className="players">
        {players.map(player => (
          <div
            key={player.id}
            className={`player-item ${currentTurn === player.id ? 'current' : 'inactive'}`}
          >
            <span>{player.name}</span>
            {currentTurn === player.id && (
              <span className="current-turn-indicator">(Current Turn)</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
