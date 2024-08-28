import {createContext, useCallback, useContext, useState} from "preact/compat";
import {ComponentChildren} from "preact";

interface IModal {
  title: string;
  content: ComponentChildren;
  displayModal: boolean;
  setModal: (modal: IModal) => void;
  closeModal: () => void;
};

const defaultValue = {
  title: "Заголовок",
  content: "Контент",
  displayModal: false,
  setModal: () => {},
  closeModal: () => {}
};

const ModalContext = createContext<IModal>(defaultValue);

export function ModalProvider({
  children
}: {
  children: ComponentChildren
}) {

  const [modal, setModal] = useState<IModal>(defaultValue);

  const closeModal = useCallback(() => {
    setModal({ ...defaultValue, displayModal: false });
  }, [modal]);

  return (
    <ModalContext.Provider
      children={children}
      value={{...modal, setModal, closeModal}}
    />
  );

};

export const useModal = () => useContext(ModalContext);
