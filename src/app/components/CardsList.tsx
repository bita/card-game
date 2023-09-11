"use client";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { ImageCardType } from "../types/imageCard.type";
import { CardsListType } from "../types/cardsList.type";
import Button from "./Button";

const CardsList: React.FC<CardsListType> = ({ cardsList }) => {
  const [cards, setCards] = useState<ImageCardType[]>([]);
  const [firstCard, setFirstCard] = useState<ImageCardType | null>(null);
  const [secondCard, setSecondCard] = useState<ImageCardType | null>(null);
  const [disableCard, setDisableCard] = useState(false);
  const [moves, setMoves] = useState(0);

  useEffect(() => shuffleCards(), []);

  //start the game
  const shuffleCards = () => {
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
    const shuffledCards = [...cardsList, ...cardsList]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random(), matched: false }));
    setCards(shuffledCards);
  };

  //reset and count the moves
  const resetSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisableCard(false);
    setMoves((move) => move + 1);
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
    <>
      <Button type="button" onClick={shuffleCards} name="New Game" />
      <p>Your Moves: {moves}</p>
      <div className="w-full max-w-screen-md mx-auto items-center justify-center cursor-pointer">
        <div className="grid grid-cols-4 gap-1 my-4 w-full text-center">
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
        </div>
      </div>
    </>
  );
};
export default CardsList;
