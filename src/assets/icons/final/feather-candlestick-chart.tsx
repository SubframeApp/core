import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M9 5v4" />
    <rect width={4} height={6} x={7} y={9} rx={1} />
    <path d="M9 15v2" />
    <path d="M17 3v2" />
    <rect width={4} height={8} x={15} y={5} rx={1} />
    <path d="M17 13v3" />
    <path d="M3 3v18h18" />
  </svg>
)
export default SvgFeatherCandlestickChart
