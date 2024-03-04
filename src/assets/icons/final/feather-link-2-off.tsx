import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherLink2Off = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 17H7A5 5 0 0 1 7 7" />
    <path d="M15 7h2a5 5 0 0 1 4 8" />
    <line x1={8} x2={12} y1={12} y2={12} />
    <line x1={2} x2={22} y1={2} y2={22} />
  </svg>
)
export default SvgFeatherLink2Off
