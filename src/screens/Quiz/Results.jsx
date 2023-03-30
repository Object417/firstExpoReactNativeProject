import { quizStateSelector } from "@/store/quizSlice"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

function Results({ navigation, route }) {
  const dispatch = useDispatch()
  const { score } = useSelector(quizStateSelector)

  function handleStartQuiz() {
    navigation.navigate("Start Quiz")
  }

  return (
    <View style={styles.container}>
      <Text>Score: {score}</Text>
      <Button onPress={handleStartQuiz} mode="contained">
        Start Again
      </Button>
    </View>
  )
}

export default Results
