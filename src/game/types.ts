export type CardType = 'ROCK' | 'PAPER' | 'SCISSORS';
export type PlayerType = 'PLAYER' | 'BOT';

export interface Card {
  id: string;
  type: CardType;
}
