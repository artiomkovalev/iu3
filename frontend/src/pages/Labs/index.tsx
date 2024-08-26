import {Title} from "../../shared";
import {LabList} from "../../widgets";
import {memo} from "preact/compat";

function Labs() {

  return (
    <div className="page-outer">
      <div className="page-inner">
        <div className="main-information">
          <Title
            level={1}
            children="Учебные и научные лаборатории"
          />
        </div>
        <LabList />
      </div>
    </div>
  );

};

export default memo(Labs);
