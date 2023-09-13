export type BackdropType = {
    onBackDropClick: () => void;
  };
  
  export type ModalType = {
    modalClass?: string;
    title: string;
    content: string | React.ReactNode;
    onDismiss?: () => void;
  };
  