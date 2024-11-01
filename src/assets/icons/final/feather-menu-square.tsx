import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherMenuSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="M7 8h10" />
    <path d="M7 12h10" />
    <path d="M7 16h10" />
  </svg>
)
export default SvgFeatherMenuSquare
