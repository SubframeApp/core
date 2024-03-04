import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherTv = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={15} x={2} y={7} rx={2} ry={2} />
    <polyline points="17 2 12 7 7 2" />
  </svg>
)
export default SvgFeatherTv
