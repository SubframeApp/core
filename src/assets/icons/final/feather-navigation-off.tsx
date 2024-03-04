import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherNavigationOff = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M8.43 8.43 3 11l8 2 2 8 2.57-5.43" />
    <path d="M17.39 11.73 22 2l-9.73 4.61" />
    <line x1={2} x2={22} y1={2} y2={22} />
  </svg>
)
export default SvgFeatherNavigationOff
