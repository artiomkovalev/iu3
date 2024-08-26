import {memo} from "preact/compat";

function LeftIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M29.42 31.76L21.66 24L29.42 16.24C30.2 15.46 30.2 14.2 29.42 13.42C28.64 12.64 27.38 12.64 26.6 13.42L17.42 22.6C16.64 23.38 16.64 24.64 17.42 25.42L26.6 34.6C27.38 35.38 28.64 35.38 29.42 34.6C30.18 33.82 30.2 32.54 29.42 31.76Z" fill="black"/>
    </svg>
  );
};

export default memo(LeftIcon);
