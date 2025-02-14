import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherActivitySquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M17 12h-2l-2 5-2-10-2 5H7" />
  </svg>
)
export default SvgFeatherActivitySquare
