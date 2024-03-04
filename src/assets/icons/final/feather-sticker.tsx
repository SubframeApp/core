import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherSticker = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z" />
    <path d="M15 3v6h6" />
    <path d="M10 16s.8 1 2 1c1.3 0 2-1 2-1" />
    <path d="M8 13h0" />
    <path d="M16 13h0" />
  </svg>
)
export default SvgFeatherSticker
