import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherComputer = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={14} height={8} x={5} y={2} rx={2} />
    <rect width={20} height={8} x={2} y={14} rx={2} />
    <path d="M6 18h2" />
    <path d="M12 18h6" />
  </svg>
)
export default SvgFeatherComputer
