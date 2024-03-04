import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPinOff = (props: SVGProps<SVGSVGElement>) => (
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
    <line x1={2} x2={22} y1={2} y2={22} />
    <line x1={12} x2={12} y1={17} y2={22} />
    <path d="M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12" />
    <path d="M15 9.34V6h1a2 2 0 0 0 0-4H7.89" />
  </svg>
)
export default SvgFeatherPinOff
