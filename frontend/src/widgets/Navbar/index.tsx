import "./styles.css";
import {pages} from "../../config";
import {NavLink} from "../../shared";
import { Logo, NavList } from "../../features";
import {memo} from "preact/compat";
import {Toolbar} from "../../features";

function Navbar() {

  return (
    <div className="navbar-outer">
      <nav className="navbar-inner">
        <Toolbar />
        <Logo />
        <ul className="navbar-items">
          {pages.map((item) => !item.src.includes("plans") ? <NavLink {...item} key={item.src} /> : <NavList {...item} key={item.src} />)}
        </ul>
      </nav>
    </div>
  );

};

export default memo(Navbar);
