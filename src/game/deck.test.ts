import { describe, it, expect } from 'vitest';
import { createPool, shuffleDeck } from './deck';

describe('Deck Operations', () => {
  it('should create a pool of 6 cards with 2 of each type', () => {
    const pool = createPool();
    expect(pool).toHaveLength(6);
    
    const rocks = pool.filter(c => c.type === 'ROCK');
    const papers = pool.filter(c => c.type === 'PAPER');
    const scissors = pool.filter(c => c.type === 'SCISSORS');
    
    expect(rocks).toHaveLength(2);
    expect(papers).toHaveLength(2);
    expect(scissors).toHaveLength(2);
  });

  it('should shuffle a deck without losing cards', () => {
    const pool = createPool();
    const shuffled = shuffleDeck(pool);
    
    expect(shuffled).toHaveLength(pool.length);
    expect(shuffled).not.toBe(pool);
  });
});
