import { StatusBar } from "expo-status-bar"
import { Button, StyleSheet, Text, View } from "react-native"
import useCounter from "./src/hooks/useCounter"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
})

function App() {
  const [counter, setCounter, handleIncrement, handleDecrement] = useCounter(0)

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{counter}</Text>
      <Button onPress={handleIncrement} title="+ 1" />
      <Button onPress={handleDecrement} title="- 1" />
      <StatusBar style="auto" />
    </View>
  )
}

export default App
