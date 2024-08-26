import "./styles.css";
import { useLocation } from "preact-iso";
import Icon from "./Icon.tsx";
import {memo} from "preact/compat";

function AccountIcon() {

  const location = useLocation();

  return (
    <div
      className="account-icon"
      onClick={() => location.route("/login")}
    >
      <Icon />
    </div>
  );

};

export default memo(AccountIcon);
