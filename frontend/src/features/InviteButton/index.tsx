/*
  Ковалёв Артём, 2024
*/
import "./styles.css";
import {useLocation} from "preact-iso";
import {memo} from "preact/compat";

function InviteButton() {

  const location = useLocation();

  return (
    <div
      className="invite-button"
      onClick={() => location.route("/activity")}
    >
      <div className="description">Приём в бакалавриат и магистратуру</div>
    </div>
  );

};

export default memo(InviteButton);
