import { useState } from "react";
import { ModalType } from "@/app/types/modal.type";
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
  const gameFinished = () => {
    setTimeout(() => {
      setWinModal({
        title: "Congradulations!",
        content: (
          <Win
            onConfirm={() => {
              setWinModal(null);
              newGameHandler();
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
    setMoves(0);
    setNewGame((prev) => !prev);
  };

  const newPhotosHandler = () => {
    setMoves(0);
    setNewPhotos((prev) => !prev);
  };

  const moveHandler = (reset: boolean = false) => {
    reset ? setMoves(0) : setMoves((prev) => prev + 1);
  };

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
