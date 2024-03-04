import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherRegex = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 3v10" />
    <path d="m12.67 5.5 8.66 5" />
    <path d="m12.67 10.5 8.66-5" />
    <path d="M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" />
  </svg>
)
export default SvgFeatherRegex
