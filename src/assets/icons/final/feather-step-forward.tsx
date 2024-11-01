import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherStepForward = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={6} x2={6} y1={4} y2={20} />
    <polygon points="10,4 20,12 10,20" />
  </svg>
)
export default SvgFeatherStepForward
