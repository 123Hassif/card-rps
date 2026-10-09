import React from 'react';
import { CardType } from '../game/types';
import rockWebp from '../assets/images/pierre.webp';
import rockPng from '../assets/images/pierre.png';
import paperWebp from '../assets/images/papier.webp';
import paperPng from '../assets/images/papier.png';
import scissorsWebp from '../assets/images/ciseau.webp';
import scissorsPng from '../assets/images/ciseau.png';

export interface CharacterProps {
  size?: number;
  className?: string;
  animate?: boolean;
}

export const RockCharacter: React.FC<CharacterProps> = ({ 
  size = 140, 
  className = '', 
  animate = true 
}) => {
  return (
    <div 
      className={`rubber-hose-character rock-char ${animate ? 'with-idle-anim' : ''} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Personnage Pierre cartoon rétro"
    >
      <picture className="character-picture">
        <source srcSet={rockWebp} type="image/webp" />
        <img 
          src={rockPng} 
          alt="Pierre cartoon" 
          className="character-img"
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </picture>
    </div>
  );
};

export const PaperCharacter: React.FC<CharacterProps> = ({ 
  size = 140, 
  className = '', 
  animate = true 
}) => {
  return (
    <div 
      className={`rubber-hose-character paper-char ${animate ? 'with-idle-anim' : ''} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Personnage Feuille / Parchemin cartoon rétro"
    >
      <picture className="character-picture">
        <source srcSet={paperWebp} type="image/webp" />
        <img 
          src={paperPng} 
          alt="Feuille cartoon" 
          className="character-img"
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </picture>
    </div>
  );
};

export const ScissorsCharacter: React.FC<CharacterProps> = ({ 
  size = 140, 
  className = '', 
  animate = true 
}) => {
  return (
    <div 
      className={`rubber-hose-character scissors-char ${animate ? 'with-idle-anim' : ''} ${className}`}
      style={{ width: size, height: size }}
      role="img"
      aria-label="Personnage Ciseaux cartoon rétro"
    >
      <picture className="character-picture">
        <source srcSet={scissorsWebp} type="image/webp" />
        <img 
          src={scissorsPng} 
          alt="Ciseaux cartoon" 
          className="character-img"
          width={size}
          height={size}
          loading="eager"
          decoding="async"
          draggable={false}
        />
      </picture>
    </div>
  );
};

export const RubberHoseCharacterIcon: React.FC<{ 
  type: CardType; 
  size?: number; 
  className?: string;
  animate?: boolean;
}> = ({
  type,
  size = 140,
  className = '',
  animate = true,
}) => {
  switch (type) {
    case 'ROCK':
      return <RockCharacter size={size} className={className} animate={animate} />;
    case 'PAPER':
      return <PaperCharacter size={size} className={className} animate={animate} />;
    case 'SCISSORS':
      return <ScissorsCharacter size={size} className={className} animate={animate} />;
    default:
      return null;
  }
};
