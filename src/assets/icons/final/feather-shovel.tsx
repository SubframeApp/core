import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherShovel = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 22v-5l5-5 5 5-5 5z" />
    <path d="M9.5 14.5 16 8" />
    <path d="m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2" />
  </svg>
)
export default SvgFeatherShovel
