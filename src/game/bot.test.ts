import { describe, it, expect } from 'vitest';
import { playRandomCard } from './bot';
import { Card } from './types';

describe('Bot AI', () => {
  it('should play a card from its hand', () => {
    const hand: Card[] = [
      { id: '1', type: 'ROCK' },
      { id: '2', type: 'PAPER' }
    ];
    
    const playedCard = playRandomCard(hand);
    expect(hand).toContain(playedCard);
  });

  it('should throw an error if hand is empty', () => {
    expect(() => playRandomCard([])).toThrowError("Cannot play from an empty hand");
  });
});
