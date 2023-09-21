import { useState } from "react";
import Button from "../Shared/Button";
import { useAppSelector } from "@/redux/store";
import GameBoardHeader from "../GameBoardHeader/GameBoardInfo";
import Modal from "../Shared/Modal";
import SettingForm from "../GameSettingForm/SettingForm";
import { HeaderType } from "@/app/types/gameBoardActions.type";
import { ModalType } from "@/app/types/modal.type";

const Header: React.FC<HeaderType> = ({ moves }) => {
  const [modalMsg, setModalMsg] = useState<ModalType | null>(null);
  const diffLevel = useAppSelector(
    (state) => state.settingReducer.value.dificultyValue
  );

  const theme = useAppSelector(
    (state) => state.settingReducer.value.themeValue
  );

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

  // const onNewGameHandler = () => shuffleCards(4);
  // const onResetHandler = () => shuffleCards(diffLevel);

  return (
    <>
      
      <div className="flex justify-center">
        <div data-cy="new-game" className="inline-block">
          <Button
            classes="bg-pink-500 text-white"
            type="button"
            // onClick={onNewGameHandler}
            name="New Game"
          />
        </div>
        <div data-cy="reset-game" className="inline-block">
          <Button
            type="button"
            classes="bg-indigo-500 text-white"
            // onClick={onResetHandler}
            name="Reset Game"
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
      <GameBoardHeader score={0} moves={moves} diffLevel={diffLevel} />
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
export default Header;
