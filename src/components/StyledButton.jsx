import React from "react"
import { useState } from "react"
import { Image, StyleSheet } from "react-native"
import { Button, useTheme, Text } from "react-native-paper"

function StyledButton({ children, icon, ...props }) {
  const theme = useTheme()
  const [isPressed, setIsPressed] = useState(false)

  const styles = StyleSheet.create({
    btnNormal: {
      // FIXME: put the color into theme palette
      // FIXME: use StyleSheet.create()
      shadowColor: "#0D6EFD",
      shadowOffset: { width: 4, height: 4 },
      shadowRadius: 0,
      shadowOpacity: 1,
      borderRadius: 100
    },
    btnPressed: {
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      borderRadius: 100,
      position: "relative",
      bottom: -4,
      right: -4
    }
  })

  return (
    <Button
      mode="contained"
      buttonColor={theme.colors.primary}
      labelStyle={{ fontSize: 32 }}
      icon={({ size, color }) => (
        <Image source={icon} style={{ width: size, height: size }} />
      )}
      style={isPressed ? styles.btnPressed : styles.btnNormal}
      onPressIn={(e) => setIsPressed(true)}
      onPressOut={(e) => setIsPressed(false)}
      {...props}
    >
      <Text variant="titleLarge" style={{ color: "#fff" }}>
        {children}
      </Text>
    </Button>
  )
}

export default StyledButton
