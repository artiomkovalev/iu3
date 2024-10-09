import {Page, Subtitle, Title} from "../../shared";
import {InviteButton} from "../../features";
import {TechnologyStack} from "../../widgets";
import {memo} from "preact/compat";

function Home() {

  return (
    <Page id="home">
      <div className="main-information">
        <Title
          level={1}
          children="Кафедра ИУ3"
        />
        <Subtitle
          level={1}
          children="Информационные системы и телекоммуникации"
        />
        <Subtitle
          level={2}
          children="МГТУ им. Баумана"
        />
        <InviteButton />
      </div>
      <TechnologyStack />
    </Page>
  );

};

export default memo(Home);
