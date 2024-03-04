import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherNetwork = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={16} y={16} width={6} height={6} rx={1} />
    <rect x={2} y={16} width={6} height={6} rx={1} />
    <rect x={9} y={2} width={6} height={6} rx={1} />
    <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
    <path d="M12 12V8" />
  </svg>
)
export default SvgFeatherNetwork
