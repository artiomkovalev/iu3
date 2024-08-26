import "./styles.css";
import { useLocation } from "preact-iso";
import {memo} from "preact/compat";

function NavLink({
  src,
  children
}: {
  src: string;
  children: string;
}) {

  const location = useLocation();

  return (
    <li className="nav-link">
      <a
        href={src}
        children={children}
        onClick={(e) => {
          e.preventDefault();
          location.route(src);
        }}
      />
    </li>
  );

};

export default memo(NavLink);
