import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPanelTopOpen = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={3} x2={21} y1={9} y2={9} />
    <path d="m15 14-3 3-3-3" />
  </svg>
)
export default SvgFeatherPanelTopOpen
