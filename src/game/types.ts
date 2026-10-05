export type CardType = 'ROCK' | 'PAPER' | 'SCISSORS';
export type PlayerType = 'PLAYER' | 'BOT';
export type GamePhase = 'DRAFT' | 'PLAYING' | 'ENDED';

export interface Card {
  id: string;
  type: CardType;
}
