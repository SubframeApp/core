import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherGoal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 13V2l8 4-8 4" />
    <path d="M20.55 10.23A9 9 0 1 1 8 4.94" />
    <path d="M8 10a5 5 0 1 0 8.9 2.02" />
  </svg>
)
export default SvgFeatherGoal
