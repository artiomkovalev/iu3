import "./styles.css";
import {memo} from "preact/compat";

function Avatar({
  src
}: {
  src: string
}) {

  return (
    <div className="avatar-outer">
      <img className="avatar" src={src} alt="Портрет преподавателя" />
    </div>
  );

};

export default memo(Avatar);
