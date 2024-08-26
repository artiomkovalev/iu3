import "./styles.css";
import {useLocation} from "preact-iso";
import {memo} from "preact/compat";

function InviteButton() {

  const location = useLocation();

  return (
    <div
      className="invite-button"
      onClick={() => location.route("/enter")}
    >
      <div className="description">Приём в бакалавриат и магистратуру</div>
    </div>
  );

};

export default memo(InviteButton);
