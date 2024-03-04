import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSquareAsterisk = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 8v8" />
    <path d="m8.5 14 7-4" />
    <path d="m8.5 10 7 4" />
  </svg>
)
export default SvgFeatherSquareAsterisk
