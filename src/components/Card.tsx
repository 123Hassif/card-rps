import React from 'react';
import { CardType } from '../game/types';
import { RubberHoseCharacterIcon } from './RubberHoseCharacters';

interface CardProps {
  type?: CardType; // If undefined, it's face down (bot's card in hand)
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  countBadge?: number;
  label?: string;
}

const LABELS: Record<CardType, string> = {
  ROCK: 'PIERRE',
  PAPER: 'FEUILLE',
  SCISSORS: 'CISEAUX',
};

export const PlayingCard: React.FC<CardProps> = ({ 
  type, 
  onClick, 
  disabled, 
  className = '',
  countBadge,
  label
}) => {
  const isFaceDown = !type;

  return (
    <button
      type="button"
      className={`rubber-hose-btn ${isFaceDown ? 'face-down' : 'face-up'} ${disabled ? 'disabled' : ''} ${type ? type.toLowerCase() : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      aria-label={type ? LABELS[type] : 'Carte cachée'}
    >
      <div className="btn-inner">
        {isFaceDown ? (
          <div className="card-face-down-art">
            <svg viewBox="0 0 100 100" className="back-pattern-svg">
              <circle cx="50" cy="50" r="44" fill="#1b1b1b" stroke="#f5f2e8" strokeWidth="4" />
              {/* Vintage hypnotic swirl / question mark */}
              <path 
                d="M50 20 C64 20 70 30 64 42 C58 50 50 52 50 62" 
                fill="none" 
                stroke="#f5f2e8" 
                strokeWidth="6" 
                strokeLinecap="round" 
              />
              <circle cx="50" cy="74" r="4" fill="#f5f2e8" />
              <circle cx="50" cy="50" r="46" fill="none" stroke="#121212" strokeWidth="3" strokeDasharray="6 4" />
            </svg>
            <span className="face-down-label">CARTE DU BOT</span>
          </div>
        ) : (
          <>
            <div className="character-circle-wrapper">
              <RubberHoseCharacterIcon type={type} size={105} />
              {countBadge !== undefined && countBadge > 1 && (
                <span className="count-badge">x{countBadge}</span>
              )}
            </div>
            <span className="character-label">
              {label || LABELS[type]}
            </span>
          </>
        )}
      </div>
    </button>
  );
};
