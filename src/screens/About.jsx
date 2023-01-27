import React from "react"
import { View } from "react-native"
import { Text, Button } from "react-native-paper"

function About({ navigation }) {
  return (
    <View>
      <Text variant="bodyMedium">About screen</Text>
      <Button mode="contained" onPress={() => navigation.navigate("Home")}>
        Home
      </Button>
    </View>
  )
}

export default About
