import "./styles.css";
import {Text} from "../../shared";
import {memo} from "preact/compat";
import {Caption} from "../../shared";

interface ICaption {
  position: string;
  photo: {
    url: string;
    description: string;
    width: string;
    height: string;
  };
  content: string[];
};

function HistoryCaption({
    children
}: {
  children: ICaption;
}) {

  const avatar = (
    <img
      src={children.photo.url}
      style={{
        width: children.photo.width,
        height: children.photo.height,
        borderRadius: "12px"
      }}
      alt="Историческое фото"
    />
  );

  const avatarBlock = (
    <div
      className="avatar-block"
      style={{ width: children.photo.width }}
    >
      {avatar}
      <Caption children={children.photo.description} />
    </div>
  );

  return (
    <div className="history-caption flex">
      {children.position === "left" && avatarBlock}
      <div className="content">
        {children.content.map(element => <Text children={element} key={element} />)}
      </div>
      {children.position === "right" && avatarBlock}
    </div>
  );

};

export default memo(HistoryCaption);
