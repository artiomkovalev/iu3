import "./styles.css";
import {Page, Text, Title} from "../../shared";
import {memo, useEffect} from "preact/compat";
import {ContactInformation} from "../../widgets";
import loadMapScript from "./loadMapScript";

function Contacts() {

  useEffect(() => {
    const [mainScript, loaderScript, mapScript] = loadMapScript();
    return () => {
      mapScript.remove();
      loaderScript.remove();
      mainScript.remove();
    };
  }, []);

  return (
    <Page id="contacts">
      <div className="main-information">
        <Title
          level={1}
          children="Основная информация"
        />
      </div>
      <div className="contacts-page">
        <Title
          level={2}
          children="Местоположение"
        />
        <div id="map" style={{ width: "100%", height: "400px", position: "relative" }} />
        <Title
          level={2}
          children="Контактная информация"
        />
        <ContactInformation />
        <Title
          level={2}
          children="Схема прохода к кафедре"
        />
        <Text
          children="Главный корпус, южное крыло, 5-й этаж"
        />
        <img className="map" src="images/map.webp" alt="Схема прохода" />
      </div>
    </Page>
  );

};

export default memo(Contacts);
