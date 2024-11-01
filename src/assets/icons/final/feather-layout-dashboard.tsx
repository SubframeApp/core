import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherLayoutDashboard = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={7} height={9} x={3} y={3} rx={1} />
    <rect width={7} height={5} x={14} y={3} rx={1} />
    <rect width={7} height={9} x={14} y={12} rx={1} />
    <rect width={7} height={5} x={3} y={16} rx={1} />
  </svg>
)
export default SvgFeatherLayoutDashboard
