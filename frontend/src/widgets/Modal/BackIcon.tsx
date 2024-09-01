import {memo} from "preact/compat";

function BackIcon() {

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clip-path="url(#clip0_175_2)">
        <path
          d="M16.8797 2.87995C16.3897 2.38995 15.5997 2.38995 15.1097 2.87995L6.69973 11.29C6.30973 11.68 6.30973 12.31 6.69973 12.7L15.1097 21.11C15.5997 21.6 16.3897 21.6 16.8797 21.11C17.3697 20.62 17.3697 19.83 16.8797 19.34L9.53973 12L16.8897 4.64995C17.3697 4.15995 17.3697 3.36995 16.8797 2.87995Z"
          fill="black"/>
      </g>
      <defs>
        <clipPath id="clip0_175_2">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )

};

export default memo(BackIcon);
