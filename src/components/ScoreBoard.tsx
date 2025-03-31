import {Player} from '@/types';

type ScoreBoardProps = {
  players: Player[];
}

export default function ScoreBoard({players}: ScoreBoardProps) {
  const sortedPlayers = [...players].sort((a, b) => b.score - a.score);

  return (
    <div className="score-board">
      <h2>Scoreboard</h2>
      <div className="scores">
        {sortedPlayers.map(player => (
          <div key={player.id} className="player-score">
            <span>{player.name}</span>
            <span>{player.score}</span>
            {player.lastRoll && (
              <span className="last-roll">Last Roll: {player.lastRoll}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
