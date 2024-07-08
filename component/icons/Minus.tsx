import * as React from "react";
import type { SVGProps } from "react";
const SvgMinus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#EB7E30"
    stroke={props.stroke ? props.stroke : "#ffff"}
    viewBox="0 0 29 29"
    {...props}
  >
    <path
      stroke="#ffff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.159}
      d="M5.858 14.034h16.374"
    />
  </svg>
);
export default SvgMinus;
