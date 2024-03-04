import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherStretchVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={6} height={20} x={4} y={2} rx={2} />
    <rect width={6} height={20} x={14} y={2} rx={2} />
  </svg>
)
export default SvgFeatherStretchVertical
