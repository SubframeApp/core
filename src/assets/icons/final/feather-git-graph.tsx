import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherGitGraph = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={5} cy={6} r={3} />
    <path d="M5 9v6" />
    <circle cx={5} cy={18} r={3} />
    <path d="M12 3v18" />
    <circle cx={19} cy={6} r={3} />
    <path d="M16 15.7A9 9 0 0 0 19 9" />
  </svg>
)
export default SvgFeatherGitGraph
