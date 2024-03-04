import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherWrapText = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={3} x2={21} y1={6} y2={6} />
    <path d="M3 12h15a3 3 0 1 1 0 6h-4" />
    <polyline points="16 16 14 18 16 20" />
    <line x1={3} x2={10} y1={18} y2={18} />
  </svg>
)
export default SvgFeatherWrapText
