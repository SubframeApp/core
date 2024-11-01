import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherAntenna = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 12 7 2" />
    <path d="m7 12 5-10" />
    <path d="m12 12 5-10" />
    <path d="m17 12 5-10" />
    <path d="M4.5 7h15" />
    <path d="M12 16v6" />
  </svg>
)
export default SvgFeatherAntenna
