import "./styles.css";
import {labs} from "../../config";
import {Lab} from "../../features";
import {memo} from "preact/compat";

function LabList() {

  return (
    <div class="labs">
      {labs.map(item => <Lab {...item} key={item.title} />)}
    </div>
  );

};

export default memo(LabList);
