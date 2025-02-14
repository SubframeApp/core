import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherSignpost = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M12 3v3" />
    <path d="M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z" />
    <path d="M12 13v8" />
  </svg>
)
export default SvgFeatherSignpost
