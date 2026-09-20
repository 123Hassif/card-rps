import { describe, it, expect } from 'vitest';
import { determineWinner } from './logic';

describe('Game Logic: determineWinner', () => {
  it('should return DRAW if cards are identical', () => {
    expect(determineWinner('ROCK', 'ROCK')).toBe('DRAW');
    expect(determineWinner('PAPER', 'PAPER')).toBe('DRAW');
    expect(determineWinner('SCISSORS', 'SCISSORS')).toBe('DRAW');
  });

  it('should return PLAYER when player wins', () => {
    expect(determineWinner('ROCK', 'SCISSORS')).toBe('PLAYER');
    expect(determineWinner('PAPER', 'ROCK')).toBe('PLAYER');
    expect(determineWinner('SCISSORS', 'PAPER')).toBe('PLAYER');
  });

  it('should return BOT when bot wins', () => {
    expect(determineWinner('SCISSORS', 'ROCK')).toBe('BOT');
    expect(determineWinner('ROCK', 'PAPER')).toBe('BOT');
    expect(determineWinner('PAPER', 'SCISSORS')).toBe('BOT');
  });
});
