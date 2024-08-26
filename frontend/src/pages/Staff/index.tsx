import {Title} from "../../shared";
import {Teachers} from "../../widgets";
import {memo} from "preact/compat";

function Staff() {

  return (
    <div className="page-outer">
      <div className="page-inner">
        <div className="main-information">
          <Title
            level={1}
            children="Сотрудники кафедры"
          />
        </div>
        <Teachers />
      </div>
    </div>
  );

};

export default memo(Staff);
