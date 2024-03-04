import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherAlignVerticalDistributeCenter = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={14} height={6} x={5} y={14} rx={2} />
    <rect width={10} height={6} x={7} y={4} rx={2} />
    <path d="M22 7h-5" />
    <path d="M7 7H1" />
    <path d="M22 17h-3" />
    <path d="M5 17H2" />
  </svg>
)
export default SvgFeatherAlignVerticalDistributeCenter
