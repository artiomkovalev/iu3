import "./styles.css";
import {ComponentChildren} from "preact";
import {memo} from "preact/compat";

function Cell({
  value
}: {
  value: ComponentChildren
}) {

  return (
    <div className="cell">
      {value ? value : null}
    </div>
  );

};

export default memo(Cell);
