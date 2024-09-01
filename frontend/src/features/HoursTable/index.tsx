import "./styles.css";
import {Cell} from "../../entities";
import {Text, Title} from "../../shared";
import {memo} from "preact/compat";

function HoursTable({
  hours
}: {
  hours: number[];
}) {

  return (
    <div className="hours-table">
      <div className="hours-item">
        <Cell value={<Title level={4} children="Семестр"/>}/>
        <Cell value={<Title level={4} children="Часы"/>}/>
      </div>
      {hours.map((hour, index) => {
        return (
          <div className="hours-item">
            <Cell value={<Text children={`${index + 1}`}/>} />
            <Cell value={<Text children={`${hour ? hour : ''}`}/>} />
          </div>
        )
      })}
    </div>
  );

};

export default memo(HoursTable);
