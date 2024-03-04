import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherContact2 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 18a4 4 0 0 0-8 0" />
    <circle cx={12} cy={11} r={3} />
    <rect width={18} height={18} x={3} y={4} rx={2} />
    <line x1={8} x2={8} y1={2} y2={4} />
    <line x1={16} x2={16} y1={2} y2={4} />
  </svg>
)
export default SvgFeatherContact2
