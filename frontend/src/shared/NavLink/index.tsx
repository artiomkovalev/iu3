import "./styles.css";
import { useLocation } from "preact-iso";
import {memo} from "preact/compat";

function NavLink({
  src,
  children,
  onClick = () => {}
}: {
  src: string;
  children: string;
  onClick?: () => void;
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
          onClick();
        }}
      />
    </li>
  );

};

export default memo(NavLink);
