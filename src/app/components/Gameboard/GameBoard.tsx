import { useEffect, useState } from "react";
import { ModalType } from "@/app/types/modal.type";
import Modal from "../Shared/Modal";
import CardsList from "../CardsList/CardsList";
import GameBoardInfo from "../GameBoardHeader/GameBoardInfo";
import GameBoardActions from "../GameBoardHeader/GameBoardActions";
import ProgressBar from "../ProgressBar/ProgressBar";
import useCoundown from "@/app/utils/useCountdown";
import { useAppSelector } from "@/redux/store";
import { getTimeForLevel, getTimeIsUp, progressBarWidth, userFriendlyTime } from "./helper";
import WinLooseMsg from "../WinLoose/WinLoose";

const GameBoard = () => {
  const [moves, setMoves] = useState(0);
  const [newGame, setNewGame] = useState(false);
  const [newPhotos, setNewPhotos] = useState(false);
  const [modal, setModal] = useState<ModalType | null>(null);
  const diffLevel = useAppSelector(
    (state) => state.settingReducer.value.dificultyValue
  );
  const totalTime = getTimeForLevel(diffLevel);
  const { countDown, startTimer, resetTimer, timerStatus } = useCoundown(totalTime);
  const timeIsUp = getTimeIsUp(countDown, timerStatus);
  
  const newGameHandler = () => {
    resetTimer();
    setMoves(0);
    setNewGame((prev) => !prev);
  };

  const newPhotosHandler = () => {
    setMoves(0);
    resetTimer();
    setNewPhotos((prev) => !prev);
  };

  const moveHandler = (reset: boolean = false) => {
    reset ? setMoves(0) : setMoves((prev) => prev + 1);
  };

  const gameFinished = () => {
    let time = userFriendlyTime(totalTime - countDown);
    setTimeout(() => {
      resetTimer();
      setModal({
        title: "Congradulations!",
        content: (
          <WinLooseMsg
            status="win"
            moves={moves}
            time={time}
            onConfirm={() => {
              setModal(null);
              newGameHandler();
            }}
          />
        ),
        onDismiss: () => {
          setModal(null);
          newGameHandler();
        },
      });
    }, 800);
  };

  useEffect(() => {
    if (timeIsUp) {
      let time = userFriendlyTime(totalTime);
      setModal({
        title: "You Loose!",
        content: (
          <WinLooseMsg
            status="loose"
            moves={moves}
            time={time}
            onConfirm={() => {
              setModal(null);
              newGameHandler();
            }}
          />
        ),
        onDismiss: () => {
          setModal(null);
          newGameHandler();
        },
      });
    }
  }, [timeIsUp]);

  

  return (
    <>
      {modal && (
        <Modal
          onDismiss={modal.onDismiss}
          title={modal.title}
          content={modal.content}
        />
      )}
      <GameBoardInfo moves={moves} />
      <GameBoardActions
        resetTimer={resetTimer}
        newGameHandler={newGameHandler}
        fetchNewPhotos={newPhotosHandler}
      />
      <ProgressBar progress={progressBarWidth(totalTime, countDown)} />
      <CardsList
        gameIsFinished={gameFinished}
        newGame={newGame}
        newPhotos={newPhotos}
        moved={moveHandler}
        timerStatus={timerStatus}
        startTimer={startTimer}
      />
    </>
  );
};

export default GameBoard;
