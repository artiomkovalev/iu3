import "./styles.css";
import items from "./items";
import {Text, Title} from "../../shared/Typography";
import {HistoryCaption} from "../../features";
import {memo} from "preact/compat";

function generateHistory() {
  const content = [];
  for (const item of items) {
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
    <div className="page-outer">
      <div className="page-inner">
        <div className="main-information">
          <Title
            level={1}
            children="История кафедры"
          />
        </div>
        <div className="history">
          {history}
        </div>
      </div>
    </div>
  );

};

export default memo(History);
