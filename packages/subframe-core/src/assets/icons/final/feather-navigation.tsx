import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherNavigation = (props: SVGProps<SVGSVGElement>) => (
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
    <polygon points="3 11 22 2 13 21 11 13 3 11" />
  </svg>
)
export default SvgFeatherNavigation
