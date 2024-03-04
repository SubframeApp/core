import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherServer = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={8} x={2} y={2} rx={2} ry={2} />
    <rect width={20} height={8} x={2} y={14} rx={2} ry={2} />
    <line x1={6} x2={6.01} y1={6} y2={6} />
    <line x1={6} x2={6.01} y1={18} y2={18} />
  </svg>
)
export default SvgFeatherServer
