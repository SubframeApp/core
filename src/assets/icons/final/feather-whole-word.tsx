import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherWholeWord = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={7} cy={12} r={3} />
    <path d="M10 9v6" />
    <circle cx={17} cy={12} r={3} />
    <path d="M14 7v8" />
    <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
  </svg>
)
export default SvgFeatherWholeWord
