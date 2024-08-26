import "./styles.css";
import items from "./items";
import {Lab} from "../../features";
import {memo} from "preact/compat";

function LabList() {

  return (
    <div class="labs">
      {items.map(item => <Lab {...item} key={item.title} />)}
    </div>
  );

};

export default memo(LabList);
