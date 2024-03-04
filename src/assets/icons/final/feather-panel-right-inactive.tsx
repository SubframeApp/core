import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPanelRightInactive = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15 14v1" />
    <path d="M15 19v2" />
    <path d="M15 3v2" />
    <path d="M15 9v1" />
  </svg>
)
export default SvgFeatherPanelRightInactive
