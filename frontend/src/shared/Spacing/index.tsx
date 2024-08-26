import {memo} from "preact/compat";

function Spacing({
  size = "8px"
}: {
  size: string
}) {

  return (
    <div
      className="spacing"
      style={{
        width: "1px",
        height: size
      }}
    />
  );

};

export default memo(Spacing);
