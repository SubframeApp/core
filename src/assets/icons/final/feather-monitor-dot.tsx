import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherMonitorDot = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={19} cy={6} r={3} />
    <path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />
    <path d="M12 17v4" />
    <path d="M8 21h8" />
  </svg>
)
export default SvgFeatherMonitorDot
