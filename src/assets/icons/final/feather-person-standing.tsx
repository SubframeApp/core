import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPersonStanding = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={5} r={1} />
    <path d="m9 20 3-6 3 6" />
    <path d="m6 8 6 2 6-2" />
    <path d="M12 10v4" />
  </svg>
)
export default SvgFeatherPersonStanding
