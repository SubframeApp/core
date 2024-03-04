import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherTractor = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 4h9l1 7" />
    <path d="M4 11V4" />
    <path d="M8 10V4" />
    <path d="M18 5c-.6 0-1 .4-1 1v5.6" />
    <path d="m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1" />
    <circle cx={7} cy={15} r={0.5} />
    <circle cx={7} cy={15} r={5} />
    <path d="M16 18h-5" />
    <circle cx={18} cy={18} r={2} />
  </svg>
)
export default SvgFeatherTractor
