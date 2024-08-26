import "./styles.css";
import {memo} from "preact/compat";

function Thumbnail({
  src
}: {
  src: string;
}) {

  return (
    <img
      className="thumbnail"
      src={src}
      alt="Логотип компании"
    />
  );

};

export default memo(Thumbnail);
