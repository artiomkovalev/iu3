import "./styles.css";
import {memo} from "preact/compat";

function Badge({
  color,
  children
}: {
  color: string;
  children: string;
}) {

  return (
    <div className="badge" style={{ backgroundColor: color }}>{children}</div>
  );

};

export default memo(Badge);
