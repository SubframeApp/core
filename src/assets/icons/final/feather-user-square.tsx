import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherUserSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={10} r={3} />
    <path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" />
  </svg>
)
export default SvgFeatherUserSquare
