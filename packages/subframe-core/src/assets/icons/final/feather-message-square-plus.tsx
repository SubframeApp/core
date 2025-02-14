import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherMessageSquarePlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <line x1={9} x2={15} y1={10} y2={10} />
    <line x1={12} x2={12} y1={7} y2={13} />
  </svg>
)
export default SvgFeatherMessageSquarePlus
