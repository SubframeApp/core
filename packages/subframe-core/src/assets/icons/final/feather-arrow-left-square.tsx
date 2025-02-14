import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherArrowLeftSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m12 8-4 4 4 4" />
    <path d="M16 12H8" />
  </svg>
)
export default SvgFeatherArrowLeftSquare
