import Svg, { Defs, G, Path } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const SvgComponent = (props) => (
  <Svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        d="M27.296 15.996a6.488 6.488 0 0 0-5.334-2.938 7.46 7.46 0 0 0-.174-1.366 1.333 1.333 0 0 0-2.594.616c.06.264.097.532.11.802a18.103 18.103 0 0 0-4.342 1.096c.03-1.606.102-3.21.262-4.81l.05-.51a44.576 44.576 0 0 0 4.644-.885l.16-.04a1.334 1.334 0 1 0-.64-2.589l-.163.04c-1.23.308-2.474.54-3.726.735l.202-2.014a1.334 1.334 0 1 0-2.653-.266l-.262 2.612a41.933 41.933 0 0 1-3.745.188 1.333 1.333 0 1 0 0 2.666c1.16 0 2.32-.062 3.476-.152a62.203 62.203 0 0 0-.271 6.264c-.179.098-.36.19-.537.293a21.89 21.89 0 0 0-2.599 1.747l-.03.024A18.322 18.322 0 0 0 5.6 21.11a4.006 4.006 0 0 0 3.928 6.292c1.324-.252 2.6-.707 3.784-1.352a1.327 1.327 0 0 0 2.429-.936c-.033-.194-.047-.39-.078-.583a18.44 18.44 0 0 0 1.752-1.54 17.554 17.554 0 0 0 2.802-3.64c.03-.052.056-.105.086-.158.158-.28.306-.562.443-.846.071-.148.136-.296.202-.444a13.768 13.768 0 0 0 .438-1.118c.043-.128.081-.255.12-.383a12 12 0 0 0 .189-.672l.007-.024a4.02 4.02 0 0 1 3.287 1.627c1.358 2.356-1.284 6.636-5.889 9.54a1.334 1.334 0 1 0 1.422 2.255c5.998-3.782 8.911-9.425 6.775-13.132ZM9.06 24.776a1.34 1.34 0 0 1-1.306-2.098 15.856 15.856 0 0 1 3.055-3.097l.035-.028c.472-.37.99-.719 1.525-1.058.082 1.594.23 3.183.435 4.767a10.911 10.911 0 0 1-3.744 1.515ZM18.834 16c-.122.355-.263.702-.421 1.042-.075.159-.158.317-.24.476a12.973 12.973 0 0 1-.768 1.296c-.55.823-1.178 1.59-1.876 2.292-.094.093-.192.177-.287.268a59.622 59.622 0 0 1-.281-4.27 16.685 16.685 0 0 1 3.92-1.244c-.016.047-.03.094-.047.14Z"
        fill="#FFCD69"
      />
    </G>
    <Defs></Defs>
  </Svg>
)

export default SvgComponent
