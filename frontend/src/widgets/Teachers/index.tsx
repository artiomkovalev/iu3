import "./styles.css";
import {Text} from "../../shared";
import items from "./items";
import {Teacher} from "../../features";
import {ILink, IText} from "./types.ts";
import {memo} from "preact/compat";

function generateDescription(content: (IText | ILink)[]) {
  const description = [];
  for (const element of content) {
    if (element.tag === "text") {
      description.push(<Text children={element.content} />);
    } else {
      description.push(<span className="link-more"><b>{element.content.title}:</b><a href={element.content.link} children={element.content.link} /></span>)
    };
  };
  return description;
};

function Teachers() {
  return (
    <div className="teachers">
      {items.map(item => <Teacher key={item.name} name={item.name} avatarUrl={item.avatarUrl} description={generateDescription(item.description)} />)}
    </div>
  )
};

export default memo(Teachers);
