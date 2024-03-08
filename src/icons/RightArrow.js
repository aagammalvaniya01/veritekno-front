import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
const RightArrow = () => {
  return (
    <SvgIcon>
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_705_50"
        //   style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <rect width="30" height="30" fill="url(#pattern0)" />
        </mask>
        <g mask="url(#mask0_705_50)">
          <rect x="-0.703125" y="3.76562" width="33.0469" height="30.2344" fill="#004FD2" />
        </g>
        <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
            <use xlinkHref="#image0_705_50" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_705_50"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAO4AAADuAEDTgfIAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAADNQTFRF////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8YBMDAAAABB0Uk5TAAIEBQgVHYCNrK2ur7DS14bLu10AAACaSURBVHja7dq5EcJAFERBYIHlZvKPFh8fDSp1JzDPUIGxf7cDAACAH9qX9w/XWd0ft6RZMO5Js2A8kmbBeCbVgkvSLTi9FChQoECBAgUKFChQsJqC47LO7++CFM12QGY7ILMdkLn1gLnxj3D+xQ/Rtv4M7Nu3b9++ffv27du3v6D602398br+fN8/YOifcPSPWPpnPAAAAKzDB9eYa3nnch6iAAAAAElFTkSuQmCC"
          />
        </defs>
      </svg>
    </SvgIcon>
  );
};

export default RightArrow;
