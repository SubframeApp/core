import * as React from "react"
import { SVGProps } from "react"
const SvgFeatherBike = (props: SVGProps<SVGSVGElement>) => (
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
    <circle cx={18.5} cy={17.5} r={3.5} />
    <circle cx={5.5} cy={17.5} r={3.5} />
    <circle cx={15} cy={5} r={1} />
    <path d="M12 17.5V14l-3-3 4-3 2 3h2" />
  </svg>
)
export default SvgFeatherBike
