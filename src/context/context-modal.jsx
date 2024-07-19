import { createContext, useState } from "react";

export const ModalContext = createContext({
  isOpenModal: false,
  openModalHandler: () => {},
  closeModalHandler: () => {},
});

export const ModalProvider = ({ children }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function openModalHandler() {
    setIsOpenModal(true);
  }

  const closeModalHandler = () => {
    setIsOpenModal(false);
  };

  const ContextValue = {
    isOpenModal,
    openModalHandler,
    closeModalHandler,
  };
  return (
    <ModalContext.Provider value={ContextValue}>
      {children}
    </ModalContext.Provider>
  );
};
