import { Card, CardType } from './types';

export const CARD_TYPES: CardType[] = ['ROCK', 'PAPER', 'SCISSORS'];

export function createDeck(): Card[] {
  const deck: Card[] = [];
  for (let i = 0; i < 5; i++) {
    for (const type of CARD_TYPES) {
      deck.push({
        id: `${type}-${i}`,
        type
      });
    }
  }
  return deck;
}

export function shuffleDeck(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function drawCards(deck: Card[], count: number): { drawn: Card[], remaining: Card[] } {
  return {
    drawn: deck.slice(0, count),
    remaining: deck.slice(count)
  };
}
