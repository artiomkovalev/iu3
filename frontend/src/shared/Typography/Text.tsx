import { ComponentChildren } from "preact";
import {memo} from "preact/compat";

function Text({
  children
}: {
  children: ComponentChildren;
}) {

  return <span className="text">{children}</span>;

};

export default memo(Text);
