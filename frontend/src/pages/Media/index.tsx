import "./styles.css";
import {Page, Title} from "../../shared";
import {media} from "../../config";
import {MediaItem} from "../../features";
import {memo} from "preact/compat";

function Media() {

  return (
    <Page id="media">
      <div className="main-information">
        <Title
          level={1}
          children="СМИ о нас"
        />
      </div>
      <div className="media-items">
        {media.map(item => <MediaItem key={item.src} {...item} />)}
      </div>
    </Page>
  );

};

export default memo(Media);
