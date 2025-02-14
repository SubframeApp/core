import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherUnderline = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M6 4v6a6 6 0 0 0 12 0V4" />
    <line x1={4} x2={20} y1={20} y2={20} />
  </svg>
)
export default SvgFeatherUnderline
