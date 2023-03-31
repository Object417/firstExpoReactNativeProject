import React, { useEffect } from "react"
import { StyleSheet, Image } from "react-native"
import { Appbar, Text, useTheme } from "react-native-paper"

function CustomNavigationHeader({ layout, navigation, route, options }) {
  const theme = useTheme()

  const styles = StyleSheet.create({
    header: {
      backgroundColor: theme.colors.primary
    },
    icon: { width: 32, height: 32, marginRight: 8 }
  })

  return (
    <Appbar.Header style={styles.header}>
      {navigation.canGoBack ? (
        <Appbar.BackAction color="#fff" onPress={() => navigation.goBack()} />
      ) : null}
      {options.icon ? options.icon({ style: styles.icon }) : null}
      <Appbar.Content title={options.title} color="#fff" />
    </Appbar.Header>
  )
}

export default CustomNavigationHeader
