import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { useSelector } from "react-redux"
import { quizStateSelector } from "../../store/quizSlice"

import { default as QuizStartScreen } from "./Start"
import { default as QuizResultsScreen } from "./Results"
import { default as QuizScreen } from "./Quiz"

const styles = StyleSheet.create({
  container: {}
})

function Quiz({ navigation, route }) {
  const { status } = useSelector(quizStateSelector)

  return status === "not started" ? (
    <QuizStartScreen />
  ) : status === "finished" ? (
    <QuizResultsScreen />
  ) : status === "in progress" ? (
    <QuizScreen />
  ) : (
    <Text>Error! Unknown Quiz status: {status}</Text>
  )
}

export default Quiz
