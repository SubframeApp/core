import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherMails = (props: SVGProps<SVGSVGElement>) => (
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
    <rect width={16} height={13} x={6} y={4} rx={2} />
    <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
    <path d="M2 8v11c0 1.1.9 2 2 2h14" />
  </svg>
)
export default SvgFeatherMails
