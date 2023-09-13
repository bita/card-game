"use client";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { ImageCardType } from "../types/imageCard.type";
import { CardsListType } from "../types/cardsList.type";
import Grid from "./Grid";

const CardsList: React.FC<CardsListType> = ({ cardsList, moved }) => {
  const [cards, setCards] = useState<ImageCardType[]>([]);
  const [firstCard, setFirstCard] = useState<ImageCardType | null>(null);
  const [secondCard, setSecondCard] = useState<ImageCardType | null>(null);
  const [disableCard, setDisableCard] = useState(false);

  useEffect(() => shuffleCards(), [cardsList]);

  //start the game
  const shuffleCards = () => {
    setFirstCard(null);
    setSecondCard(null);
    setCards(cardsList);
  };

  //reset and count the moves
  const resetSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisableCard(false);
    moved();
  };

  const turnOverCard = (card: ImageCardType) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  //compare selected cards
  useEffect(() => {
    //select 2 cards and dont double click on the same card!
    if (firstCard && secondCard && firstCard.id !== secondCard.id) {
      setDisableCard(true);
      if (firstCard.src === secondCard.src) {
        setCards((prevCards: ImageCardType[]) => {
          return prevCards.map((prevCard) => {
            if (prevCard.src === firstCard!.src) {
              return { ...prevCard, matched: true };
            } else {
              return prevCard;
            }
          });
        });
        resetSelection();
      } else {
        setTimeout(() => resetSelection(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  return (
    <Grid>
      {cards &&
        cards.map((card) => {
          return (
            <SingleCard
              key={card.id}
              card={card}
              disabled={disableCard}
              onCardClick={turnOverCard}
              flipped={
                card === firstCard ||
                card === secondCard ||
                card.matched === true
              }
            />
          );
        })}
    </Grid>
  );
};
export default CardsList;
