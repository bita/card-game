import { allCards } from "./cards-init";

export default function shuffleCards(level: number = 4) {

  const initCards = allCards.slice(0, (level * level) / 2);
  const cards = [...initCards, ...initCards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random(), matched: false, flipped: false}));
    
    return cards;
};

