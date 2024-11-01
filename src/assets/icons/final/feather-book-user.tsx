import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherBookUser = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <circle cx={12} cy={8} r={2} />
    <path d="M15 13a3 3 0 1 0-6 0" />
  </svg>
)
export default SvgFeatherBookUser
