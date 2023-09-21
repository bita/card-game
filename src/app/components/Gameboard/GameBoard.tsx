import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { changeDifficulty } from "@/redux/slices/setting-slice";
import { addStatisctis } from "@/redux/slices/statistics-slice";
import { ImageCardType, ImageType } from "@/app/types/imageCard.type";
import { ModalType } from "@/app/types/modal.type";
import { CalculateScore } from "@/app/helpers/CalculateScore";
import Win from "../Win/Win";
import Modal from "../Shared/Modal";
import CardsList from "../CardsList/CardsList";
import GameBoardInfo from "../GameBoardHeader/GameBoardInfo";
import GameBoardActions from "../GameBoardHeader/GameBoardActions";

const GameBoard = () => {
  const [moves, setMoves] = useState(0);
  const [newGame, setNewGame] = useState(false);
  const [newPhotos, setNewPhotos] = useState(false);
  const [winModal, setWinModal] = useState<ModalType | null>(null);
  const [score, setScore] = useState(0);

  // useEffect(() => {
  //   if (matched !== 0 && matched === cards.length / 2) {
  //     //score
  //     let score = CalculateScore(moves, diffLevel);
  //     dispatche(addStatisctis({moves, diffLevel, score}));
  //     //score

  //   }
  // }, [matched]);

  const gameFinished = () => {
    setTimeout(() => {
      setWinModal({
        title: "Congradulations!",
        content: (
          <Win
            onConfirm={() => {
              setWinModal(null);
              // startGame(diffLevel);
            }}
          />
        ),
        onDismiss: () => {
          setWinModal(null);
        },
      });
    }, 800);
  };

  const newGameHandler = () => {
    setMoves(0)
    setNewGame((prev) => !prev);
  };

  const newPhotosHandler = () => {
    setMoves(0)
    setNewPhotos((prev) => !prev);
  };

  const moveHandler = (reset: boolean = false) => {
    reset ? setMoves(0) : setMoves((prev) => prev + 1);
  };
  // useEffect(() => {
  //   startGame(diffLevel);
  // }, [diffLevel]);

  // const startGame = (level: number = 4) => {
  //   dispatche(changeDifficulty(+level));
  //   const list = shuffleCards(level);
  //   setCards(list);
  //   setMoves(0);
  //   setMatched(0);
  // };

  // const itsAMove = () => {
  //   setMoves((move) => move + 1);
  // };
  // // score
  // const itsAMatch = () => {
  //   setMatched((match) => match + 1);
  // };
  // // score
  // console.log(statistics);
  return (
    <>
      {winModal && (
        <Modal
          onDismiss={winModal.onDismiss}
          title={winModal.title}
          content={winModal.content}
        />
      )}
      <GameBoardInfo moves={moves} />
      <GameBoardActions
        newGameHandler={newGameHandler}
        fetchNewPhotos={newPhotosHandler}
      />
      <CardsList
        gameIsFinished={gameFinished}
        newGame={newGame}
        newPhotos={newPhotos}
        moved={moveHandler}
      />
    </>
  );
};

export default GameBoard;
