import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSpeaker = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={16} height={20} x={4} y={2} rx={2} ry={2} />
    <circle cx={12} cy={14} r={4} />
    <line x1={12} x2={12.01} y1={6} y2={6} />
  </svg>
)
export default SvgFeatherSpeaker
