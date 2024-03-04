import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherBookImage = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    <circle cx={10} cy={8} r={2} />
    <path d="m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17" />
  </svg>
)
export default SvgFeatherBookImage
