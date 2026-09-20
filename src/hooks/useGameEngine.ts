import { useState, useCallback, useEffect } from 'react';
import { Card } from '../game/types';
import { createDeck, shuffleDeck, drawCards } from '../game/deck';
import { determineWinner, RoundResult } from '../game/logic';
import { playRandomCard } from '../game/bot';

interface GameState {
  playerDeck: Card[];
  botDeck: Card[];
  playerHand: Card[];
  botHand: Card[];
  playerScore: number;
  botScore: number;
  currentRound: {
    playerCard: Card | null;
    botCard: Card | null;
    result: RoundResult | null;
  };
  isResolving: boolean;
  gameOver: boolean;
}

const HAND_SIZE = 3;

export function useGameEngine() {
  const [state, setState] = useState<GameState>({
    playerDeck: [],
    botDeck: [],
    playerHand: [],
    botHand: [],
    playerScore: 0,
    botScore: 0,
    currentRound: { playerCard: null, botCard: null, result: null },
    isResolving: false,
    gameOver: false,
  });

  // Init game
  useEffect(() => {
    const pDeck = shuffleDeck(createDeck());
    const bDeck = shuffleDeck(createDeck());
    const pDraw = drawCards(pDeck, HAND_SIZE);
    const bDraw = drawCards(bDeck, HAND_SIZE);

    setState(s => ({
      ...s,
      playerDeck: pDraw.remaining,
      playerHand: pDraw.drawn,
      botDeck: bDraw.remaining,
      botHand: bDraw.drawn,
    }));
  }, []);

  const playCard = useCallback((cardId: string) => {
    if (state.isResolving || state.gameOver) return;

    const playerCard = state.playerHand.find(c => c.id === cardId);
    if (!playerCard) return;

    // Bot plays
    const botCard = playRandomCard(state.botHand);

    // Resolve
    const result = determineWinner(playerCard.type, botCard.type);

    // Update hands and round state
    setState(s => ({
      ...s,
      playerHand: s.playerHand.filter(c => c.id !== cardId),
      botHand: s.botHand.filter(c => c.id !== botCard.id),
      currentRound: { playerCard, botCard, result },
      isResolving: true,
      playerScore: result === 'PLAYER' ? s.playerScore + 1 : s.playerScore,
      botScore: result === 'BOT' ? s.botScore + 1 : s.botScore,
    }));

    // Wait a bit, then draw new cards and reset round
    setTimeout(() => {
      setState(s => {
        const pDraw = drawCards(s.playerDeck, 1);
        const bDraw = drawCards(s.botDeck, 1);

        const newPlayerHand = [...s.playerHand, ...pDraw.drawn];
        const newBotHand = [...s.botHand, ...bDraw.drawn];

        const isOver = newPlayerHand.length === 0;

        return {
          ...s,
          playerDeck: pDraw.remaining,
          botDeck: bDraw.remaining,
          playerHand: newPlayerHand,
          botHand: newBotHand,
          currentRound: { playerCard: null, botCard: null, result: null },
          isResolving: false,
          gameOver: isOver,
        };
      });
    }, 2000); // 2 seconds animation/suspense
  }, [state]);

  const resetGame = useCallback(() => {
    const pDeck = shuffleDeck(createDeck());
    const bDeck = shuffleDeck(createDeck());
    const pDraw = drawCards(pDeck, HAND_SIZE);
    const bDraw = drawCards(bDeck, HAND_SIZE);

    setState({
      playerDeck: pDraw.remaining,
      botDeck: bDraw.remaining,
      playerHand: pDraw.drawn,
      botHand: bDraw.drawn,
      playerScore: 0,
      botScore: 0,
      currentRound: { playerCard: null, botCard: null, result: null },
      isResolving: false,
      gameOver: false,
    });
  }, []);

  return { state, playCard, resetGame };
}
