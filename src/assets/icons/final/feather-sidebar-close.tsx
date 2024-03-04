import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSidebarClose = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    <path d="M9 3v18" />
    <path d="m16 15-3-3 3-3" />
  </svg>
)
export default SvgFeatherSidebarClose
