"use client";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import { ImageCardType } from "../types/imageCard.type";
import { CardsListType } from "../types/cardsList.type";
import Grid from "./Grid";
import Modal from "./Modal";
import { ModalType } from "../types/modal.type";
import { useAppSelector } from "@/redux/store";

const CardsList: React.FC<CardsListType> = ({ cardsList, moved, resetGame }) => {
  const [cards, setCards] = useState<ImageCardType[]>(cardsList);
  const [firstCard, setFirstCard] = useState<ImageCardType | null>(null);
  const [secondCard, setSecondCard] = useState<ImageCardType | null>(null);
  const [disableCard, setDisableCard] = useState<boolean>(false);

  const [matched, setMatched] = useState<number>(0);
  const [winModal, setWinModal] = useState<ModalType | null>(null);
  const diffLevel = useAppSelector(
    (state) => state.levelReducer.value.dificultyValue
  );

  useEffect(() => getCards(), [cardsList]);
  useEffect(() => {
    console.log(matched);
    if (matched === cards.length / 2) {
      setTimeout(() => {
        setWinModal({
          title: "Congradulations!",
          content: "you Win!",
          onDismiss: () => {
            setWinModal(null)
          },
          onConfirm: () => {
            setWinModal(null)
            resetGame(diffLevel)
          }
        });
      }, 500);
    }
  }, [matched]);

  const getCards = () => {
    setMatched(0)
    setFirstCard(null);
    setSecondCard(null);
    setCards(cardsList);
  };

  const resetSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisableCard(false);
    moved();
  };

  const turnOverCard = (card: ImageCardType) => {
    firstCard ? setSecondCard(card) : setFirstCard(card);
  };

  useEffect(() => {
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
        setMatched((match) => match + 1);
        resetSelection();
      } else {
        setTimeout(() => resetSelection(), 1000);
      }
    }
  }, [firstCard, secondCard]);

  return (
    <Grid>
      {winModal && <Modal onDismiss={winModal.onDismiss} title={winModal.title} content={winModal.content} onConfirm={winModal.onConfirm} />}
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
