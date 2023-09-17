import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import { BackdropType, ModalType } from "../types/modal.type";
import Button from "./Button";

const Backdrop = (props: BackdropType) => {
  return (
    <div
    data-cy="back-drop"
      className="backdrop-blur-md fixed -inset-0 w-full h-full z-10"
      onClick={props.onBackDropClick}
    />
  );
};

const ModalOverlay = (props: ModalType) => {
  const modalClasses = `${
    props.modalClass ? props.modalClass : ""
  } fixed top-[30vh] left-[12%] md:left-[25%] w-3/4 md:w-1/2 z-50 bg-blue-900 bg-opacity-50 py-2 px-2 text-center rounded shadow-xl`;

  return (
    <div className={modalClasses} data-cy="modal">
      {props.onDismiss && (
        <IoCloseSharp
          data-cy="close-modal"
          className="cursor-pointer absolute inset-1 bg-red-900 fill-current text-white"
          onClick={props.onDismiss}
        />
      )}
      <header className="p-2">
        <h2 className="text-sm text-center m-0 p-0">{props.title}</h2>
      </header>
      <div className="px-8 py-32">{props.content}</div>
      {props.onConfirm && (
        <Button
          type="button"
          name="Retry"
          classes="cursor-pointer w-3/4 bg-red-900 fill-current text-white"
          onClick={props.onConfirm}
        />
      )}
    </div>
  );
};

const Modal: React.FC<ModalType> = ({
  title,
  content,
  modalClass,
  onDismiss,
  onConfirm,
}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackDropClick={onDismiss} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalClass={modalClass}
          title={title}
          content={content}
          onDismiss={onDismiss}
          onConfirm={onConfirm}
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
