import React from 'react';
import { CardType } from '../game/types';
import { RoundResult } from '../game/logic';
import { RubberHoseCharacterIcon } from './RubberHoseCharacters';
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

      {/* Main Duel Stage: The Hand-Drawn Wooden Table with Authentic Rubber-Hose Hands */}
      <div className="duel-table-stage">
        <svg 
          className="table-stage-svg" 
          viewBox="0 0 540 290" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Backdrop shadows under table */}
          <ellipse cx="270" cy="265" rx="220" ry="22" fill="#000" opacity="0.4" />

          {/* Wooden Table Legs */}
          <g className="table-legs" stroke="#121212" strokeWidth="5.5" fill="#46382a">
            {/* Left front leg */}
            <rect x="75" y="195" width="28" height="75" rx="3" />
            <line x1="89" y1="195" x2="89" y2="270" stroke="#121212" strokeWidth="2" />
            {/* Right front leg */}
            <rect x="437" y="195" width="28" height="75" rx="3" />
            <line x1="451" y1="195" x2="451" y2="270" stroke="#121212" strokeWidth="2" />
            {/* Center crossbeam */}
            <rect x="103" y="225" width="334" height="16" fill="#382d22" />
          </g>

          {/* Hand-Drawn Wooden Table Surface */}
          <g className="wooden-table">
            {/* Table edge apron */}
            <polygon 
              points="40,185 500,185 485,210 55,210" 
              fill="#524233" 
              stroke="#121212" 
              strokeWidth="5.5" 
              strokeLinejoin="round" 
            />
            {/* Tabletop plank perspective */}
            <polygon 
              points="75,120 465,120 500,185 40,185" 
              fill="#6b5744" 
              stroke="#121212" 
              strokeWidth="5.5" 
              strokeLinejoin="round" 
            />

            {/* Wood plank separator lines */}
            <path d="M172 120 L154 185" stroke="#121212" strokeWidth="3.5" />
            <path d="M270 120 L270 185" stroke="#121212" strokeWidth="3.5" />
            <path d="M368 120 L386 185" stroke="#121212" strokeWidth="3.5" />

            {/* Hand-drawn wood grain and knots */}
            <g stroke="#121212" strokeWidth="2" fill="none" opacity="0.6">
              <path d="M100 138 Q115 152 105 170" />
              <path d="M130 128 Q140 155 132 175" />
              <ellipse cx="112" cy="150" rx="4" ry="2.5" fill="#121212" />

              <path d="M200 135 Q215 150 210 172" />
              <path d="M240 130 Q250 155 242 180" />
              <ellipse cx="225" cy="155" rx="5" ry="3" fill="#121212" />

              <path d="M300 135 Q315 152 305 172" />
              <path d="M335 130 Q345 150 338 178" />

              <path d="M410 138 Q430 152 420 172" />
              <path d="M445 128 Q455 155 448 180" />
              <ellipse cx="430" cy="150" rx="4" ry="2.5" fill="#121212" />
            </g>

            {/* Corner table iron nails / studs */}
            <circle cx="58" cy="192" r="3.5" fill="#121212" />
            <circle cx="482" cy="192" r="3.5" fill="#121212" />
          </g>

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
