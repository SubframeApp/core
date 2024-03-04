import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherRouter = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={20} height={8} x={2} y={14} rx={2} />
    <path d="M6.01 18H6" />
    <path d="M10.01 18H10" />
    <path d="M15 10v4" />
    <path d="M17.84 7.17a4 4 0 0 0-5.66 0" />
    <path d="M20.66 4.34a8 8 0 0 0-11.31 0" />
  </svg>
)
export default SvgFeatherRouter
