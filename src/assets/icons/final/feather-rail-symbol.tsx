import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherRailSymbol = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M5 15h14" />
    <path d="M5 9h14" />
    <path d="m14 20-5-5 6-6-5-5" />
  </svg>
)
export default SvgFeatherRailSymbol