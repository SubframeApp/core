import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherMaximize2 = (props: SVGProps<SVGSVGElement>) => (
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
    <polyline points="15 3 21 3 21 9" />
    <polyline points="9 21 3 21 3 15" />
    <line x1={21} x2={14} y1={3} y2={10} />
    <line x1={3} x2={10} y1={21} y2={14} />
  </svg>
)
export default SvgFeatherMaximize2
