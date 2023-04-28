import {
  quizStateSelector,
  setScore,
  setWordIndex,
  setWordList
} from "@/store/quizSlice"
import { fullHiraganaSelector } from "@/store/hiraganaSlice"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import StyledButton from "@/components/StyledButton"
import GrowContainer from "@/components/GrowContainer"
import _ from "lodash"

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16
  }
})

function Results({ navigation, route }) {
  const dispatch = useDispatch()
  const { score } = useSelector(quizStateSelector)
  const fullHiragana = useSelector(fullHiraganaSelector)

  function handleStartQuiz() {
    const fullHiraganaArr = _.values(fullHiragana)
    const symbolsList = _.sampleSize(fullHiraganaArr, 10)

    dispatch(setWordList(symbolsList))
    dispatch(setWordIndex(0))
    dispatch(setScore(0))

    navigation.navigate("QuizQuestion")
  }

  return (
    <GrowContainer style={styles.container}>
      <Text variant="titleLarge" style={{ marginBottom: 8 }}>
        Score: {score}
      </Text>
      <StyledButton onPress={handleStartQuiz} style={{ width: "100%" }}>
        Play Again
      </StyledButton>
    </GrowContainer>
  )
}

export default Results
