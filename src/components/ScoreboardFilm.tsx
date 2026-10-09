import React from 'react';

interface ScoreboardProps {
  playerScore: number;
  botScore: number;
  targetScore?: number;
}

export const ScoreboardFilm: React.FC<ScoreboardProps> = ({ 
  playerScore, 
  botScore, 
  targetScore = 2 
}) => {
  return (
    <div className="film-strip-scoreboard" aria-label="Tableau des scores pellicule de film">
      {/* Top Film Sprockets Perforation */}
      <div className="film-sprockets top-sprockets">
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
      </div>

      {/* Main Scoreboard Content */}
      <div className="film-content">
        <div className="film-header-tag">
          <span className="reel-text">★ 35MM SOUND CARTOON ★</span>
        </div>

        <div className="scores-duel">
          {/* PLAYER SCORE */}
          <div className="film-score-box player-box">
            <span className="score-label">JOUEUR</span>
            <div className="flip-counter">
              <div className="flip-card">
                <div className="card-top">{playerScore}</div>
                <div className="card-seam" />
                <div className="card-bottom">{playerScore}</div>
              </div>
              <span className="counter-slash">/</span>
              <span className="counter-target">{targetScore}</span>
            </div>
          </div>

          <div className="score-divider">VS</div>

          {/* BOT SCORE */}
          <div className="film-score-box bot-box">
            <span className="score-label">ORDI</span>
            <div className="flip-counter">
              <div className="flip-card">
                <div className="card-top">{botScore}</div>
                <div className="card-seam" />
                <div className="card-bottom">{botScore}</div>
              </div>
              <span className="counter-slash">/</span>
              <span className="counter-target">{targetScore}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Film Sprockets Perforation */}
      <div className="film-sprockets bottom-sprockets">
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
        <span className="sprocket-hole" />
      </div>
    </div>
  );
};
