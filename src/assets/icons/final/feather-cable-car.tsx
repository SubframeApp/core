import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherCableCar = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M10 3h.01" />
    <path d="M14 2h.01" />
    <path d="m2 9 20-5" />
    <path d="M12 12V6.5" />
    <rect width={16} height={10} x={4} y={12} rx={3} />
    <path d="M9 12v5" />
    <path d="M15 12v5" />
    <path d="M4 17h16" />
  </svg>
)
export default SvgFeatherCableCar
