import * as React from "react"
import type { SVGProps } from "react"
const SvgFeatherVoicemail = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={6} cy={12} r={4} />
    <circle cx={18} cy={12} r={4} />
    <line x1={6} x2={18} y1={16} y2={16} />
  </svg>
)
export default SvgFeatherVoicemail
