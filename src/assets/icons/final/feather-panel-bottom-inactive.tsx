import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPanelBottomInactive = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14 15h1" />
    <path d="M19 15h2" />
    <path d="M3 15h2" />
    <path d="M9 15h1" />
  </svg>
)
export default SvgFeatherPanelBottomInactive
