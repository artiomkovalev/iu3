import "./styles.css";
import { ComponentChildren } from "preact";
import {memo} from "preact/compat";

function Block({
  children
}: {
  children: ComponentChildren;
}) {

  return <div className="block">{children}</div>

};

export default memo(Block);
