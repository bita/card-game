import ReactDOM from "react-dom";
import Button from "./Button";
import { BackdropType, ModalType } from "../types/modal.type";

const Backdrop = (props: BackdropType) => {
  return (
    <div
      className="backdrop-blur-md fixed -inset-0 w-full h-full z-10"
      onClick={props.onBackDropClick}
    />
  );
};

const ModalOverlay = (props: ModalType) => {
  const modalClasses = `${
    props.modalClass ? props.modalClass : ""
  } fixed top-[30vh] left-[12%] md:left-[25%] w-3/4 md:w-1/2 z-50 bg-blue-900 bg-opacity-50 py-8 text-center rounded shadow-xl`;

  return (
    <div className={modalClasses}>
      <header className="p-2">
        <h2 className="text-sm text-center m-0 p-0">{props.title}</h2>
      </header>
      <div className="px-8 py-32">
       {props.content}
      </div>
      <footer className="flex justify-end items-end">
        {props.onConfirm && (
          <Button
            type="button"
            // classes={props.modalClass}
            onClick={props.onConfirm}
            name="Okay"
          />
        )}
        {props.onCancel && (
          <Button
            type="button"
            classes={props.modalClass}
            onClick={props.onCancel}
            name="Cancel"
          />
        )}
      </footer>
    </div>
  );
};

const Modal = (props: any) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onBackDropClick={props.onDismiss} />,
        document.getElementById("backdrop-root")!
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalClass={props.modalClass}
          title={props.title}
          content={props.content}
          onConfirm={props.onConfirm}
          onCancel={props.onCancel}
          onDismiss={props.onDismiss}
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
