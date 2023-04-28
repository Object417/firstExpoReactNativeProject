import GrowContainer from "@/components/GrowContainer"
import getRandomItems from "@/helpers/getRandomItems"
import { fullHiraganaSelector } from "@/store/hiraganaSlice"
import { StyleSheet, View } from "react-native"
import { Button, Text, useTheme } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"

import {
  quizStateSelector,
  setWordIndex,
  setWordList,
  setScore
} from "@/store/quizSlice"
import { useState } from "react"
import StyledButton from "@/components/StyledButton"
import HiraganaIcon from "@/icons/japanese-a"
import _ from "lodash"
import { StatusBar } from "expo-status-bar"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16
  },
  btn: {
    width: "100%"
  },
  title: {
    marginBottom: 8
  }
})

function QuizListScreen({ navigation, route }) {
  const dispatch = useDispatch()
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
    <>
      <StatusBar style="light" />
      <GrowContainer style={styles.container}>
        <Text variant="titleLarge" style={styles.title}>
          Select a quiz to play
        </Text>
        <StyledButton
          icon={({ size, color }) => (
            <HiraganaIcon style={{ width: size, height: size }} />
          )}
          onPress={handleStartQuiz}
          style={styles.btn}
        >
          Hiragana Quiz
        </StyledButton>
      </GrowContainer>
    </>
  )
}

export default QuizListScreen
