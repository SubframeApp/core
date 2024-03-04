import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherArrowDownCircle = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 8v8" />
    <path d="m8 12 4 4 4-4" />
  </svg>
)
export default SvgFeatherArrowDownCircle
