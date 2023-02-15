import React from "react"
import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import {
  quizStateSelector,
  setStatus as setQuizStatus
} from "../../store/quizSlice"

function Results() {
  const dispatch = useDispatch()
  const { score } = useSelector(quizStateSelector)

  function handleStartQuiz() {
    dispatch(setQuizStatus("not started"))
  }

  return (
    <View>
      <Text>Score: {score}</Text>
      <Button onPress={handleStartQuiz}>Start Again</Button>
    </View>
  )
}

export default Results
