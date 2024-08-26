import {useEffect, useState} from "preact/compat";

export default function useWidth() {

  const [width, setWidth] = useState<number>(window.innerWidth > 1300 ? 1300 : window.innerWidth);

  useEffect(() => {
    const onResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;

};
