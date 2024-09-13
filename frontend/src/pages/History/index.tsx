import "./styles.css";
import {history as configHistory} from "../../config";
import {Text, Title} from "../../shared/Typography";
import {HistoryCaption} from "../../features";
import {memo} from "preact/compat";
import {Page} from "../../shared";

function generateHistory() {
  const content = [];
  for (const item of configHistory) {
    if (typeof item === "string") {
      content.push(<Text children={item} key={item} />);
    } else {
      content.push(<HistoryCaption children={item} />);
    };
  };
  return content;
};

const history = generateHistory();

function History() {

  return (
    <Page id="history">
      <div className="main-information">
        <Title
          level={1}
          children="История кафедры"
        />
      </div>
      <div className="history">
        {history}
      </div>
    </Page>
  );

};

export default memo(History);
