import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherConstruction = (props: SVGProps<SVGSVGElement>) => (
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
    <rect x={2} y={6} width={20} height={8} rx={1} />
    <path d="M17 14v7" />
    <path d="M7 14v7" />
    <path d="M17 3v3" />
    <path d="M7 3v3" />
    <path d="M10 14 2.3 6.3" />
    <path d="m14 6 7.7 7.7" />
    <path d="m8 6 8 8" />
  </svg>
)
export default SvgFeatherConstruction
