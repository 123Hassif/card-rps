import { useGameEngine } from './hooks/useGameEngine';
import { PlayingCard } from './components/Card';
import './index.css';

function App() {
  const { state, selectDraftCard, playCard, resetGame } = useGameEngine();
  
  const { phase, draftPool, playerHand, botHand, playerScore, botScore, currentRound, isResolving } = state;

  return (
    <div className="game-container">
      <header className="header">
        <h1>CARD-RPS</h1>
        <div className="scoreboard">
          <div className="score">
            <span>YOU</span>
            <span className="score-number">{playerScore}/2</span>
          </div>
          <div className="score">
            <span>BOT</span>
            <span className="score-number">{botScore}/2</span>
          </div>
        </div>
      </header>

      <main className="board">
        {phase === 'DRAFT' && (
          <div className="draft-screen">
            <h2>CHOOSE 3 CARDS</h2>
            <div className="draft-pool">
              {draftPool.map(card => (
                <PlayingCard 
                  key={card.id} 
                  type={card.type} 
                  onClick={() => selectDraftCard(card.id)} 
                />
              ))}
            </div>
            <p>Selected: {playerHand.length} / 3</p>
          </div>
        )}

        {phase !== 'DRAFT' && (
          <>
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
                {phase === 'ENDED' && !currentRound.result && (
                  <div className="game-over-modal">
                    <h2>GAME OVER</h2>
                    <p>{playerScore === botScore ? "IT'S A TIE!" : playerScore >= 2 ? "YOU ARE THE CHAMPION!" : "BOT DEFEATED YOU."}</p>
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
          </>
        )}

        {/* PLAYER HAND */}
        <div className="hand player-hand">
          {playerHand.map((card) => (
            <PlayingCard 
              key={card.id} 
              type={card.type} 
              onClick={() => phase === 'PLAYING' ? playCard(card.id) : undefined} 
              disabled={isResolving || phase === 'ENDED'}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
