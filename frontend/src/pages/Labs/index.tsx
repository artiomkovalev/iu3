import {Page, Title} from "../../shared";
import {LabList} from "../../widgets";
import {memo} from "preact/compat";

function Labs() {

  return (
    <Page id="labs">
      <div className="main-information">
        <Title
          level={1}
          children="Учебные и научные лаборатории"
        />
      </div>
      <LabList />
    </Page>
  );

};

export default memo(Labs);
