import { Card, CardType } from './types';

export function playSmartCard(hand: Card[], playerCardType: CardType): Card {
  if (hand.length === 0) {
    throw new Error("Cannot play from an empty hand");
  }

  // Anti-mirroring: on cherche les cartes qui sont différentes de celle du joueur
  const differentCards = hand.filter(c => c.type !== playerCardType);
  
  // 80% de chance d'éviter volontairement de jouer la même carte pour réduire les égalités
  if (differentCards.length > 0 && Math.random() < 0.8) {
    const randomIndex = Math.floor(Math.random() * differentCards.length);
    return differentCards[randomIndex];
  }

  // Fallback: tirage purement aléatoire classique
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}

export function playRandomCard(hand: Card[]): Card {
  if (hand.length === 0) {
    throw new Error("Cannot play from an empty hand");
  }
  const randomIndex = Math.floor(Math.random() * hand.length);
  return hand[randomIndex];
}
