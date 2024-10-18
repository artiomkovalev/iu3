import "./styles.css";
import {memo, useEffect, useState} from "preact/compat";
import ArrowDown from "./ArrowDown";
import plans from "../../config/plans.ts";

function NavList({
  src,
  children
}: {
  src: string;
  children: string;
}) {

  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (!isActive) return;
    const onClick = () => setIsActive(false);
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [isActive]);

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
