import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherOption = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 3h6l6 18h6" />
    <path d="M14 3h7" />
  </svg>
)
export default SvgFeatherOption
