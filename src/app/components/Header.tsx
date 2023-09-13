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
    setModalMsg(null)
  }

  const setGameDifficultyLevel = () => {
    setModalMsg({
      title: "Set Difficulty Level2",
      content: <DifficultyForm onSubmitClicked={dismissModal} />,
      onDismiss: () => dismissModal(),
    });
  };

  const onClickHandler = () => shuffleCards(4);

  return (
    <>
      <p className="pb-4">Match game!</p>
      <Button type="button" onClick={onClickHandler} name="New Game" />
      <Button
        classes="bg-indigo-900"
        type="button"
        onClick={setGameDifficultyLevel}
        name="Difficulty Level"
      />
      <div className="grid grid-cols-2 text-sm">
        <p>Your Moves: {moves}</p>
        <p>Difficulty Level: {diffLevel}</p>
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
