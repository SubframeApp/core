import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSeparatorHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={3} x2={21} y1={12} y2={12} />
    <polyline points="8 8 12 4 16 8" />
    <polyline points="16 16 12 20 8 16" />
  </svg>
)
export default SvgFeatherSeparatorHorizontal
