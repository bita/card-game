import { useState } from "react";
import Button from "../Shared/Button";
import { useAppSelector } from "@/redux/store";
import Modal from "../Shared/Modal";
import SettingForm from "../GameSettingForm/SettingForm";
import { ModalType } from "@/app/types/modal.type";
import { GameBoardActionsType } from "@/app/types/gameBoardActions.type";

const GameBoardActions: React.FC<GameBoardActionsType> = ({
  newGameHandler,
  fetchNewPhotos,
}) => {
  const [modalMsg, setModalMsg] = useState<ModalType | null>(null);
  //   const diffLevel = useAppSelector(
  //     (state) => state.settingReducer.value.dificultyValue
  //   );

  //   const theme = useAppSelector(
  //     (state) => state.settingReducer.value.themeValue
  //   );

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
      <div className="flex flex-auto justify-center flex-wrap">
        <div data-cy="new-game" className="inline-block">
          <Button
            classes="bg-pink-500 text-white"
            type="button"
            // onClick={onShowScores}
            name="Scores"
          />
        </div>
        <div data-cy="reset-game" className="inline-block">
          <Button
            type="button"
            classes="bg-indigo-500 text-white"
            onClick={newGame}
            name="Reset Game"
          />
        </div>
        <div data-cy="reset-game" className="inline-block">
          <Button
            type="button"
            classes="bg-indigo-700 text-white"
            onClick={newPhotos}
            name="New Photos"
          />
        </div>
        <div data-cy="diff-level" className="inline-block">
          <Button
            classes="bg-indigo-900"
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
