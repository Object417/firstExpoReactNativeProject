import Svg, { Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <Path
      fill="#f0e6e2"
      d="M18 7h-4a1 1 0 0 1-1-1V4a3 3 0 0 1 6 0v2a1 1 0 0 1-1 1Zm-3-2h2V4a1 1 0 0 0-2 0Z"
    />
    <Path
      fill="#ff7d97"
      d="M6 21H4a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1Z"
    />
    <Path
      fill="#ff5d7d"
      d="M5 22h2a1 1 0 0 0-1-1H4a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1v-6a3 3 0 0 1 3-3Z"
    />
    <Path
      fill="#ff7d97"
      d="M28 21h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-6a3 3 0 0 0-3-3Z"
    />
    <Path fill="#ff5d7d" d="M26 21a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2V21Z" />
    <Path fill="#ffcd69" d="M18 5h-4a9 9 0 0 0-9 9v17h22V14a9 9 0 0 0-9-9Z" />
    <Path
      fill="#ffc144"
      d="M7 15a9 9 0 0 1 9-9h4a8.88 8.88 0 0 1 3 .53A8.91 8.91 0 0 0 18 5h-4a9 9 0 0 0-9 9v17h2Z"
    />
    <Path fill="#faf7f5" d="M20 21h-8a3 3 0 0 0-3 3v7h14v-7a3 3 0 0 0-3-3Z" />
    <Path
      fill="#f0e6e2"
      d="M11 26a3 3 0 0 1 3-3h8a3 3 0 0 1 .86.14A3 3 0 0 0 20 21h-8a3 3 0 0 0-3 3v7h2zm10-12H11a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
    />
    <Path
      fill="#f0e6e2"
      d="M19 16a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1Z"
    />
  </Svg>
)

export default SvgComponent
