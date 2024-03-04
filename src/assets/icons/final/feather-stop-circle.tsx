import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherStopCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <rect width={6} height={6} x={9} y={9} />
  </svg>
)
export default SvgFeatherStopCircle
