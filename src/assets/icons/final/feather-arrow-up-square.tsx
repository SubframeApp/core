import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherArrowUpSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m16 12-4-4-4 4" />
    <path d="M12 16V8" />
  </svg>
)
export default SvgFeatherArrowUpSquare
