export type CardsListType = {
    newGame: boolean;
    newPhotos: boolean;
    gameIsFinished: () => void;
    moved: (reset?: boolean) => void;
}