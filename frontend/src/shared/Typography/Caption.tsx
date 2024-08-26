import { ComponentChildren } from "preact";
import {memo} from "preact/compat";

function Caption({
  children
}: {
  children: ComponentChildren;
}) {

  return <span className="caption">{children}</span>;

};

export default memo(Caption);
