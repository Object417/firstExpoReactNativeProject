import React from "react"
import { StyleSheet, View, ScrollView } from "react-native"
import { Button, List } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import {
  quizStateSelector,
  setStatus as setQuizStatus
} from "../../store/quizSlice"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // alignItems: "center",
    justifyContent: "center"
  }
})

function Quiz({ navigation, route }) {
  const dispatch = useDispatch()
  const { wordList } = useSelector(quizStateSelector)

  function handleFinishQuiz() {
    navigation.navigate("Quiz Results")
  }

  return (
    <ScrollView>
      <List.Section title="Quiz Words">
        {wordList.map(({ word, kanji, hiragana, meaning }) => (
          <List.Item key={word} title={kanji} description={meaning} />
        ))}
      </List.Section>

      <Button onPress={handleFinishQuiz} mode="contained">
        Results Screen
      </Button>
    </ScrollView>
  )
}

export default Quiz
