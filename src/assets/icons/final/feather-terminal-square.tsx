import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherTerminalSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m7 11 2-2-2-2" />
    <path d="M11 13h4" />
    <rect width={18} height={18} x={3} y={3} rx={2} ry={2} />
  </svg>
)
export default SvgFeatherTerminalSquare
