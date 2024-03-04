import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherBookmarkPlus = (props: SVGProps<SVGSVGElement>) => (
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
    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    <line x1={12} x2={12} y1={7} y2={13} />
    <line x1={15} x2={9} y1={10} y2={10} />
  </svg>
)
export default SvgFeatherBookmarkPlus
