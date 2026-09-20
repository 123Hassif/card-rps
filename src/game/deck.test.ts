import { describe, it, expect } from 'vitest';
import { createDeck, shuffleDeck, drawCards } from './deck';

describe('Deck Operations', () => {
  it('should create a deck of 15 cards with 5 of each type', () => {
    const deck = createDeck();
    expect(deck).toHaveLength(15);
    
    const rocks = deck.filter(c => c.type === 'ROCK');
    const papers = deck.filter(c => c.type === 'PAPER');
    const scissors = deck.filter(c => c.type === 'SCISSORS');
    
    expect(rocks).toHaveLength(5);
    expect(papers).toHaveLength(5);
    expect(scissors).toHaveLength(5);
  });

  it('should shuffle a deck without losing cards', () => {
    const deck = createDeck();
    const shuffled = shuffleDeck(deck);
    
    expect(shuffled).toHaveLength(deck.length);
    expect(shuffled).not.toBe(deck);
  });

  it('should draw a specific number of cards', () => {
    const deck = createDeck();
    const { drawn, remaining } = drawCards(deck, 3);
    
    expect(drawn).toHaveLength(3);
    expect(remaining).toHaveLength(12);
  });
});
