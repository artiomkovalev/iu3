import "./styles.css";
import {Badge, ImageCell, Text, Title} from "../../shared";
import {memo} from "preact/compat";

const colorByDegree = {
  b1: "var(--blue-accent)",
  m: "var(--red-accent)",
  b2: "var(--green-accent)"
};

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
  degrees
}: {
  title: string;
  description: string;
  coverUrl: string;
  degrees: string[];
}) {

  return (
    <div className="card">
      <ImageCell src={coverUrl} />
      <div className="card-information">
        <div style={{ display: "flex", gap: "10px" }}>
          <Title
            level={4}
            children={title}
          />
          {degrees.map(degree => (
            <Badge
              color={colorByDegree[degree as Degree]}
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
