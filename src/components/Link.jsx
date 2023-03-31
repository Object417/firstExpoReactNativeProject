import React from "react"
import { Linking, StyleSheet } from "react-native"
import { Text, useTheme } from "react-native-paper"

function Link({ url, children, style, ...props }) {
  const theme = useTheme()

  const styles = StyleSheet.create({
    link: {
      color: theme.colors.primary,
      textDecorationStyle: "solid",
      textDecorationLine: "underline"
    }
  })

  function handlePress() {
    Linking.openURL(url)
  }

  return (
    <Text onPress={handlePress} style={{ ...styles.link, ...style }} {...props}>
      {children}
    </Text>
  )
}

export default Link
