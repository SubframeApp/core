import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherStepBack = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={18} x2={18} y1={20} y2={4} />
    <polygon points="14,20 4,12 14,4" />
  </svg>
)
export default SvgFeatherStepBack
