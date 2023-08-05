import * as React from "react"
const SvgComponent = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={52}
    height={49}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#607B96"
        d="M28 26h2.5l1-4H28v-2c0-1.03 0-2 2-2h1.5v-3.36c-.326-.043-1.557-.14-2.857-.14-2.715 0-4.643 1.657-4.643 4.7V22h-3v4h3v8.5h4V26Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M14 12.5h24v24H14z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
