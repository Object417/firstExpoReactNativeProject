import * as sounds from "@/audio/hiragana"
import {
  dakutenSelector,
  handakutenSelector,
  hiraganaBaseSelector
} from "@Store/hiraganaSlice"
import { Audio } from "expo-av"
import _ from "lodash"

import { useEffect, useState } from "react"
import { Dimensions, ScrollView, StyleSheet, View } from "react-native"
import { Card, Text } from "react-native-paper"
import { useSelector } from "react-redux"

function HiraganaScreen() {
  const styles = StyleSheet.create({
    title: {},
    container: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 8,
      marginBottom: 16
    },
    symbolCard: {
      flexGrow: 1,
      // workaround. I don't know why it calculates incorrectly
      flexBasis: (Dimensions.get("window").width - 32) / 5 - 8,
      maxWidth: (Dimensions.get("window").width - 32) / 5 - 6
    },
    symbolCardContainer: {
      padding: "8px"
    },
    symbolCardText: {
      textAlign: "center"
    }
  })

  const hiragana = useSelector(hiraganaBaseSelector)
  const dakuten = useSelector(dakutenSelector)
  const handakuten = useSelector(handakutenSelector)

  const hiraganaPlus = [
    { title: "Hiragana", symbols: _.values(hiragana) },
    { title: "Dakuten", symbols: _.values(dakuten) },
    { title: "Handakuten", symbols: _.values(handakuten) }
  ]

  const [sound, setSound] = useState(null)

  async function handleCardPress(letter) {
    const { sound } = await Audio.Sound.createAsync(sounds[letter + "Sound"])
    setSound(sound)
    await sound.playAsync()
  }

  // Remove previous sound when new is loaded
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync()
        }
      : undefined
  }, [sound])

  return (
    <ScrollView style={{ paddingHorizontal: 16 }}>
      {hiraganaPlus.map(({ title, symbols }) => (
        <View key={title}>
          <Text variant="titleLarge" style={styles.title}>
            {title}
          </Text>
          <View style={styles.container}>
            {symbols.map(({ letter, symbol }) => (
              <Card
                key={letter}
                style={styles.symbolCard}
                onPress={() => handleCardPress(letter)}
              >
                <Card.Content style={{ padding: 8 }}>
                  <Text variant="titleLarge" style={styles.symbolCardText}>
                    {symbol}
                  </Text>
                  <Text variant="bodyMedium" style={styles.symbolCardText}>
                    {letter}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  )
}

export default HiraganaScreen
