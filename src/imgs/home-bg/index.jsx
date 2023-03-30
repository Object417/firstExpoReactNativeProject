import Svg, { Circle, ClipPath, Defs, G, Path } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={412}
    height={808}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)" fill="#F8F9FA">
      <Circle cx={0.5} cy={81.5} r={167.5} />
      <Circle cx={394.5} cy={213.5} r={86.5} />
      <Circle cx={7.5} cy={828.5} r={143.5} />
      <Circle cx={121.5} cy={697.5} r={23.5} />
      <Circle cx={239} cy={739} r={44} />
      <Circle cx={39} cy={657} r={20} />
      <Circle cx={86} cy={637} r={20} />
      <Circle cx={288} cy={269} r={20} />
      <Circle cx={345} cy={470} r={20} />
      <Circle cx={315.5} cy={609.5} r={96.5} />
      <Circle cx={195} cy={404} r={136} />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h412v808H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default SvgComponent
