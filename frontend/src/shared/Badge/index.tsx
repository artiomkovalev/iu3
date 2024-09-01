import "./styles.css";
import {memo} from "preact/compat";

const colors = {
  b1: "var(--blue-accent)",
  b2: "var(--green-accent)",
  m: "var(--red-accent)"
};

function Badge({
  children,
  degree
}: {
  children: string;
  degree: "b1"|"b2"|"m"
}) {

  return (
    <div className="badge" style={{ backgroundColor: colors[degree] }}>{children}</div>
  );

};

export default memo(Badge);
