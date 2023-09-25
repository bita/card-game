import { ImageCardType } from "@/app/types/imageCard.type";
import { CARD_STATE } from "../../Gameboard/fixtures";

export function getFlippedCardsIds(cards: ImageCardType[]) {
  return cards.filter((card) => card.cardState === CARD_STATE.FLIPPED);
}

export function getFlippedCards(cards: ImageCardType[]) {
  return cards.filter((card) => card.cardState === CARD_STATE.FLIPPED).map((card) => card.cardId);
}

export function getGameFinished(cards: ImageCardType[]) {
  return cards.length > 0 &&
    cards.filter((card) => card.cardState === CARD_STATE.UNMATCH).length === 0
    ? true
    : false;
}

export function getIsFlippedCardsMatch(cards: ImageCardType[]) {
  const flippedCards = getFlippedCardsIds(cards);
  return flippedCards.filter((card) => card.id === flippedCards[0].id)
}
