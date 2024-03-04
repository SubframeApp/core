import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherLayoutTemplate = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={18} height={7} x={3} y={3} rx={1} />
    <rect width={9} height={7} x={3} y={14} rx={1} />
    <rect width={5} height={7} x={16} y={14} rx={1} />
  </svg>
)
export default SvgFeatherLayoutTemplate
