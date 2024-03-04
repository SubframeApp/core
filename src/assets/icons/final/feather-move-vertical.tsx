import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherMoveVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <polyline points="8 18 12 22 16 18" />
    <polyline points="8 6 12 2 16 6" />
    <line x1={12} x2={12} y1={2} y2={22} />
  </svg>
)
export default SvgFeatherMoveVertical