import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherFileLock = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <rect width={8} height={6} x={8} y={12} rx={1} />
    <path d="M15 12v-2a3 3 0 1 0-6 0v2" />
  </svg>
)
export default SvgFeatherFileLock
