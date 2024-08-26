import {useWidth} from "../../hooks";
import {memo} from "preact/compat";

const sizeMap = {
  1: "28px",
  2: "22px"
};

const sizeMapMobile = {
  1: "26px",
  2: "20px"
};

function Subtitle({
  level,
  children
}: {
  level: 1|2;
  children: string;
}) {

  const width = useWidth();

  return <span className="subtitle" style={{ fontSize: (width > 1295 ? sizeMap : sizeMapMobile)[level] }}>{children}</span>

};

export default memo(Subtitle);
