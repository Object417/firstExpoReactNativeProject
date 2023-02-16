import React from "react"
import { StyleSheet, View } from "react-native"

const styles = StyleSheet.create({
  growContainer: {
    flexGrow: 1
  }
})

function GrowContainer({ children, style }) {
  return <View style={{ ...styles.growContainer, ...style }}>{children}</View>
}

export default GrowContainer
