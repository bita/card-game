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
      title: "Set Difficulty Level",
      content: <DifficultyForm onSubmitClicked={dismissModal} />,
      onDismiss: () => dismissModal(),
    });
  };

  const onNewGameHandler = () => shuffleCards(4);
  const onResetHandler = () => shuffleCards(diffLevel);

  return (
    <>
     <div className="text-5xl pb-2">
        <h1 data-cy="title" className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
        Pair Player
        </h1>
      </div>
      <h3 className="pb-8 text-xs">
      The Memory Match Quest
      </h3>
      <div className="flex justify-center">
        <div data-cy="new-game" className="inline-block">
          <Button classes="bg-pink-500 text-white" type="button" onClick={onNewGameHandler} name="New Game" />
        </div>
        <div data-cy="reset-game" className="inline-block">
          <Button
            type="button"
            classes="bg-indigo-500 text-white"
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
