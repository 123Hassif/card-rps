import { useState, useCallback, useEffect } from 'react';
import { Card, GamePhase } from '../game/types';
import { createPool, shuffleDeck } from '../game/deck';
import { determineWinner, RoundResult } from '../game/logic';
import { playRandomCard } from '../game/bot';

interface GameState {
  phase: GamePhase;
  draftPool: Card[];
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
}

const HAND_SIZE = 3;
const SCORE_TO_WIN = 2;

export function useGameEngine() {
  const [state, setState] = useState<GameState>({
    phase: 'DRAFT',
    draftPool: [],
    playerHand: [],
    botHand: [],
    playerScore: 0,
    botScore: 0,
    currentRound: { playerCard: null, botCard: null, result: null },
    isResolving: false,
  });

  // Init draft pool
  useEffect(() => {
    setState(s => ({
      ...s,
      draftPool: createPool()
    }));
  }, []);

  const selectDraftCard = useCallback((cardId: string) => {
    if (state.phase !== 'DRAFT') return;

    setState(s => {
      const cardToPick = s.draftPool.find(c => c.id === cardId);
      if (!cardToPick || s.playerHand.length >= HAND_SIZE) return s;

      const newHand = [...s.playerHand, cardToPick];
      const newPool = s.draftPool.filter(c => c.id !== cardId);

      // Check if draft is finished for player
      if (newHand.length === HAND_SIZE) {
        // Bot automatically drafts 3 random cards
        const botPool = shuffleDeck(createPool());
        const botHand = botPool.slice(0, HAND_SIZE);

        return {
          ...s,
          draftPool: [],
          playerHand: newHand,
          botHand: botHand,
          phase: 'PLAYING'
        };
      }

      return {
        ...s,
        draftPool: newPool,
        playerHand: newHand
      };
    });
  }, [state.phase]);

  const playCard = useCallback((cardId: string) => {
    if (state.phase !== 'PLAYING' || state.isResolving) return;

    const playerCard = state.playerHand.find(c => c.id === cardId);
    if (!playerCard) return;

    // Bot plays
    const botCard = playRandomCard(state.botHand);

    // Resolve
    const result = determineWinner(playerCard.type, botCard.type);

    // Calculate new scores
    const newPlayerScore = result === 'PLAYER' ? state.playerScore + 1 : state.playerScore;
    const newBotScore = result === 'BOT' ? state.botScore + 1 : state.botScore;

    const newPlayerHand = state.playerHand.filter(c => c.id !== cardId);
    const newBotHand = state.botHand.filter(c => c.id !== botCard.id);

    setState(s => ({
      ...s,
      playerHand: newPlayerHand,
      botHand: newBotHand,
      currentRound: { playerCard, botCard, result },
      isResolving: true,
      playerScore: newPlayerScore,
      botScore: newBotScore,
    }));

    // Wait a bit, then reset round and check for end game
    setTimeout(() => {
      setState(s => {
        const isEnded = 
          newPlayerScore >= SCORE_TO_WIN || 
          newBotScore >= SCORE_TO_WIN || 
          newPlayerHand.length === 0;

        return {
          ...s,
          currentRound: { playerCard: null, botCard: null, result: null },
          isResolving: false,
          phase: isEnded ? 'ENDED' : 'PLAYING',
        };
      });
    }, 2000);
  }, [state]);

  const resetGame = useCallback(() => {
    setState({
      phase: 'DRAFT',
      draftPool: createPool(),
      playerHand: [],
      botHand: [],
      playerScore: 0,
      botScore: 0,
      currentRound: { playerCard: null, botCard: null, result: null },
      isResolving: false,
    });
  }, []);

  return { state, selectDraftCard, playCard, resetGame };
}
