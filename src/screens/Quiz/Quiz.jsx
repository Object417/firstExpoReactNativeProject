import React from "react"
import { StyleSheet, View } from "react-native"
import { Button } from "react-native-paper"
import { useDispatch } from "react-redux"
import { setStatus as setQuizStatus } from "../../store/quizSlice"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

function Quiz() {
  const dispatch = useDispatch()

  function handleFinishQuiz() {
    dispatch(setQuizStatus("finished"))
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleFinishQuiz} mode="contained">
        Results Screen
      </Button>
    </View>
  )
}

export default Quiz
