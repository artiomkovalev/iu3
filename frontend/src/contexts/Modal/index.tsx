import {createContext, useCallback, useContext, useState} from "preact/compat";
import {ComponentChildren} from "preact";

type ModalState = "active"|"out"|"";

interface IModal {
  title: string;
  content: ComponentChildren;
  modalState: ModalState;
  contentState: ModalState;
  openModal: (modal: IModalInput) => void;
  closeModal: () => void;
  changeModal: (modal: IModalInput) => void;
  backModal: () => void;
  back: IModalInput | null;
};

interface IModalInput {
  title: string;
  content: ComponentChildren;
};

const defaultValue: IModal = {
  title: "Заголовок",
  content: "Контент",
  modalState: "",
  contentState: "",
  openModal: () => {},
  closeModal: () => {},
  changeModal: () => {},
  backModal: () => {},
  back: null
};

const ModalContext = createContext<IModal>(defaultValue);

export function ModalProvider({
  children
}: {
  children: ComponentChildren
}) {

  const [title, setTitle] = useState<string>("Заголовок");
  const [content, setContent] = useState<ComponentChildren>("Контент");
  const [modalState, setModalState] = useState<ModalState>("");
  const [contentState, setContentState] = useState<ModalState>("");
  const [back, setBack] = useState<IModalInput|null>(null);

  const openModal = useCallback((modal: IModalInput) => {
    setTitle(modal.title);
    setContent(modal.content);
    setModalState("active");
  }, [setTitle]);

  const changeModal = useCallback((modal: IModalInput) => {
    setContentState("out");
    setTimeout(() => {
      setBack({ title, content });
      setTitle(modal.title);
      setContent(modal.content);
      setContentState("active");
    }, 290);
  }, [setContentState, title, content]);

  const backModal = useCallback(() => {
    changeModal(back as IModalInput);
    setTimeout(() => setBack(null), 290);
  }, [changeModal]);

  const closeModal = useCallback(() => {
    setModalState("out");
    setTimeout(() => {
      setModalState("");
      setBack(null);
    }, 290);
  }, [setModalState]);

  return (
    <ModalContext.Provider
      children={children}
      value={{
        title,
        content,
        modalState,
        contentState,
        openModal,
        changeModal,
        closeModal,
        backModal,
        back
      }}
    />
  );

};

export const useModal = () => useContext(ModalContext);
