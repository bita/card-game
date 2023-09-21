import { ImageCardType } from "./imageCard.type"

export type SingleCardTemplate = {
    disabled: boolean;
    card: ImageCardType;
    onClick: () => void;
}