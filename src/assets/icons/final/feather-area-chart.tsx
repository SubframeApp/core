import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherAreaChart = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7 12v5h12V8l-5 5-4-4Z" />
  </svg>
)
export default SvgFeatherAreaChart
