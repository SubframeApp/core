import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherBarChartBig = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 3v18h18" />
    <rect width={4} height={7} x={7} y={10} rx={1} />
    <rect width={4} height={12} x={15} y={5} rx={1} />
  </svg>
)
export default SvgFeatherBarChartBig
