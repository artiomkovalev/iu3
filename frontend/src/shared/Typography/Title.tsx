import { createElement } from "preact";
import {memo} from "preact/compat";

function Title({
  level,
  children
}: {
  level: 1|2|3|4,
  children: string;
}) {

  return createElement(`h${level}`, {}, children);

};

export default memo(Title);
