import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherZoomOut = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={11} cy={11} r={8} />
    <line x1={21} x2={16.65} y1={21} y2={16.65} />
    <line x1={8} x2={14} y1={11} y2={11} />
  </svg>
)
export default SvgFeatherZoomOut
