import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSwitchCamera = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    <path d="M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5" />
    <circle cx={12} cy={12} r={3} />
    <path d="m18 22-3-3 3-3" />
    <path d="m6 2 3 3-3 3" />
  </svg>
)
export default SvgFeatherSwitchCamera
