import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherPowerCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={12} cy={12} r={10} />
    <path d="M12 12V6" />
    <path d="M8 7.5A6.1 6.1 0 0 0 12 18a6 6 0 0 0 4-10.5" />
  </svg>
)
export default SvgFeatherPowerCircle
