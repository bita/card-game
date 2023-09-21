"use client";
import { useEffect, useReducer, useState } from "react";
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

const CardsList: React.FC<CardsListType> = ({
  gameIsFinished,
  newGame,
  newPhotos,
  moved,
}) => {
  const { photos, fetchNewPhotos } = useFetchImage();
  const [gameCards, dispatchGameCardsData] = useReducer(
    gameCardDataReducer,
    []
  );

  const disableCard = getFlippedCardsIds(gameCards).length === 2;
  const gameFinished = getGameFinished(gameCards);

  useEffect(() => {
    if (gameFinished) {
      gameIsFinished();
    }
  }, [gameFinished]);

  useEffect(() => {
    fetchNewPhotos();
    moved(true);
  }, [newPhotos]);

  useEffect(() => {
    dispatchGameCardsData({ type: "startNewGame", payload: photos });
    moved(true);
  }, [photos, newGame]);

  function handleFlipCard(cardId: number) {
    dispatchGameCardsData({ type: "flippCard", payload: cardId });
  }

  useEffect(() => {
    if (disableCard) {
      const flippedCardsMatche = getIsFlippedCardsMatch(gameCards).length === 2;
      moved();
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
  );
};
export default CardsList;
