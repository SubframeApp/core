import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherBatteryMedium = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={16} height={10} x={2} y={7} rx={2} ry={2} />
    <line x1={22} x2={22} y1={11} y2={13} />
    <line x1={6} x2={6} y1={11} y2={13} />
    <line x1={10} x2={10} y1={11} y2={13} />
  </svg>
)
export default SvgFeatherBatteryMedium
