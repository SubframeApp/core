import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherMeh = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <line x1={8} x2={16} y1={15} y2={15} />
    <line x1={9} x2={9.01} y1={9} y2={9} />
    <line x1={15} x2={15.01} y1={9} y2={9} />
  </svg>
)
export default SvgFeatherMeh
