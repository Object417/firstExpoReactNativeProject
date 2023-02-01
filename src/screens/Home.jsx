import { View, StyleSheet } from "react-native"
import { Button, Provider as PaperProvider, Text } from "react-native-paper"

function Home({ navigation, route }) {
  return (
    <View>
      <Text variant="bodyMedium">Home screen</Text>
      {/* <Button mode="contained" onPress={() => navigation.navigate("About")}>
        About
      </Button> */}
    </View>
  )
}

export default Home
