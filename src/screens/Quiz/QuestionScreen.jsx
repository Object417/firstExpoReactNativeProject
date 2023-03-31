import { quizStateSelector, setWordIndex } from "@/store/quizSlice"
import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"

function QuestionScreen({ navigation, route }) {
  const dispatch = useDispatch()

  const { wordList, wordIndex } = useSelector(quizStateSelector)
  const letterObj = wordList[wordIndex]

  function handlePrevQuestion() {
    dispatch(setWordIndex(wordIndex - 1))
    navigation.navigate("question-" + letterObj.letter)
  }
  function handleNextQuestion() {
    dispatch(setWordIndex(wordIndex + 1))
    navigation.navigate("question-" + letterObj.letter)
  }

  return (
    <View>
      <Text>{letterObj.symbol + " " + letterObj.letter}</Text>
      <Button onPress={handlePrevQuestion} disabled={wordIndex === 0}>
        Prev
      </Button>
      <Button
        onPress={handleNextQuestion}
        disabled={wordIndex === wordList.length - 1}
      >
        Next
      </Button>
    </View>
  )
}

export default QuestionScreen
