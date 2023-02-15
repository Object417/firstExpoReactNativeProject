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

function Start() {
  const dispatch = useDispatch()

  function handleQuizStart() {
    dispatch(setQuizStatus("in progress"))
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleQuizStart}>Start Quiz</Button>
    </View>
  )
}

export default Start
