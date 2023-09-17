import { useState } from "react";
import Button from "./Button";
import Modal from "./Modal";
import { ModalType } from "../types/modal.type";
import DifficultyForm from "./DifficultyForm";
import { useAppSelector } from "@/redux/store";
import { HeaderType } from "../types/header.type";

const Header: React.FC<HeaderType> = ({ shuffleCards, moves }) => {
  const [modalMsg, setModalMsg] = useState<ModalType | null>(null);
  const diffLevel = useAppSelector(
    (state) => state.levelReducer.value.dificultyValue
  );
  const dismissModal = () => {
    setModalMsg(null);
  };

  const setGameDifficultyLevel = () => {
    setModalMsg({
      title: "Set Difficulty Level2",
      content: <DifficultyForm onSubmitClicked={dismissModal} />,
      onDismiss: () => dismissModal(),
    });
  };

  const onNewGameHandler = () => shuffleCards(4);
  const onResetHandler = () => shuffleCards(diffLevel);

  return (
    <>
      <h1 className="pb-4">Match game!</h1>
      <div data-cy="new-game" className="inline-block">
        <Button type="button" onClick={onNewGameHandler} name="New Game" />
      </div>
      <div data-cy="reset-game" className="inline-block">
        <Button
          type="button"
          classes="bg-blue-200"
          onClick={onResetHandler}
          name="Reset Game"
        />
      </div>
      <div data-cy="diff-level" className="inline-block">
        <Button
          classes="bg-indigo-900"
          type="button"
          onClick={setGameDifficultyLevel}
          name="Difficulty Level"
        />
      </div>

      <div className="grid grid-cols-2 text-sm">
        <div>
          Your Moves: <span data-cy="moves">{moves}</span>
        </div>
        
        <div>
          Difficulty Level: <span data-cy="level">{diffLevel}</span>
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
export default Header;
