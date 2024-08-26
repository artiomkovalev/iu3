import "./styles.css";
import {Avatar, Block, Title} from "../../shared";
import {ComponentChildren} from "preact";
import {memo} from "preact/compat";

function Teacher({
  name,
  description,
  avatarUrl
}: {
  name: string;
  description: ComponentChildren;
  avatarUrl: string;
}) {

  return (
    <Block
      children={(
        <div className="flex">
          <Avatar src={avatarUrl} />
          <div className="content">
            <Title
              level={4}
              children={name}
            />
            {description}
          </div>
        </div>
      )}
    />
  );

};

export default memo(Teacher);
