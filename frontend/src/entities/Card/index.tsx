import "./styles.css";
import {Badge, ImageCell, Text, Title} from "../../shared";
import {memo} from "preact/compat";

const titleByDegree = {
  b1: "Б1",
  m: "М",
  b2: "Б2"
};

type Degree = "b1"|"m"|"b2";

function Card({
  title,
  description,
  coverUrl,
  degrees,
  onClick = () => {}
}: {
  id: number;
  title: string;
  description: string;
  coverUrl: string;
  degrees: string[];
  onClick: () => void;
  subjectIds: number[];
}) {

  return (
    <div className="card" onClick={onClick}>
      <ImageCell src={coverUrl} />
      <div className="card-information">
        <div style={{ display: "flex", gap: "10px" }}>
          <Title
            level={4}
            children={title}
          />
          {degrees.map(degree => (
            <Badge
              degree={degree as Degree}
              children={titleByDegree[degree as Degree]}
            />
          ))}
        </div>
        <Text children={description} />
      </div>
    </div>
  );

};

export default memo(Card);
