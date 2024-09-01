import "./styles.css";
import {useModal} from "../../contexts";
import {Title} from "../../shared";
import CloseIcon from "./CloseIcon.tsx";
import {memo, createPortal, useEffect} from "preact/compat";
import BackIcon from "./BackIcon.tsx";

function Modal() {

  const modal = useModal();

  useEffect(() => {
    const onClick = () => modal.closeModal();
    if (modal.modalState === "active") {
      document.body.addEventListener("click", onClick);
      return () => document.body.removeEventListener("click", onClick);
    };
  }, [modal]);

  const element = (<div
    className={`modal-outer ${modal.modalState}`}
  >
    <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
      <div className="modal-navbar">
        <div className={`modal-nav-left ${modal.contentState}`}>
          {modal.back && (
            <div
              className="modal-icon left"
              onClick={modal.backModal}
              children={<BackIcon />}
            />
          )}
          <Title
            level={3}
            children={modal.title}
          />
        </div>
        <div
          className="modal-icon"
          onClick={modal.closeModal}
          children={<CloseIcon />}
        />
      </div>
      <div
        className={`modal-content ${modal.contentState}`}
        children={modal.content}
      />
    </div>
  </div>);

  return createPortal(element, document.getElementById("modal")!);

};

export default memo(Modal);
