import "./styles.css";
import { useLocation } from "preact-iso";
import {memo} from "preact/compat";

function Logo() {

  const location = useLocation();

  return (
    <div
      className="logo"
      children="ИУ3"
      onClick={() => location.route("/")}
    />
  );

};

export default memo(Logo);
