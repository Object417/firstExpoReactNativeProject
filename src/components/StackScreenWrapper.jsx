import React from "react"
import { View, StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  }
})

function StackScreenWrapper({ Component, ...props }) {
  return (
    <View style={styles.container}>
      <Component {...props} />
    </View>
  )
}

export default StackScreenWrapper
