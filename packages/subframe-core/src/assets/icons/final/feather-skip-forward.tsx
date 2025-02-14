import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherSkipForward = (props: SVGProps<SVGSVGElement>) => (
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
    <polygon points="5 4 15 12 5 20 5 4" />
    <line x1={19} x2={19} y1={5} y2={19} />
  </svg>
)
export default SvgFeatherSkipForward
