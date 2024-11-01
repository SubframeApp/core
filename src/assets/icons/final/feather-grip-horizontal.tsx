import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherGripHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={9} r={1} />
    <circle cx={19} cy={9} r={1} />
    <circle cx={5} cy={9} r={1} />
    <circle cx={12} cy={15} r={1} />
    <circle cx={19} cy={15} r={1} />
    <circle cx={5} cy={15} r={1} />
  </svg>
)
export default SvgFeatherGripHorizontal
