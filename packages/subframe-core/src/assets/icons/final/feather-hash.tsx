import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherHash = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={4} x2={20} y1={9} y2={9} />
    <line x1={4} x2={20} y1={15} y2={15} />
    <line x1={10} x2={8} y1={3} y2={21} />
    <line x1={16} x2={14} y1={3} y2={21} />
  </svg>
)
export default SvgFeatherHash
