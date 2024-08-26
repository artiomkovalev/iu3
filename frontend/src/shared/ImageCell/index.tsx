import "./styles.css";
import {memo} from "preact/compat";

function ImageCell({
  src
}: {
  src: string;
}) {

  return <img alt="Логотип технологии" className="image-cell" src={src} />;

};

export default memo(ImageCell);
