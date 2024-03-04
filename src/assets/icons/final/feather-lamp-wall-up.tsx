import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherLampWallUp = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M11 4h6l3 7H8l3-7Z" />
    <path d="M14 11v5a2 2 0 0 1-2 2H8" />
    <path d="M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z" />
  </svg>
)
export default SvgFeatherLampWallUp
