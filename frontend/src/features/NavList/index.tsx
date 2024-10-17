import "./styles.css";
import { memo, useState } from "preact/compat";
import ArrowDown from "./ArrowDown";
import plans from "../../config/plans";

function NavList({
  src,
  children
}: {
  src: string;
  children: string;
}) {

  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <li className="nav-link nav-list">
      <a
        href={src}
        children={children}
        onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsActive(!isActive);
        }}
      />
      <ArrowDown />
      <div className={`list ${isActive ? 'active' : ''}`}>
        {plans.map(plan => <div className="content" onClick={() => window.location.href = plan.src}>{plan.title}</div>)}
      </div>
    </li>
  );

};

export default memo(NavList);
