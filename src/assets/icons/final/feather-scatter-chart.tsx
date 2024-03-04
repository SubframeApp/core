import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherScatterChart = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={7.5} cy={7.5} r={0.5} />
    <circle cx={18.5} cy={5.5} r={0.5} />
    <circle cx={11.5} cy={11.5} r={0.5} />
    <circle cx={7.5} cy={16.5} r={0.5} />
    <circle cx={17.5} cy={14.5} r={0.5} />
    <path d="M3 3v18h18" />
  </svg>
)
export default SvgFeatherScatterChart
