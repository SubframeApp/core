import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherRockingChair = (props: SVGProps<SVGSVGElement>) => (
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
    <polyline points="3.5 2 6.5 12.5 18 12.5" />
    <line x1={9.5} x2={5.5} y1={12.5} y2={20} />
    <line x1={15} x2={18.5} y1={12.5} y2={20} />
    <path d="M2.75 18a13 13 0 0 0 18.5 0" />
  </svg>
)
export default SvgFeatherRockingChair
