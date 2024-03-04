import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherCitrus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z" />
    <path d="M19.65 15.66A8 8 0 0 1 8.35 4.34" />
    <path d="m14 10-5.5 5.5" />
    <path d="M14 17.85V10H6.15" />
  </svg>
)
export default SvgFeatherCitrus
