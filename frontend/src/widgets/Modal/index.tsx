import "./styles.css";
import {useModal} from "../../contexts";
import {Title} from "../../shared";
import CloseIcon from "./CloseIcon.tsx";
import {memo, createPortal} from "preact/compat";

function Modal() {

  const modal = useModal();

  const element = (<div
    className="modal-outer"
    style={{display: modal.displayModal ? 'normal' : 'none'}}
  >
    <div className="modal-inner">
      <div className="modal-navbar">
        <Title
          level={3}
          children={modal.title}
        />
        <div
          className="modal-icon"
          onClick={modal.closeModal}
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
