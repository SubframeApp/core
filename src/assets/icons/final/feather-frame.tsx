import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherFrame = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={22} x2={2} y1={6} y2={6} />
    <line x1={22} x2={2} y1={18} y2={18} />
    <line x1={6} x2={6} y1={2} y2={22} />
    <line x1={18} x2={18} y1={2} y2={22} />
  </svg>
)
export default SvgFeatherFrame
