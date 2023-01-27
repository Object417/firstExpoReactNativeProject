import React, { useEffect } from "react"
import { Appbar } from "react-native-paper"

function CustomNavigationHeader({ route, navigation, back }) {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={() => navigation.goBack()} /> : null}
      <Appbar.Content title={route.name} />
    </Appbar.Header>
  )
}

export default CustomNavigationHeader
