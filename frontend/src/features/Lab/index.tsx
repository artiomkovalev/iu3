import "./styles.css";
import {Block, Text, Thumbnail, Title} from "../../shared";
import {memo} from "preact/compat";

function Lab({
  title,
  description,
  photos
}: {
  title: string;
  description: string[];
  photos: string[];
}) {

  return (
    <Block>
      <Title level={2} children={title} />
      {description.map(element => <Text children={element} />)}
      <div className="flexlab">
        {photos.map(photo => <Thumbnail src={photo} />)}
      </div>
    </Block>
  );

};

export default memo(Lab);
