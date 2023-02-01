import React, { useEffect } from "react"
import { Appbar, Text } from "react-native-paper"

function CustomNavigationHeader({ layout, navigation, route, options }) {
  // console.log(props)

  return (
    <Appbar.Header>
      {/* {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null} */}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  )
}

export default CustomNavigationHeader
