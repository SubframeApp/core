import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPanelRightOpen = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={15} x2={15} y1={3} y2={21} />
    <path d="m10 15-3-3 3-3" />
  </svg>
)
export default SvgFeatherPanelRightOpen