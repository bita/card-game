import { ImageCardType } from "./imageCard.type"

export type CardsListType = {
    cardsList: ImageCardType[];
    moved: () => void;
    resetGame: (level: number) => void;
}