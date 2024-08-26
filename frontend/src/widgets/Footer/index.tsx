import "./styles.css";
import {Text} from "../../shared";
import {memo} from "preact/compat";

const currentYear: number = new Date().getFullYear();

function Footer() {

  return (
    <footer>
      <Text children={`© iu3.bmstu.ru 2014-${currentYear}`} />
    </footer>
  );

};

export default memo(Footer);
