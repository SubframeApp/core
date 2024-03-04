import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherWorkflow = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={8} height={8} x={3} y={3} rx={2} />
    <path d="M7 11v4a2 2 0 0 0 2 2h4" />
    <rect width={8} height={8} x={13} y={13} rx={2} />
  </svg>
)
export default SvgFeatherWorkflow
