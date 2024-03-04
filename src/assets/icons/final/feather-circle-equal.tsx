import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherCircleEqual = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7 10h10" />
    <path d="M7 14h10" />
    <circle cx={12} cy={12} r={10} />
  </svg>
)
export default SvgFeatherCircleEqual
