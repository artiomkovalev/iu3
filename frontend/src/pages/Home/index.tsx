import {Subtitle, Title} from "../../shared";
import {InviteButton} from "../../features";
import {TechnologyStack} from "../../widgets";
import {memo} from "preact/compat";

function Home() {

  return (
    <div className="page-outer">
      <div className="page-inner">
        <div className="main-information">
          <Title
            level={1}
            children="Кафедра ИУ3"
          />
          <Subtitle
            level={1}
            children="Информационные системы и технологии"
          />
          <Subtitle
            level={2}
            children="МГТУ им. Баумана"
          />
          <InviteButton />
        </div>
        <TechnologyStack />
      </div>
    </div>
  );

};

export default memo(Home);
