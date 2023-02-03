import React, { useEffect } from "react"
import { View, ScrollView } from "react-native"
import { Text, Button, List } from "react-native-paper"
import { useSelector } from "react-redux"
import { hiraganaSelector } from "../store/hiraganaSlice"

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
          title={hiragana.symbolUnicode}
          description={hiragana.letter}
        />
      ))}
    </ScrollView>
  )
}

export default About
