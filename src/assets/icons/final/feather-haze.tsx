import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherHaze = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m5.2 6.2 1.4 1.4" />
    <path d="M2 13h2" />
    <path d="M20 13h2" />
    <path d="m17.4 7.6 1.4-1.4" />
    <path d="M22 17H2" />
    <path d="M22 21H2" />
    <path d="M16 13a4 4 0 0 0-8 0" />
    <path d="M12 5V2.5" />
  </svg>
)
export default SvgFeatherHaze
