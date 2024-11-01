import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherArrowDownToDot = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 2v14" />
    <path d="m19 9-7 7-7-7" />
    <circle cx={12} cy={21} r={1} />
  </svg>
)
export default SvgFeatherArrowDownToDot
