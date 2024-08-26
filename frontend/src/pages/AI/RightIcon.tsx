import {memo} from "preact/compat";

function RightIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
      <path d="M18.5801 31.76L26.3401 24L18.5801 16.24C17.8001 15.46 17.8001 14.2 18.5801 13.42C19.3601 12.64 20.6201 12.64 21.4001 13.42L30.5801 22.6C31.3601 23.38 31.3601 24.64 30.5801 25.42L21.4001 34.6C20.6201 35.38 19.3601 35.38 18.5801 34.6C17.8201 33.82 17.8001 32.54 18.5801 31.76Z" fill="black"/>
    </svg>
  );
};

export default memo(RightIcon);
