import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherCylinder = (props: SVGProps<SVGSVGElement>) => (
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
    <ellipse cx={12} cy={5} rx={9} ry={3} />
    <path d="M3 5v14a9 3 0 0 0 18 0V5" />
  </svg>
)
export default SvgFeatherCylinder
