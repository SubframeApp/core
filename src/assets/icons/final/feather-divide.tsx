import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherDivide = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={6} r={1} />
    <line x1={5} x2={19} y1={12} y2={12} />
    <circle cx={12} cy={18} r={1} />
  </svg>
)
export default SvgFeatherDivide
