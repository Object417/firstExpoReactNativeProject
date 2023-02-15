import React, { useEffect } from "react"
import { View, ScrollView, StyleSheet } from "react-native"
import { Text, Button, List, Divider } from "react-native-paper"

import { useSelector } from "react-redux"
import { hiraganaSelector } from "../store/hiraganaSlice"

import capitalizeFirstChar from "../helpers/capitalizeFirstChar"

const styles = StyleSheet.create({
  listContainer: {
    flexGrow: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  listHeader: {
    flexBasis: "100%"
  },
  listItem: {
    flexBasis: "20%"
  }
})

function About({ navigation, route }) {
  const hiragana = useSelector(hiraganaSelector)

  return (
    <ScrollView>
      {Object.keys(hiragana).map((groupName) => (
        <List.Section
          key={groupName}
          title={capitalizeFirstChar(groupName) + " Symbols"}
          style={styles.listContainer}
          titleStyle={styles.listHeader}
        >
          {Object.values(hiragana[groupName]).map((hiragana) => (
            <List.Item
              key={hiragana.letter}
              title={hiragana.symbol}
              description={hiragana.letter}
              style={styles.listItem}
            />
          ))}
        </List.Section>
      ))}
    </ScrollView>
  )
}

export default About
