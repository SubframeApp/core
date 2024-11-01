import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherTent = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3.5 21 14 3" />
    <path d="M20.5 21 10 3" />
    <path d="M15.5 21 12 15l-3.5 6" />
    <path d="M2 21h20" />
  </svg>
)
export default SvgFeatherTent
