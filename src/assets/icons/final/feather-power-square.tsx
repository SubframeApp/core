import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherPowerSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 7v5" />
    <path d="M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8" />
  </svg>
)
export default SvgFeatherPowerSquare
