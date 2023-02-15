import React from "react"
import { StyleSheet, View } from "react-native"
import { Button } from "react-native-paper"
import { useDispatch } from "react-redux"
import {
  setState as setQuizState,
  setStatus as setQuizStatus,
  setWordIndex,
  setWordList
} from "../../store/quizSlice"

import words from "../../store/words.json"
import getRandomItems from "../../helpers/getRandomItems"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  }
})

function Start({ navigation, route }) {
  const dispatch = useDispatch()

  function handleQuizStart() {
    const randomWords = getRandomItems(Object.values(words), 10)

    console.log(randomWords)

    dispatch(setWordList(randomWords))
    dispatch(setWordIndex(0))

    navigation.navigate("Quiz In Progress")
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleQuizStart} mode="contained">
        Start Quiz
      </Button>
    </View>
  )
}

export default Start
