import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherArrowUpLeftSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M8 16V8h8" />
    <path d="M16 16 8 8" />
  </svg>
)
export default SvgFeatherArrowUpLeftSquare
