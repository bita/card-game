import { ImageCardType } from "./imageCard.type"

// export type CardsListType = {
//     cardsList: ImageCardType[];
//     handleFlipCard: (cardId: number) => void
//     moved: () => void;
// }
export type CardsListType = {
    newGame: boolean;
    newPhotos: boolean;
    gameIsFinished: () => void;
    moved: (reset?: boolean) => void;
}