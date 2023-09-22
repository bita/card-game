import { useState } from "react";
import Button from "../Shared/Button";
import Modal from "../Shared/Modal";
import SettingForm from "../GameSettingForm/SettingForm";
import { ModalType } from "@/app/types/modal.type";
import { GameBoardActionsType } from "@/app/types/gameBoardActions.type";

const GameBoardActions: React.FC<GameBoardActionsType> = ({
  newGameHandler,
  fetchNewPhotos,
}) => {
  const [modalMsg, setModalMsg] = useState<ModalType | null>(null);
  const dismissModal = () => {
    setModalMsg(null);
  };

  const setGameSetting = () => {
    setModalMsg({
      title: "Game Settings",
      content: <SettingForm onSubmitClicked={dismissModal} />,
      onDismiss: () => dismissModal(),
    });
  };

  const newGame = () => newGameHandler();
  const newPhotos = () => fetchNewPhotos();

  return (
    <>
      <div className="flex flex-auto w-full mx-auto max-w-screen-md justify-center flex-wrap">
        <div data-cy="show-scores" className="w-1/2 md:w-1/4 p-1 inline-block">
          <Button
            classes="bg-pink-500 text-white w-full"
            type="button"
            // onClick={onShowScores}
            name="Scores"
          />
        </div>
        <div data-cy="reset-game" className="w-1/2 md:w-1/4 p-1 inline-block">
          <Button
            type="button"
            classes="bg-indigo-500 text-white w-full"
            onClick={newGame}
            name="Reset Game"
          />
        </div>
        <div data-cy="new-game" className="w-1/2 md:w-1/4 p-1 inline-block">
          <Button
            type="button"
            classes="bg-indigo-700 text-white w-full"
            onClick={newPhotos}
            name="New Photos"
          />
        </div>
        <div data-cy="diff-level" className="w-1/2 md:w-1/4 p-1 inline-block">
          <Button
            classes="bg-indigo-900 w-full"
            type="button"
            onClick={setGameSetting}
            name="Game Settings"
          />
        </div>
      </div>
      {modalMsg && (
        <Modal
          title={modalMsg.title}
          content={modalMsg.content}
          onDismiss={modalMsg.onDismiss}
        />
      )}
    </>
  );
};
export default GameBoardActions;
