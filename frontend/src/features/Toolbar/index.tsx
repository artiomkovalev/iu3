import "./styles.css";
import {memo, useCallback, useEffect, useState} from "preact/compat";
import MenuIcon from "./MenuIcon.tsx";
import {pages} from "../../config";
import {NavLink} from "../../shared";

type ToolbarState = "active"|"out"|"";

function Toolbar() {

  const [toolbarState, setToolbarState] = useState<ToolbarState>("");

  const changeToolbarState = useCallback(() => {
    if (!toolbarState) return setToolbarState("active");
    setToolbarState("out");
    setTimeout(() => setToolbarState(""), 290);
  }, [toolbarState]);

  useEffect(() => {
    if (toolbarState !== "active") return;
    const onClick = () => {
      changeToolbarState();
    };
    document.body.addEventListener("click", onClick);
    return () => document.body.removeEventListener("click", onClick);
  }, [toolbarState]);

  return (
    <div className="toolbar-outer">
      <div className="menu-icon" onClick={changeToolbarState}>
        <MenuIcon />
      </div>
      <div className={`toolbar ${toolbarState}`} onClick={(e) => e.stopPropagation()}>
        <ul className="toolbar-items">
          {pages.map((item) => <NavLink {...item} key={item.src} onClick={changeToolbarState} />)}
        </ul>
      </div>
    </div>
  );

};

export default memo(Toolbar);
