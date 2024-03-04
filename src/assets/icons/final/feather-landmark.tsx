import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherLandmark = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={3} x2={21} y1={22} y2={22} />
    <line x1={6} x2={6} y1={18} y2={11} />
    <line x1={10} x2={10} y1={18} y2={11} />
    <line x1={14} x2={14} y1={18} y2={11} />
    <line x1={18} x2={18} y1={18} y2={11} />
    <polygon points="12 2 20 7 4 7" />
  </svg>
)
export default SvgFeatherLandmark
