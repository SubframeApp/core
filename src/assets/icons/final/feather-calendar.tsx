import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherCalendar = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={4} rx={2} ry={2} />
    <line x1={16} x2={16} y1={2} y2={6} />
    <line x1={8} x2={8} y1={2} y2={6} />
    <line x1={3} x2={21} y1={10} y2={10} />
  </svg>
)
export default SvgFeatherCalendar
