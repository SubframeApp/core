import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherVideotape = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={16} x={2} y={4} rx={2} />
    <path d="M2 8h20" />
    <circle cx={8} cy={14} r={2} />
    <path d="M8 12h8" />
    <circle cx={16} cy={14} r={2} />
  </svg>
)
export default SvgFeatherVideotape
