import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherDivideSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
    <line x1={8} x2={16} y1={12} y2={12} />
    <line x1={12} x2={12} y1={16} y2={16} />
    <line x1={12} x2={12} y1={8} y2={8} />
  </svg>
)
export default SvgFeatherDivideSquare
