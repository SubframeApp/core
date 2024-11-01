import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherPilcrowSquare = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 12H9.5a2.5 2.5 0 0 1 0-5H17" />
    <path d="M12 7v10" />
    <path d="M16 7v10" />
  </svg>
)
export default SvgFeatherPilcrowSquare
