export default function loadMapScript() {
    const mainScript = document.createElement("script");
    mainScript.src = "https://maps.api.2gis.ru/2.0/js/?version=v3.7.4";
    mainScript.type = "text/javascript";
    mainScript.async = false;
    const loaderScript = document.createElement("script");
    loaderScript.src = "https://maps.api.2gis.ru/2.0/loader.js";
    loaderScript.async = false;
    const mapScript = document.createElement("script");
    mapScript.src = "scripts/map.js";
    mapScript.async = false;
    document.body.appendChild(mainScript);
    document.body.appendChild(loaderScript);
    document.body.appendChild(mapScript);
    return [mainScript, loaderScript, mapScript];
};
