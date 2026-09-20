import React from 'react';
import { useGameEngine } from './hooks/useGameEngine';
import { PlayingCard } from './components/Card';
import './index.css';

function App() {
  const { state, playCard, resetGame } = useGameEngine();
  
  const { playerHand, botHand, playerScore, botScore, currentRound, isResolving, gameOver } = state;

  return (
    <div className="game-container">
      <header className="header">
        <h1>CARD-RPS</h1>
        <div className="scoreboard">
          <div className="score">
            <span>YOU</span>
            <span className="score-number">{playerScore}</span>
          </div>
          <div className="score">
            <span>BOT</span>
            <span className="score-number">{botScore}</span>
          </div>
        </div>
      </header>

      <main className="board">
        {/* BOT HAND */}
        <div className="hand bot-hand">
          {botHand.map((card, i) => (
            <PlayingCard key={card.id || `bot-${i}`} disabled className="bot-card" />
          ))}
        </div>

        {/* ARENA */}
        <div className="arena">
          {currentRound.botCard && (
            <div className="arena-card-wrapper bot-arena">
              <PlayingCard type={currentRound.botCard.type} disabled className="slide-down" />
            </div>
          )}
          
          <div className="arena-center">
            {currentRound.result && (
              <div className={`result-banner ${currentRound.result.toLowerCase()}`}>
                {currentRound.result === 'DRAW' ? 'DRAW!' : 
                 currentRound.result === 'PLAYER' ? 'YOU WIN!' : 'BOT WINS!'}
              </div>
            )}
            {gameOver && (
              <div className="game-over-modal">
                <h2>GAME OVER</h2>
                <p>{playerScore === botScore ? "It's a tie!" : playerScore > botScore ? "You are the champion!" : "Bot defeated you."}</p>
                <button className="btn-primary" onClick={resetGame}>PLAY AGAIN</button>
              </div>
            )}
          </div>

          {currentRound.playerCard && (
            <div className="arena-card-wrapper player-arena">
              <PlayingCard type={currentRound.playerCard.type} disabled className="slide-up" />
            </div>
          )}
        </div>

        {/* PLAYER HAND */}
        <div className="hand player-hand">
          {playerHand.map((card) => (
            <PlayingCard 
              key={card.id} 
              type={card.type} 
              onClick={() => playCard(card.id)} 
              disabled={isResolving || gameOver}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
