import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherVolumeX = (props: SVGProps<SVGSVGElement>) => (
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
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
    <line x1={22} x2={16} y1={9} y2={15} />
    <line x1={16} x2={22} y1={9} y2={15} />
  </svg>
)
export default SvgFeatherVolumeX
