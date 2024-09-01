import "./styles.css";
import {ISubject} from "../../types/subjects";
import {HoursTable} from "../../features";
import {Text} from "../../shared";
import {memo} from "preact/compat";

function Details({
  subject
}: {
  subject: ISubject
}) {

  return (
    <div className="details">
      <HoursTable hours={subject.hours} />
      <Text children={subject.description} />
      <span className="inline"><b>Читает: </b><a href={subject.faculty.link} children={subject.faculty.name} /></span>
      <span className="inline"><b>Преподаватели: </b><Text>{subject.tutors.join(", ")}</Text></span>
    </div>
  );

};

export default memo(Details);
