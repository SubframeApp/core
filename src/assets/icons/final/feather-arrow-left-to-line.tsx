import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherArrowLeftToLine = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 19V5" />
    <path d="m13 6-6 6 6 6" />
    <path d="M7 12h14" />
  </svg>
)
export default SvgFeatherArrowLeftToLine
