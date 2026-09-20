import { Card } from './types';

export function playRandomCard(hand: Card[]): Card {
  if (hand.length === 0) {
    throw new Error("Cannot play from an empty hand");
  }
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}
