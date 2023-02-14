import React, { useEffect } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Text, Button, List, Divider } from "react-native-paper"
import { useSelector } from "react-redux"
import { hiraganaBaseSelector } from "../store/hiraganaSlice"

import words from "../store/words.json"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  symbolCard: {
    flexGrow: 1,
    flexShrink: 1
  }
})

function About({ navigation, route }) {
  const hiragana = useSelector(hiraganaBaseSelector)

  return (
    <ScrollView>
      <List.Subheader>Hiragana Symbols</List.Subheader>
      <View style={styles.container}>
        {Object.values(hiragana).map((hiragana, index) => (
          <List.Item
            key={hiragana.letter}
            style={styles.symbolCard}
            title={hiragana.symbol}
            description={hiragana.letter}
          />
        ))}
      </View>
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
