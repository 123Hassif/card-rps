import { CardType } from '../game/types';

interface CardProps {
  type?: CardType; // If undefined, it's face down (bot's card in hand)
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const ICONS = {
  ROCK: '🪨',
  PAPER: '📄',
  SCISSORS: '✂️'
};

export const PlayingCard = ({ type, onClick, disabled, className = '' }: CardProps) => {
  const isFaceDown = !type;

  return (
    <button
      className={`card ${isFaceDown ? 'face-down' : 'face-up'} ${disabled ? 'disabled' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
    >
      <div className="card-inner">
        {isFaceDown ? (
          <div className="card-pattern">?</div>
        ) : (
          <>
            <span className="card-icon">{ICONS[type]}</span>
            <span className="card-name">{type}</span>
          </>
        )}
      </div>
    </button>
  );
};
