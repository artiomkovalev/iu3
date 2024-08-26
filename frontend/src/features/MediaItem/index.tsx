import "./styles.css";
import {Block, Text, Title} from "../../shared";
import {memo} from "preact/compat";

function MediaItem({
  src,
  title,
  description
}: {
  src: string;
  title: string;
  description: string;
}) {

  return (
    <div className="media-item">
      <Block>
        <video
          src={src}
          controls
          preload="metadata"
        />
        <div className="content">
          <Title
            level={4}
            children={title}
          />
          <Text
            children={description}
          />
        </div>
      </Block>
    </div>
  );

};

export default memo(MediaItem);
