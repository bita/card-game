import { BackdropType, ModalType } from "@/app/types/modal.type";
import ReactDOM from "react-dom";
import { IoCloseSharp } from "react-icons/io5";

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
  } fixed top-[30vh] left-[12%] md:left-[25%] border-double border-4 rounded-2xl border-gray-500 w-3/4 md:w-1/2 z-50 bg-gray-800 text-center rounded bg-opacity-70 shadow-xl`;

  return (
    <div className={modalClasses} data-cy="modal">
      {props.onDismiss && (
        <IoCloseSharp
          data-cy="close-modal"
          className="cursor-pointer absolute inset-2 rounded-xl bg-pink-500 fill-current text-white"
          onClick={props.onDismiss}
        />
      )}
      <header className="bg-gray-800 bg-opacity-70 rounded-t-xl shadow-xl">
        <h2 className="text-white py-4 text-lg text-center m-0 p-0">
          {props.title}
        </h2>
      </header>
      <div className="px-2 py-8">{props.content}</div>
    </div>
  );
};

const Modal: React.FC<ModalType> = ({
  title,
  content,
  modalClass,
  onDismiss,
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
        />,
        document.getElementById("overlay-root")!
      )}
    </>
  );
};

export default Modal;
