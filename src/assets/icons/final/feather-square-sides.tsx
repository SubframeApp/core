import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherSquareSides = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 3H16M8 21H16M3 8L3 16M21 8V16" />
  </svg>
)
export default SvgFeatherSquareSides
