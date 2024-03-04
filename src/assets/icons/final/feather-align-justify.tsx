import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherAlignJustify = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={3} x2={21} y1={6} y2={6} />
    <line x1={3} x2={21} y1={12} y2={12} />
    <line x1={3} x2={21} y1={18} y2={18} />
  </svg>
)
export default SvgFeatherAlignJustify
