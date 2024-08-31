import "./styles.css";
import {useModal} from "../../contexts";
import {Title} from "../../shared";
import CloseIcon from "./CloseIcon.tsx";
import {memo, createPortal, useState, useEffect} from "preact/compat";

type ModalState = "active"|"out"|"";

function Modal() {

  const modal = useModal();

  const [modalState, setModalState] = useState<ModalState>("");

  useEffect(() => {
    const onClick = () => {
      setModalState("out");
      if (!modal.closeModal) return;
      setTimeout(modal.closeModal, 290);
    };
    if (modal.displayModal) {
      document.body.addEventListener("click", onClick);
      return () => document.body.removeEventListener("click", onClick);
    };
  }, [modal]);

  useEffect(() => {
    setModalState(modal.displayModal ? 'active' : '');
  }, [modal]);

  const element = (<div
    className={`modal-outer ${modalState}`}
  >
    <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
      <div className="modal-navbar">
        <Title
          level={3}
          children={modal.title}
        />
        <div
          className="modal-icon"
          onClick={() => {
            setModalState("out");
            if (!modal.closeModal) return;
            setTimeout(modal.closeModal, 290);
          }}
          children={<CloseIcon/>}
        />
      </div>
      <div
        className="modal-content"
        children={modal.content}
      />
    </div>
  </div>);

  return createPortal(element, document.getElementById("modal")!);

};

export default memo(Modal);
