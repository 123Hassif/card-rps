import { CardType, PlayerType } from './types';

export type RoundResult = PlayerType | 'DRAW';

export function determineWinner(playerCard: CardType, botCard: CardType): RoundResult {
  if (playerCard === botCard) {
    return 'DRAW';
  }
  if (
    (playerCard === 'ROCK' && botCard === 'SCISSORS') ||
    (playerCard === 'PAPER' && botCard === 'ROCK') ||
    (playerCard === 'SCISSORS' && botCard === 'PAPER')
  ) {
    return 'PLAYER';
  }
  return 'BOT';
}
