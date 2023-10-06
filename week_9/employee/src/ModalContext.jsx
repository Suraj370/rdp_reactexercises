import React, { useState, createContext } from "react";
import Modal from "./MyModal";

export const ModalContext = createContext([
  () => console.log("Open modal"),
  () => console.log("Close modal"),
]);


export function ModalContextProvider({ children }) {
  const [modal, setModal] = useState();
  console.log(modal);

  const openModal = (modalProps) => setModal(modalProps);
  const closeModal = () => setModal(undefined);

  return (
    <ModalContext.Provider value={[openModal, closeModal]}>
      {children}
      {modal && <Modal key="modal" {...modal} />}
    </ModalContext.Provider>
  );
}
