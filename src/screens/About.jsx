import React, { useEffect } from "react"
import { View, ScrollView } from "react-native"
import { Text, Button, List, Divider } from "react-native-paper"
import { useSelector } from "react-redux"
import { hiraganaSelector } from "../store/hiraganaSlice"

import words from "../store/words.json"

function About({ navigation, route }) {
  const hiragana = useSelector(hiraganaSelector)

  // useEffect(() => {
  //   console.log(hiragana)
  // }, [hiragana])

  return (
    <ScrollView>
      <List.Subheader>Hiragana Symbols</List.Subheader>
      {Object.values(hiragana).map((hiragana, index) => (
        <List.Item
          key={hiragana.letter}
          title={hiragana.symbol}
          description={hiragana.letter}
        />
      ))}
      <Divider />
      <List.Subheader>Words</List.Subheader>
      {Object.values(words).map(({ word, kanji, hiragana, meaning }) => (
        <List.Item
          key={word}
          title={`${kanji} (${hiragana})`}
          description={meaning}
        />
      ))}
    </ScrollView>
  )
}

export default About
