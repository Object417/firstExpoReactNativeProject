import GrowContainer from "@/components/GrowContainer"
import getRandomItems from "@/helpers/getRandomItems"
import { fullHiraganaSelector } from "@/store/hiraganaSlice"
import { StyleSheet, View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"

import { quizStateSelector } from "@/store/quizSlice"

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  card: {
    flexGrow: 1
  },
  btnGroup: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "flex-end",
    gap: "0.5rem",
    padding: "0.5rem"
  },
  optionBtn: {
    width: "100%",
    maxWidth: "calc(50% - 0.25rem)",
    flexGrow: 1,
    flexShrink: 1
  }
})

function Quiz({ navigation, route }) {
  const dispatch = useDispatch()
  const hiragana = useSelector(fullHiraganaSelector)
  const { wordList, wordIndex } = useSelector(quizStateSelector)

  const word = wordList[wordIndex]
  let btnOptions = getRandomItems(Object.values(hiragana), 3)
  btnOptions.push({
    ...Object.values(hiragana).find(
      ({ symbol }) => symbol === word.hiragana[0]
    ),
    isCorrect: true
  })
  btnOptions = _.shuffle(btnOptions)

  console.log(btnOptions)

  function handleOptionSelected(letter) {
    word.hiragana[0] === hiragana[letter].symbol
      ? console.log("Correct answer!")
      : console.log("Wrong")
  }

  return (
    <GrowContainer>
      <View style={styles.container}>
        <Text variant="titleLarge">{word.kanji}</Text>
        <Text variant="bodyMedium">{word.meaning}</Text>
      </View>
      <View style={styles.btnGroup}>
        {btnOptions.map(({ letter, symbol, isCorrect }) => (
          <Button
            key={letter}
            mode="contained"
            style={
              isCorrect
                ? { ...styles.optionBtn, backgroundColor: "green" }
                : styles.optionBtn
            }
            onPress={() => handleOptionSelected(letter)}
          >
            {symbol}
          </Button>
        ))}
      </View>
    </GrowContainer>
  )
}

export default Quiz
