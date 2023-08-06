import * as React from "react"
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={7}
    fill="none"
    {...props}
  >
    <path d="m.96 5.726 5.54-4.59m-5.54 0 5.54 4.59" />
  </svg>
)
export default SvgComponent
