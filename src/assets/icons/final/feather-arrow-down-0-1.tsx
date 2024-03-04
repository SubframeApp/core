import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherArrowDown01 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m3 16 4 4 4-4" />
    <path d="M7 20V4" />
    <rect x={15} y={4} width={4} height={6} ry={2} />
    <path d="M17 20v-6h-2" />
    <path d="M15 20h4" />
  </svg>
)
export default SvgFeatherArrowDown01
