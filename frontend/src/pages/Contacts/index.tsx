import "./styles.css";
import {Page, Text, Title} from "../../shared";
import {memo, useEffect} from "preact/compat";
import {ContactInformation} from "../../widgets";

function Contacts() {

  useEffect(() => {
    const mainScript = document.createElement("script");
    mainScript.src = "https://maps.api.2gis.ru/2.0/js/?version=v3.7.4";
    mainScript.type = "text/javascript";
    const loaderScript = document.createElement("script");
    loaderScript.src = "https://maps.api.2gis.ru/2.0/loader.js";
    const mapScript = document.createElement("script");
    mapScript.src = "scripts/map.js";
    document.body.appendChild(mainScript);
    document.body.appendChild(loaderScript);
    document.body.appendChild(mapScript);
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
