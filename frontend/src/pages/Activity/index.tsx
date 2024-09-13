import "./styles.css";
import {Block, Page, Title} from "../../shared";
import {
  ciscoCenter,
  intelCenter,
  magistracy,
  magistracyRequirements,
  mainBachelor,
  secondBachelor
} from "../../config";
import {memo} from "preact/compat";

function Activity() {

  return (
    <Page id="activity">
      <div className="main-information">
        <Title
          level={1}
          children="Учебная деятельность"
        />
      </div>
      <div className="flexlist">
        <div className="part">
          <Block
            children={(
              <div className="content">
                {mainBachelor}
              </div>
            )}
          />
          <Block
            children={(
              <div className="content">
                {secondBachelor}
              </div>
            )}
          />
          <Block
            children={(
              <div className="content">
                {intelCenter}
              </div>
            )}
          />
          <Block
            children={(
              <div className="content">
                {ciscoCenter}
              </div>
            )}
          />
        </div>
        <div className="part">
          <Block
            children={(
              <div className="content">
                {magistracy}
              </div>
            )}
          />
          <Block
            children={(
              <div className="content">
                {magistracyRequirements}
              </div>
            )}
          />
        </div>
      </div>
    </Page>
  );

};

export default memo(Activity);
