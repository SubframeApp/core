import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherScale3D = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={19} cy={19} r={2} />
    <circle cx={5} cy={5} r={2} />
    <path d="M5 7v12h12" />
    <path d="m5 19 6-6" />
  </svg>
)
export default SvgFeatherScale3D
