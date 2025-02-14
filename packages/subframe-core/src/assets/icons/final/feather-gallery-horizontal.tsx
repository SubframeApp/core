import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherGalleryHorizontal = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M2 3v18" />
    <rect width={12} height={18} x={6} y={3} rx={2} />
    <path d="M22 3v18" />
  </svg>
)
export default SvgFeatherGalleryHorizontal
