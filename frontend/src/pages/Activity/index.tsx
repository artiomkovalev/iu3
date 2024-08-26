import "./styles.css";
import {Block, Title} from "../../shared";
import {ciscoCenter, intelCenter, magistracy, magistracyRequirements, mainBachelor, secondBachelor} from "./items.tsx";
import {memo} from "preact/compat";

function Activity() {

  return (
    <div className="page-outer">
      <div className="page-inner">
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
      </div>
    </div>
  )

};

export default memo(Activity);
