import "./styles.css";
import {Title} from "../../shared";
import {media} from "../../config";
import {MediaItem} from "../../features";
import {memo} from "preact/compat";

function Media() {

  return (
    <div className="page-outer">
      <div className="page-inner">
        <div className="main-information">
          <Title
            level={1}
            children="СМИ о нас"
          />
        </div>
        <div className="media-items">
          {media.map(item => <MediaItem key={item.src} {...item} />)}
        </div>
      </div>
    </div>
  );

};

export default memo(Media);
