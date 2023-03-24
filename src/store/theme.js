import _ from "lodash"
import { MD3LightTheme } from "react-native-paper"

const theme = _.merge({}, MD3LightTheme, {
  colors: {
    primary: "rgba(28, 176, 246, 1)"
  }
})

export default theme
