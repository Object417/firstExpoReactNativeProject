import { useState } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"
import { Text, useTheme } from "react-native-paper"

function StyledButton({ children, icon, style, ...props }) {
  const theme = useTheme()
  const [isPressed, setIsPressed] = useState(false)

  const styles = StyleSheet.create({
    btn: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: theme.colors.primary,
      borderRadius: 50,
      padding: 8,
      position: "relative"
    },
    btnText: {
      marginLeft: 8,
      color: "#fff"
    },
    btnDepth: {
      backgroundColor: "#0D6EFD",
      position: "absolute",
      top: 4,
      right: -4,
      bottom: -4,
      left: 4,
      zIndex: -1,
      borderRadius: 50
    },
    btnNormal: {},
    btnPressed: {
      bottom: -4,
      right: -4
    },
    btnContainer: {
      position: "relative"
    }
  })

  return (
    <TouchableWithoutFeedback
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      {...props}
    >
      <View style={{ ...styles.btnContainer, ...style }}>
        <View
          style={{
            ...styles.btn,
            ...(isPressed ? styles.btnPressed : styles.btnNormal)
          }}
        >
          {icon ? icon({ size: 32 }) : null}
          <Text variant="titleLarge" style={styles.btnText}>
            {children}
          </Text>
        </View>
        <View style={styles.btnDepth} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default StyledButton
