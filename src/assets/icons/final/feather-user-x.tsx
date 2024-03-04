import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherUserX = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx={9} cy={7} r={4} />
    <line x1={17} x2={22} y1={8} y2={13} />
    <line x1={22} x2={17} y1={8} y2={13} />
  </svg>
)
export default SvgFeatherUserX
