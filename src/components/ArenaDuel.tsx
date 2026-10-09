import React from 'react';
import { CardType } from '../game/types';
import { RoundResult } from '../game/logic';
import { RubberHoseCharacterIcon } from './RubberHoseCharacters';
import fondDuelWebp from '../assets/images/fond_duel.webp';
import fondDuelJpg from '../assets/images/fond_duel.jpg';
import handOpenLeftWebp from '../assets/images/hand_open_left.webp';
import handOpenRightWebp from '../assets/images/hand_open.webp';
import handFistLeftWebp from '../assets/images/hand_fist_left.webp';
import handFistRightWebp from '../assets/images/hand_fist.webp';

interface ArenaDuelProps {
  playerCard: { type: CardType } | null;
  botCard: { type: CardType } | null;
  result: RoundResult | null;
  isResolving: boolean;
}

const TYPE_TRANSLATIONS: Record<CardType, string> = {
  ROCK: 'PIERRE',
  PAPER: 'FEUILLE',
  SCISSORS: 'CISEAUX'
};

export const ArenaDuel: React.FC<ArenaDuelProps> = ({
  playerCard,
  botCard,
  result,
  isResolving,
}) => {
  return (
    <div className="arena-duel-container" aria-label="Zone d'affrontement">
      {/* Duel Header / Status with Animated Cartoon Avatars */}
      <div className="duel-header-banner">
        <div className={`banner-side player-side-tag ${result === 'PLAYER' ? 'side-winner' : result === 'BOT' ? 'side-loser' : ''}`}>
          {playerCard && (
            <div className={`duel-avatar-token player-token ${isResolving ? 'token-clash-left' : ''} ${result === 'PLAYER' ? 'token-victory' : result === 'BOT' ? 'token-defeat' : ''}`}>
              <RubberHoseCharacterIcon type={playerCard.type} size={54} />
            </div>
          )}
          <div className="tag-text-block">
            <span className="tag-title">VOTRE CHOIX</span>
            <span className="tag-move">
              {playerCard ? TYPE_TRANSLATIONS[playerCard.type] : 'EN ATTENTE...'}
            </span>
          </div>
        </div>

        <div className="duel-vs-badge">VS</div>

        <div className={`banner-side bot-side-tag ${result === 'BOT' ? 'side-winner' : result === 'PLAYER' ? 'side-loser' : ''}`}>
          <div className="tag-text-block">
            <span className="tag-title">CHOIX DE L'IA</span>
            <span className="tag-move">
              {botCard ? TYPE_TRANSLATIONS[botCard.type] : 'EN ATTENTE...'}
            </span>
          </div>
          {botCard && (
            <div className={`duel-avatar-token bot-token ${isResolving ? 'token-clash-right' : ''} ${result === 'BOT' ? 'token-victory' : result === 'PLAYER' ? 'token-defeat' : ''}`}>
              <RubberHoseCharacterIcon type={botCard.type} size={54} />
            </div>
          )}
        </div>
      </div>

      {/* Main Duel Stage: The Authentic Alleyway Stage with Duel Table & Rubber-Hose Hands */}
      <div className="duel-table-stage">
        {/* Authentic Background Alleyway with Duel Table */}
        <div className="stage-background-wrap" aria-hidden="true">
          <picture>
            <source srcSet={fondDuelWebp} type="image/webp" />
            <img 
              src={fondDuelJpg} 
              alt="Arène de duel en ruelle vintage" 
              className="stage-bg-image"
              draggable={false}
            />
          </picture>
          <div className="stage-shadow-vignette" />
        </div>

        <svg 
          className="table-stage-svg" 
          viewBox="0 0 540 290" 
          xmlns="http://www.w3.org/2000/svg"
        >

          {/* PLAYER RUBBER-HOSE ARM & HAND (Left Side) */}
          <g className={`rubber-arm player-arm ${playerCard ? 'striking' : 'idle'} ${isResolving ? 'resolving-clash' : ''}`}>
            {(!playerCard || playerCard.type === 'PAPER') ? (
              /* AUTHENTIC HIGH-RES OPEN HAND FROM main.jpg */
              <g className="raster-hand-group player-hand-open">
                <image 
                  href={handOpenLeftWebp} 
                  x="-25" 
                  y="85" 
                  width="225" 
                  height="178" 
                  className="table-raster-hand"
                />
              </g>
            ) : (
              /* Arm and specialized glove (Rock fist / Scissors) */
              <>
                <path 
                  d="M-20 260 C60 260 80 165 145 145" 
                  fill="none" 
                  stroke="#121212" 
                  strokeWidth="20" 
                  strokeLinecap="round" 
                />
                <g transform="translate(145, 125)">
                  <ellipse cx="0" cy="18" rx="14" ry="8" fill="#f5f2e8" stroke="#121212" strokeWidth="5" />

                  {playerCard.type === 'ROCK' && (
                    /* AUTHENTIC CLENCHED GLOVED FIST */
                    <g transform="translate(10, -22)">
                      <image 
                        href={handFistLeftWebp} 
                        x="0" 
                        y="0" 
                        width="68" 
                        height="76" 
                        className="table-raster-fist"
                      />
                    </g>
                  )}

                  {playerCard.type === 'SCISSORS' && (
                    /* TWO SNIPPING FINGERS */
                    <g className="glove-scissors">
                      <ellipse cx="28" cy="6" rx="24" ry="20" fill="#f5f2e8" stroke="#121212" strokeWidth="5" />
                      <path d="M38 -10 C62 -26 78 -14 56 2" fill="#f5f2e8" stroke="#121212" strokeWidth="4.5" />
                      <path d="M40 4 C64 12 76 2 58 -4" fill="#f5f2e8" stroke="#121212" strokeWidth="4.5" />
                      <path d="M24 15 Q34 22 40 14" fill="#f5f2e8" stroke="#121212" strokeWidth="4" />
                      <path d="M18 9 Q26 18 34 10" fill="#f5f2e8" stroke="#121212" strokeWidth="4" />
                      <path d="M8 0 L16 0 M8 5 L16 5 M9 10 L16 10" stroke="#121212" strokeWidth="2.5" strokeLinecap="round" />
                    </g>
                  )}
                </g>
              </>
            )}
          </g>

          {/* BOT / IA CARTOON ARM & HAND (Right Side) */}
          <g className={`rubber-arm bot-arm ${botCard ? 'striking' : 'idle'} ${isResolving ? 'resolving-clash' : ''}`}>
            {(!botCard || botCard.type === 'PAPER') ? (
              /* AUTHENTIC HIGH-RES OPEN HAND FROM main.jpg (Mirrored) */
              <g className="raster-hand-group bot-hand-open">
                <image 
                  href={handOpenRightWebp} 
                  x="340" 
                  y="85" 
                  width="225" 
                  height="178" 
                  className="table-raster-hand"
                />
              </g>
            ) : (
              <>
                <path 
                  d="M560 260 C480 260 460 165 395 145" 
                  fill="none" 
                  stroke="#121212" 
                  strokeWidth="20" 
                  strokeLinecap="round" 
                />
                <path d="M525 252 L535 264 M485 225 L495 238 M445 185 L453 198 M415 154 L422 166" stroke="#f5f2e8" strokeWidth="6" strokeLinecap="round" />

                <g transform="translate(395, 125) scale(-1, 1)">
                  <ellipse cx="0" cy="18" rx="15" ry="9" fill="#2a2a2a" stroke="#121212" strokeWidth="5" />

                  {botCard.type === 'ROCK' && (
                    <g transform="translate(10, -22)">
                      <image 
                        href={handFistRightWebp} 
                        x="0" 
                        y="0" 
                        width="68" 
                        height="76" 
                        className="table-raster-fist"
                      />
                    </g>
                  )}

                  {botCard.type === 'SCISSORS' && (
                    <g className="bot-glove-scissors">
                      <ellipse cx="30" cy="6" rx="26" ry="21" fill="#323232" stroke="#121212" strokeWidth="5" />
                      <path d="M40 -10 C62 -26 78 -14 56 2" fill="#323232" stroke="#121212" strokeWidth="4.5" />
                      <path d="M42 4 C64 12 76 2 58 -4" fill="#323232" stroke="#121212" strokeWidth="4.5" />
                      <path d="M26 15 Q36 22 42 14" fill="#252525" stroke="#121212" strokeWidth="4" />
                    </g>
                  )}
                </g>
              </>
            )}
          </g>


          {/* DUEL IMPACT CLASH EFFECT IN CENTER OVER TABLE */}
          {isResolving && (
            <g className="comic-clash-burst" transform="translate(270, 120)">
              {/* Starburst explosion rays */}
              <polygon 
                points="0,-50 16,-20 48,-36 26,-7 56,10 22,18 36,50 7,26 -11,54 -18,22 -52,32 -26,4 -56,-16 -20,-16 -32,-45 0,-18" 
                fill="#fbf9f2" 
                stroke="#121212" 
                strokeWidth="6" 
                className="starburst-flash"
              />
              <polygon 
                points="0,-34 10,-14 32,-25 18,-5 38,6 16,11 25,34 5,18 -7,36 -12,15 -34,20 -18,2 -38,-10 -14,-10 -20,-29 0,-11" 
                fill="#ded7c4" 
                stroke="#121212" 
                strokeWidth="3.5" 
              />
              <line x1="-65" y1="-35" x2="-90" y2="-50" stroke="#121212" strokeWidth="5" strokeLinecap="round" />
              <line x1="65" y1="-35" x2="90" y2="-50" stroke="#121212" strokeWidth="5" strokeLinecap="round" />
              <line x1="-70" y1="25" x2="-95" y2="35" stroke="#121212" strokeWidth="5" strokeLinecap="round" />
              <line x1="70" y1="25" x2="95" y2="35" stroke="#121212" strokeWidth="5" strokeLinecap="round" />
              <text 
                x="0" 
                y="12" 
                textAnchor="middle" 
                fontFamily="'Chewy', cursive, sans-serif" 
                fontSize="36" 
                fill="#121212" 
                fontWeight="bold"
                className="pow-text"
              >
                POW!
              </text>
            </g>
          )}
        </svg>

        {/* OUTCOME BANNER (VICTOIRE / DÉFAITE / ÉGALITÉ) */}
        {result && (
          <div className={`round-result-card ${result.toLowerCase()}`}>
            <div className="card-border-ornament">
              <span className="banner-star">★</span>
              <span className="banner-title">
                {result === 'PLAYER' && 'VICTOIRE DU JOUEUR !'}
                {result === 'BOT' && "L'ORDI MARQUE UN POINT !"}
                {result === 'DRAW' && 'ÉGALITÉ PARFAITE !'}
              </span>
              <span className="banner-star">★</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
