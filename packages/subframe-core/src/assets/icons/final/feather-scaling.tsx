import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherScaling = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 3 9 15" />
    <path d="M12 3H3v18h18v-9" />
    <path d="M16 3h5v5" />
    <path d="M14 15H9v-5" />
  </svg>
)
export default SvgFeatherScaling
