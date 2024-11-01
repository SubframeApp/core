import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherBrackets = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 3h3v18h-3" />
    <path d="M8 21H5V3h3" />
  </svg>
)
export default SvgFeatherBrackets
