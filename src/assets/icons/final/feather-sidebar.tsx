import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSidebar = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <line x1={9} y1={3} x2={9} y2={21} />
  </svg>
)
export default SvgFeatherSidebar
