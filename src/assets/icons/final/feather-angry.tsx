import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherAngry = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 16s-1.5-2-4-2-4 2-4 2" />
    <path d="M7.5 8 10 9" />
    <path d="m14 9 2.5-1" />
    <path d="M9 10h0" />
    <path d="M15 10h0" />
  </svg>
)
export default SvgFeatherAngry
