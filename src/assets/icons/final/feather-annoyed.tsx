import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherAnnoyed = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 15h8" />
    <path d="M8 9h2" />
    <path d="M14 9h2" />
  </svg>
)
export default SvgFeatherAnnoyed
