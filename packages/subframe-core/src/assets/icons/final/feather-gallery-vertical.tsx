import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherGalleryVertical = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M3 2h18" />
    <rect width={18} height={12} x={3} y={6} rx={2} />
    <path d="M3 22h18" />
  </svg>
)
export default SvgFeatherGalleryVertical
