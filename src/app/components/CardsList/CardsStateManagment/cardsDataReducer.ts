import { ImageCardType, ImageType } from "@/app/types/imageCard.type";
import { getRandomPosNegInt } from "@/app/utils/math";
import { CARDS_DATA_REDUCERS_TYPES, CARD_STATE } from "../../Gameboard/fixtures";

type AppAction = {
  type: string;
  payload?: any;
};

function shuffleCards(photos: ImageType[]) {
  const cards = [...photos, ...photos]
    .sort(() => getRandomPosNegInt())
    .map((card) => ({ ...card, cardId: Math.random(), cardState: CARD_STATE.UNMATCH }));
  return cards;
}

function handleFlippCard(cards: ImageCardType[], cardId: number) {
  return cards.map((card) => {
    if (card.cardId === cardId) {
      return {
        ...card,
        cardState: CARD_STATE.FLIPPED,
      };
    }
    return card;
  });
}

function handleActiveCards(cards: ImageCardType[], isMatched: boolean) {
  return cards.map((card) => {
    if (card.cardState === CARD_STATE.FLIPPED) {
      return {
        ...card,
        cardState: isMatched ? CARD_STATE.MATCHED : CARD_STATE.UNMATCH,
      };
    }
    return card;
  });
}

export function gameCardDataReducer(state: ImageCardType[], action: AppAction) {
  switch (action.type) {
    case CARDS_DATA_REDUCERS_TYPES.START_NEW_GAME: {
      return shuffleCards(action.payload);
    }
    case CARDS_DATA_REDUCERS_TYPES.FLIPP_CARD: {
      return handleFlippCard(state, action.payload);
    }
    case CARDS_DATA_REDUCERS_TYPES.MATCHED_CARDS: {
      return handleActiveCards(state, true);
    }
    case CARDS_DATA_REDUCERS_TYPES.NOT_MATCHED_CARDS: {
      return handleActiveCards(state, false);
    }

    default: {
      return state;
    }
  }
}
