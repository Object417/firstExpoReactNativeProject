import { useMemo, useState } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Button, SegmentedButtons, Text, TextInput } from "react-native-paper"
import { useSelector } from "react-redux"
import { hiraganaSelector } from "../store/hiraganaSlice"

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: "0.5rem"
  },
  buttonGroup: {
    flexDirection: "row",
    marginTop: "1rem",
    paddingHorizontal: "0.5rem",
    gap: "0.5rem"
  },
  flexButton: {
    flex: 1
  }
})

function Admin({ navigation, route }) {
  const hiragana = useSelector(hiraganaSelector)

  const [letterIndex, setLetterIndex] = useState(0)

  const hiraganaLetterObj = useMemo(() => {
    const hiraganaLetter = Object.keys(hiragana)[letterIndex]
    return hiragana[hiraganaLetter]
  }, [hiragana, letterIndex])

  function handleGoNext() {
    if (letterIndex >= Object.keys(hiragana).length - 1) {
      return
    }

    setLetterIndex((letterIndex) => letterIndex + 1)
  }

  function handleGoPrev() {
    if (letterIndex <= 0) {
      return
    }

    setLetterIndex((letterIndex) => letterIndex - 1)
  }

  return (
    <ScrollView style={styles.container}>
      <TextInput label="Letter" value={hiraganaLetterObj.letter} />
      <TextInput
        label="Symbol"
        value={hiraganaLetterObj.symbol || hiraganaLetterObj.symbolUnicode}
      />
      <View style={styles.buttonGroup}>
        <Button
          mode="contained"
          style={styles.flexButton}
          disabled={letterIndex <= 0}
          onPress={handleGoPrev}
        >
          Previous
        </Button>
        <Button
          mode="contained"
          style={styles.flexButton}
          disabled={letterIndex >= Object.keys(hiragana).length - 1}
          onPress={handleGoNext}
        >
          Next
        </Button>
      </View>
    </ScrollView>
  )
}

export default Admin
