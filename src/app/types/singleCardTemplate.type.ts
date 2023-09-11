import { ImageCardType } from "./imageCard.type"

export type SingleCardTemplate = {
    disabled: boolean;
    card: ImageCardType;
    onCardClick: (card: ImageCardType) => void;
    flipped: boolean;
}