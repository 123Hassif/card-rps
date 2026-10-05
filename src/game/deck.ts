import { Card, CardType } from './types';

export const CARD_TYPES: CardType[] = ['ROCK', 'PAPER', 'SCISSORS'];

export function createPool(): Card[] {
  const pool: Card[] = [];
  // 2 of each card (Total 6)
  for (let i = 0; i < 2; i++) {
    for (const type of CARD_TYPES) {
      pool.push({
        id: `${type}-${i}`,
        type
      });
    }
  }
  return pool;
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
