import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherChevronsLeftRight = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 7-5 5 5 5" />
    <path d="m15 7 5 5-5 5" />
  </svg>
)
export default SvgFeatherChevronsLeftRight
