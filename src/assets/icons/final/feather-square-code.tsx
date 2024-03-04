import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSquareCode = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={18} x={3} y={3} rx={2} />
    <path d="m10 10-2 2 2 2" />
    <path d="m14 14 2-2-2-2" />
  </svg>
)
export default SvgFeatherSquareCode
