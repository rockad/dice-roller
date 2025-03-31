interface DiceRollerProps {
  onRoll: (playerId: string, value: number) => void;
  currentTurn: string;
}

export default function DiceRoller({onRoll, currentTurn}: DiceRollerProps) {
  const rollDice = () => {
    const value = Math.floor(Math.random() * 6) + 1;
    onRoll(currentTurn, value);
  };

  return (
    <div className="dice-roller">
      <button onClick={rollDice} className="roll-button">
        Roll Dice
      </button>
    </div>
  );
}
