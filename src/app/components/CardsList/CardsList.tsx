"use client";
import { useEffect, useReducer } from "react";
import Grid from "../Shared/Grid";
import Card from "../Card/Card";
import { gameCardDataReducer } from "./CardsStateManagment/cardsDataReducer";
import { useFetchImage } from "@/app/utils/useFetchImages";
import {
  getFlippedCardsIds,
  getGameFinished,
  getIsFlippedCardsMatch,
} from "./CardsStateManagment/helper";
import { CardsListType } from "@/app/types/cardsList.type";
import Loading from "../Loading/Loading";
import ErrorComponent from "../Error/ErrorComponent";

const CardsList: React.FC<CardsListType> = ({
  gameIsFinished,
  newGame,
  newPhotos,
  moved,
  startTimer,
  timerStatus,
}) => {
  const { photos, fetchNewPhotos, isLoading, error } = useFetchImage();
  const [gameCards, dispatchGameCardsData] = useReducer(gameCardDataReducer,[]);
  const disableCard = getFlippedCardsIds(gameCards).length === 2;
  const gameFinished = getGameFinished(gameCards);

  useEffect(() => {
    if (gameFinished) {
      gameIsFinished();
    }
  }, [gameFinished]);

  useEffect(() => {
    fetchNewPhotos();
    dispatchGameCardsData({ type: "startNewGame", payload: photos });
    moved(true);
  }, [newPhotos]);

  useEffect(() => {
    dispatchGameCardsData({ type: "startNewGame", payload: photos });
    moved(true);
  }, [photos, newGame]);

  function handleFlipCard(cardId: number) {
    if (timerStatus !== "started") {
      startTimer();
    }
    dispatchGameCardsData({ type: "flippCard", payload: cardId });
    moved();
  }

  useEffect(() => {
    if (disableCard) {
      const flippedCardsMatche = getIsFlippedCardsMatch(gameCards).length === 2;
      if (flippedCardsMatche) {
        dispatchGameCardsData({ type: "handleMatchCards" });
      } else {
        setTimeout(
          () => dispatchGameCardsData({ type: "handleNotMatchCards" }),
          1000
        );
      }
    }
  }, [gameCards, disableCard]);

  return (
    <>
      {error && <ErrorComponent errorMsg={error} />}
      {isLoading && <Loading />}
      {!error && !isLoading && (
        <Grid>
          {gameCards &&
            gameCards.map((card) => {
              return (
                <Card
                  key={card.cardId}
                  card={card}
                  disabled={disableCard}
                  onClick={() => handleFlipCard(card.cardId)}
                />
              );
            })}
        </Grid>
      )}
    </>
  );
};
export default CardsList;
