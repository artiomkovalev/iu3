import "./styles.css";
import {pages} from "../../config";
import {NavLink} from "../../shared";
import {AccountIcon, Logo} from "../../features";
import {memo} from "preact/compat";

function Navbar() {

  return (
    <div className="navbar-outer">
      <nav className="navbar-inner">
        <Logo />
        <ul className="navbar-items">
          {pages.map((item) => <NavLink {...item} key={item.src} />)}
        </ul>
        <AccountIcon />
      </nav>
    </div>
  );

};

export default memo(Navbar);
