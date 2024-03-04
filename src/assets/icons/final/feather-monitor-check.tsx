import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherMonitorCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m9 10 2 2 4-4" />
    <rect width={20} height={14} x={2} y={3} rx={2} />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
  </svg>
)
export default SvgFeatherMonitorCheck
