import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherHeading6 = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 12h8" />
    <path d="M4 18V6" />
    <path d="M12 18V6" />
    <circle cx={19} cy={16} r={2} />
    <path d="M20 10c-2 2-3 3.5-3 6" />
  </svg>
)
export default SvgFeatherHeading6
