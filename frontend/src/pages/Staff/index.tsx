import {Page, Title} from "../../shared";
import {Teachers} from "../../widgets";
import {memo} from "preact/compat";

function Staff() {

  return (
    <Page id="staff">
      <div className="main-information">
        <Title
          level={1}
          children="Сотрудники кафедры"
        />
      </div>
      <Teachers />
    </Page>
  );

};

export default memo(Staff);
