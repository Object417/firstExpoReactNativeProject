import { useMemo, useState } from "react"
import { quizStateSelector, setWordIndex, setScore } from "@/store/quizSlice"
import { fullHiraganaSelector } from "@/store/hiraganaSlice"
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import { Button, Text, useTheme, Card } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import _ from "lodash"
import GrowContainer from "@/components/GrowContainer"
import { StatusBar } from "expo-status-bar"
import {
  changeUserCorrectAnswers,
  changeUserWrongAnswers,
  setUserCorrectAnswers
} from "@/store/userSlice"

function QuestionScreen({ navigation, route }) {
  const theme = useTheme()
  const dispatch = useDispatch()

  const styles = StyleSheet.create({
    container: {
      padding: 16
    },
    card: {},
    answersContainer: {},
    answerBtn: {
      flex: 1,
      backgroundColor: theme.colors.primary,
      paddingHorizontal: 8,
      paddingVertical: 32,
      borderRadius: 16
    },
    answerBtnText: { color: "#fff", textAlign: "center" },
    correctBtn: { backgroundColor: "#8EE000" },
    wrongBtn: { backgroundColor: "#E53838" }
  })

  const { wordList, wordIndex, score } = useSelector(quizStateSelector)
  const { letter, symbol } = wordList[wordIndex]

  const fullHiragana = useSelector(fullHiraganaSelector)

  const answerVariants = useMemo(() => {
    let arr = [wordList[wordIndex].letter]

    while (arr.length < 4) {
      const wrongVariants = _.sampleSize(_.keys(fullHiragana), 3)

      if (!_.includes(wrongVariants, wordList[wordIndex].letter)) {
        arr = _.shuffle(_.concat(arr, wrongVariants))
      }
    }

    return arr
  }, [wordList, wordIndex])

  const [selectedAnswer, setSelectedAnswer] = useState(null)

  function handleAnswerSelected(e, answerLetter) {
    setSelectedAnswer(answerLetter)

    setTimeout(() => {
      if (answerLetter === wordList[wordIndex].letter) {
        // dispatch(setScore(score + 1))
        dispatch(changeUserCorrectAnswers(1))
      } else {
        dispatch(changeUserWrongAnswers(1))
      }

      if (wordIndex < wordList.length - 1) {
        dispatch(setWordIndex(wordIndex + 1))
      } else {
        navigation.navigate("Quiz", { screen: "QuizResults" })
      }

      setSelectedAnswer(null)
    }, 1000)
  }

  return (
    <GrowContainer style={styles.container}>
      <StatusBar style="light" />
      <Card mode="elevated" style={styles.card}>
        <Card.Cover
          source={{
            uri: "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081"
          }}
        />
        <Card.Content style={{ paddingVertical: 8 }}>
          <Text variant="displayLarge" style={{ textAlign: "center" }}>
            {symbol}
          </Text>
          <Text variant="bodyLarge" style={{ textAlign: "center" }}>
            What sound is it?
          </Text>
        </Card.Content>
      </Card>
      <FlatList
        horizontal={false}
        numColumns={2}
        style={styles.answersContainer}
        contentContainerStyle={{ marginTop: "auto" }}
        data={answerVariants}
        keyExtractor={(item) => item}
        renderItem={({ item, index, separator }) => (
          <TouchableOpacity
            disabled={Boolean(selectedAnswer)}
            activeOpacity={Boolean(selectedAnswer) ? 1 : 0.5}
            onPress={(e) => handleAnswerSelected(e, item)}
            style={{
              ...styles.answerBtn,
              ...(selectedAnswer
                ? item === letter
                  ? styles.correctBtn
                  : styles.wrongBtn
                : {}),
              marginTop: index > 1 ? 8 : 0,
              marginRight: index % 2 === 0 ? 8 : 0
            }}
          >
            <Text variant="titleLarge" style={styles.answerBtnText}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </GrowContainer>
  )
}

export default QuestionScreen
