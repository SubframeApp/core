import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSubtitles = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M7 13h4" />
    <path d="M15 13h2" />
    <path d="M7 9h2" />
    <path d="M13 9h4" />
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
  </svg>
)
export default SvgFeatherSubtitles
