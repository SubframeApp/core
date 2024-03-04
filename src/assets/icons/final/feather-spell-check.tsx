import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSpellCheck = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m6 16 6-12 6 12" />
    <path d="M8 12h8" />
    <path d="m16 20 2 2 4-4" />
  </svg>
)
export default SvgFeatherSpellCheck
