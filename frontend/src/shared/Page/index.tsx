import {ComponentChildren} from "preact";
import {memo} from "preact/compat";

function Page({
  id,
  children
}: {
  id: string;
  children: ComponentChildren;
}) {

  return (
    <div className={`page-outer page-${id}`}>
      <div className="page-inner">
        {children}
      </div>
    </div>
  );

};

export default memo(Page);
