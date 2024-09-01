import "./styles.css";
import {details} from "../../config";
import {Badge} from "../../shared";
import {useModal} from "../../contexts";
import {memo} from "preact/compat";
import {ISubject} from "../../types/subjects";
import {Details} from "../../widgets";

const titleByDegree = {
  b1: "Б1",
  m: "М",
  b2: "Б2"
};

function TechSubject({
  id,
  name,
  degree
}: {
  id: number;
  name: string;
  degree: "b1"|"b2"|"m"
}) {

  const modal = useModal();

  const subject = details.find(detail => id === detail.id) as ISubject;

  return (
    <div className="tech-subject">
      <div
        className="name"
        onClick={() => modal.changeModal({ title: subject.title, content: <Details subject={subject} /> })}
      >{name}</div>
      <div className="degree">
        <Badge degree={degree} children={titleByDegree[degree]} />
      </div>
    </div>
  );

};

export default memo(TechSubject);
