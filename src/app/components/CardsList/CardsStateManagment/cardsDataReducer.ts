import { ImageCardType, ImageType } from "@/app/types/imageCard.type";
import { getRandomPosNegInt } from "@/app/utils/math";

type AppAction = {
  type: string;
  payload?: any;
};

function shuffleCards(photos: ImageType[]) {
  const cards = [...photos, ...photos]
    .sort(() => getRandomPosNegInt())
    .map((card) => ({ ...card, cardId: Math.random(), cardState: "unmatch" }));
  return cards;
}

function handleFlippCard(cards: ImageCardType[], cardId: number) {
  return cards.map((card) => {
    if (card.cardId === cardId) {
      return {
        ...card,
        cardState: "flipped",
      };
    }
    return card;
  });
}

function handleActiveCards(cards: ImageCardType[], isMatched: boolean) {
  return cards.map((card) => {
    if (card.cardState === "flipped") {
      return {
        ...card,
        cardState: isMatched ? "matched" : "unmatch"
      };
    }
    return card;
  });
}

export function gameCardDataReducer(state: ImageCardType[], action: AppAction) {
  switch (action.type) {
    case "startNewGame": {
      return shuffleCards(action.payload);
    }
    case "flippCard": {
      return handleFlippCard(state, action.payload);
    }
    case "handleMatchCards": {
      return handleActiveCards(state, true);
    }
    case "handleNotMatchCards": {
      return handleActiveCards(state, false);
    }

    default: {
      return state;
    }
  }
}
