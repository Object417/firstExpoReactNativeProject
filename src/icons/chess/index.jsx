import Svg, { Path, Rect } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
    <Rect width={12} height={14} x={10} y={13} fill="#d6b5b0" rx={1} ry={1} />
    <Path
      fill="#c4a19d"
      d="M21 13h-2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h2a1 1 0 0 0 1-1V14a1 1 0 0 0-1-1Z"
    />
    <Path
      fill="#c9c1f5"
      d="M22.79 9h-14a1 1 0 0 0-1 1v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2a1 1 0 0 0-1-1Z"
    />
    <Path
      fill="#b0aae8"
      d="M23 9a.94.94 0 0 1 .06.29v2a3 3 0 0 1-3 3H10a3 3 0 0 1-1.57-.45A3 3 0 0 0 10.79 15h10a3 3 0 0 0 3-3v-2A1 1 0 0 0 23 9Z"
    />
    <Path
      fill="#c9c1f5"
      d="m27 29.76-.62-2.49A3 3 0 0 0 23.44 25H8.56a3 3 0 0 0-2.91 2.27L5 29.76a1 1 0 0 0 .18.86A1 1 0 0 0 6 31h20a1 1 0 0 0 .79-.38 1 1 0 0 0 .21-.86Z"
    />
    <Path
      fill="#b0aae8"
      d="m27 29.76-.62-2.49A3 3 0 0 0 23.44 25H8.56A3 3 0 0 0 6 26.44 3.08 3.08 0 0 1 7.56 26h14.88a3 3 0 0 1 2.91 2.27l.65 2.49a1 1 0 0 1 0 .24 1 1 0 0 0 .79-.38 1 1 0 0 0 .21-.86Z"
    />
    <Path
      fill="#ffc661"
      d="M26 1h-4a1 1 0 0 0-1 1v3h-2V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v3h-2V2a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V2a1 1 0 0 0-1-1Z"
    />
    <Path
      fill="#f7b54b"
      d="M26 1h-.08v6a3 3 0 0 1-3 3h-16a3 3 0 0 1-1.44-.38A3 3 0 0 0 8 11h16a3 3 0 0 0 3-3V2a1 1 0 0 0-1-1Z"
    />
  </Svg>
)

export default SvgComponent
