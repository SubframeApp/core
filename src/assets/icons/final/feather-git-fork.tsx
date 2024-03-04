import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherGitFork = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={18} r={3} />
    <circle cx={6} cy={6} r={3} />
    <circle cx={18} cy={6} r={3} />
    <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
    <path d="M12 12v3" />
  </svg>
)
export default SvgFeatherGitFork
