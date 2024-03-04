import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherMap = (props: SVGProps<SVGSVGElement>) => (
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
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1={9} x2={9} y1={3} y2={18} />
    <line x1={15} x2={15} y1={6} y2={21} />
  </svg>
)
export default SvgFeatherMap
