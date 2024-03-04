import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSendToBack = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={14} y={14} width={8} height={8} rx={2} />
    <rect x={2} y={2} width={8} height={8} rx={2} />
    <path d="M7 14v1a2 2 0 0 0 2 2h1" />
    <path d="M14 7h1a2 2 0 0 1 2 2v1" />
  </svg>
)
export default SvgFeatherSendToBack
