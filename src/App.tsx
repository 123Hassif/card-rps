import React, { useMemo } from 'react';
import { useGameEngine } from './hooks/useGameEngine';
import { PlayingCard } from './components/Card';
import { CartoonFilters } from './components/CartoonFilters';
import { AlleyBackground } from './components/AlleyBackground';
import { ScoreboardFilm } from './components/ScoreboardFilm';
import { ArenaDuel } from './components/ArenaDuel';
import { RockCharacter, PaperCharacter, ScissorsCharacter } from './components/RubberHoseCharacters';
import { CardType } from './game/types';
import './index.css';

const App: React.FC = () => {
  const { state, selectDraftCard, playCard, resetGame } = useGameEngine();
  const { phase, draftPool, playerHand, botHand, playerScore, botScore, currentRound, isResolving } = state;

  // Counts of each card type in the player's hand
  const handCounts = useMemo(() => {
    return {
      ROCK: playerHand.filter(c => c.type === 'ROCK').length,
      PAPER: playerHand.filter(c => c.type === 'PAPER').length,
      SCISSORS: playerHand.filter(c => c.type === 'SCISSORS').length,
    };
  }, [playerHand]);

  // Handler to play a specific card type from the hand
  const handleChoiceClick = (type: CardType) => {
    if (phase !== 'PLAYING' || isResolving) return;
    const cardToPlay = playerHand.find(c => c.type === type);
    if (cardToPlay) {
      playCard(cardToPlay.id);
    }
  };

  return (
    <div className="retro-cartoon-app">
      {/* SVG Hand-Drawn & Film Filters */}
      <CartoonFilters />

      {/* Film Overlays: Grain, Scratches, Projector Flicker, Iris Vignette */}
      <div className="film-vignette-overlay" aria-hidden="true" />
      <div className="film-grain-overlay" aria-hidden="true" />
      <div className="film-scratch scratch-1" aria-hidden="true" />
      <div className="film-scratch scratch-2" aria-hidden="true" />

      {/* Main Game Shell */}
      <div className="cartoon-stage">
        {/* TOP HEADER: Title & 35mm Film Scoreboard */}
        <header className="cartoon-header">
          <div className="title-banner">
            <div className="title-ribbon">
              <span className="star-deco">★</span>
              <h1 className="main-title jitter-text">
                CHIFOUMI RÉTRO : LE CHOC DES CARTOONS !
              </h1>
              <span className="star-deco">★</span>
            </div>
            <p className="subtitle jitter-text-subtle">
              — CINÉMA MUET &bull; 1930 &bull; RUBBER HOSE ANIMATION —
            </p>
          </div>

          {/* Film Strip Scoreboard in top-right */}
          <ScoreboardFilm 
            playerScore={playerScore} 
            botScore={botScore} 
            targetScore={2} 
          />
        </header>

        {/* MAIN BODY: Alley on the left, Duel & Controls on the right */}
        <main className="cartoon-theater">
          {/* LEFT BACKGROUND: Dark Alley, Barrels, Water Tower, Wanted Posters */}
          <aside className="theater-alley-wing">
            <AlleyBackground />
          </aside>

          {/* RIGHT / MAIN CONTENT: Duel Arena, Draft, and Choice Buttons */}
          <section className="theater-main-stage">
            {/* DRAFT PHASE MODAL / OVERLAY */}
            {phase === 'DRAFT' && (
              <div className="draft-silent-card">
                <div className="silent-card-frame">
                  <h2 className="draft-title jitter-text">
                    SÉLECTIONNEZ 3 CARTOONS !
                  </h2>
                  <p className="draft-instructions">
                    Piochez 3 héros dans la réserve pour défier le terrible Bot de l'allée sombre :
                  </p>

                  <div className="draft-pool-row">
                    {draftPool.map(card => (
                      <div key={card.id} className="draft-item">
                        <PlayingCard
                          type={card.type}
                          onClick={() => selectDraftCard(card.id)}
                          className="draft-card-btn"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="draft-status-badge">
                    <span>CARTOONS EN MAIN : <strong>{playerHand.length} / 3</strong></span>
                  </div>
                </div>
              </div>
            )}

            {/* PLAYING OR ENDED PHASES */}
            {phase !== 'DRAFT' && (
              <div className="gameplay-area">
                {/* BOT HAND CARDS AT THE TOP */}
                <div className="bot-hand-row" aria-label="Main de l'ordinateur">
                  <span className="hand-owner-badge">MAIN DU BOT ({botHand.length})</span>
                  <div className="bot-cards-container">
                    {botHand.map((card, idx) => (
                      <PlayingCard
                        key={card.id || `bot-card-${idx}`}
                        disabled
                        className="bot-face-down-card"
                      />
                    ))}
                    {botHand.length === 0 && (
                      <span className="empty-hand-notice">Plus de cartes</span>
                    )}
                  </div>
                </div>

                {/* RESULT ZONE (DUEL ARENA WITH DRAWN WOODEN TABLE & RUBBER-HOSE HANDS) */}
                <div className="arena-wrapper">
                  <ArenaDuel
                    playerCard={currentRound.playerCard}
                    botCard={currentRound.botCard}
                    result={currentRound.result}
                    isResolving={isResolving}
                  />
                </div>

                {/* THREE DISTINCT CIRCULAR CHOICE BUTTONS (CENTERED HORIZONTALLY) */}
                <div className="choices-section">
                  <div className="choices-heading-wrap">
                    <span className="choices-heading jitter-text-subtle">
                      {isResolving 
                        ? 'RÉSOLUTION DU DUEL...' 
                        : 'CHOISISSEZ VOTRE ARMEMENT !'}
                    </span>
                  </div>

                  <div className="choice-buttons-row">
                    {/* BUTTON 1: PIERRE (ROCK) */}
                    <button
                      type="button"
                      id="btn-rock"
                      className={`rubber-hose-circle-btn rock-btn ${handCounts.ROCK === 0 || isResolving || phase === 'ENDED' ? 'disabled' : ''}`}
                      onClick={() => handleChoiceClick('ROCK')}
                      disabled={handCounts.ROCK === 0 || isResolving || phase === 'ENDED'}
                      aria-label="Pierre"
                    >
                      <div className="circle-btn-inner">
                        <RockCharacter size={140} />
                        <span className="btn-title-label">PIERRE</span>
                        <span className="btn-qty-badge">{handCounts.ROCK} dispo</span>
                      </div>
                    </button>

                    {/* BUTTON 2: FEUILLE (PAPER) */}
                    <button
                      type="button"
                      id="btn-paper"
                      className={`rubber-hose-circle-btn paper-btn ${handCounts.PAPER === 0 || isResolving || phase === 'ENDED' ? 'disabled' : ''}`}
                      onClick={() => handleChoiceClick('PAPER')}
                      disabled={handCounts.PAPER === 0 || isResolving || phase === 'ENDED'}
                      aria-label="Feuille"
                    >
                      <div className="circle-btn-inner">
                        <PaperCharacter size={140} />
                        <span className="btn-title-label">FEUILLE</span>
                        <span className="btn-qty-badge">{handCounts.PAPER} dispo</span>
                      </div>
                    </button>

                    {/* BUTTON 3: CISEAUX (SCISSORS) */}
                    <button
                      type="button"
                      id="btn-scissors"
                      className={`rubber-hose-circle-btn scissors-btn ${handCounts.SCISSORS === 0 || isResolving || phase === 'ENDED' ? 'disabled' : ''}`}
                      onClick={() => handleChoiceClick('SCISSORS')}
                      disabled={handCounts.SCISSORS === 0 || isResolving || phase === 'ENDED'}
                      aria-label="Ciseaux"
                    >
                      <div className="circle-btn-inner">
                        <ScissorsCharacter size={140} />
                        <span className="btn-title-label">CISEAUX</span>
                        <span className="btn-qty-badge">{handCounts.SCISSORS} dispo</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* GAME OVER MODAL (SILENT MOVIE TITLE CARD) */}
                {phase === 'ENDED' && !currentRound.result && (
                  <div className="game-over-overlay">
                    <div className="silent-title-card">
                      <div className="ornament-corner top-left">★</div>
                      <div className="ornament-corner top-right">★</div>
                      <div className="ornament-corner bottom-left">★</div>
                      <div className="ornament-corner bottom-right">★</div>

                      <h2 className="end-title jitter-text">FIN DU CARTOON !</h2>
                      <p className="end-outcome">
                        {playerScore === botScore
                          ? "MATCH NUL DANS L'ALLÉE !"
                          : playerScore >= 2
                          ? 'VICTOIRE ! LE JOUEUR EST LE CHAMPION !'
                          : "LE BOT L'EMPORTE CETTE FOIS-CI..."}
                      </p>

                      <div className="end-scores">
                        <span>SCORE FINAL — VOUS : {playerScore} | BOT : {botScore}</span>
                      </div>

                      <button 
                        type="button"
                        className="btn-replay jitter-text-subtle" 
                        onClick={resetGame}
                      >
                        🎬 REJOUER LE CARTOON
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
