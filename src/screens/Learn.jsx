import Link from "@/components/Link"
import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { View, Image, StyleSheet, ScrollView } from "react-native"
import { Text } from "react-native-paper"

function LearnScreen() {
  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16
    },
    section: {
      marginVertical: 16
    },
    sectionTitle: {
      marginBottom: 4,
      fontWeight: "bold"
    },
    img: {
      width: "100%"
    },
    paragraph: {
      marginVertical: 4
    },
    errAlert: {
      backgroundColor: "red",
      color: "#fff",
      padding: 8,
      marginVertical: 8
    },
    caption: {
      color: "gray"
    }
  })

  const [article, setArticle] = useState([
    {
      id: 1,
      content: [
        `This application is designed for children learning Japanese basics. Here they can look at all hiragana symbols, hear how they are pronounced, and test their knowledge by playing the quiz`
      ]
    },
    {
      id: 2,
      title: `Is There Actually a Japanese Alphabet?`,
      content: [
        `Well, not exactly. The Japanese alphabet is just three writing systems that work together: hiragana, katakana, and kanji.`
      ]
    },
    {
      id: 3,
      title: `Explaining Hiragana and Katakana`,
      content: [
        `Hiragana and katakana are two different ways to write the same set of forty six sounds. They are the closest the Japanese language has to an alphabet. The primary difference between this kind of writing system and an alphabet is that syllabaries represent the whole sound (like "ki" or "ra") rather than individual letters (like "k" or "r").`,
        `Native words are usually written using hiragana, while katakana is used for words borrowed from other languages.`
      ]
    },
    {
      id: 4,
      title: `Hiragana`,
      content: [
        () => (
          <>
            <Image
              source={{
                uri: "https://www.busuu.com/user/pages/japanese/alphabet/_02-body-1/hiragana-chart-japanese-alphabet.jpg"
              }}
              style={{ ...styles.img, aspectRatio: 100 / 144 }}
            />
            <Text style={styles.caption}>
              Image from{" "}
              <Link url={"https://www.busuu.com/en/japanese/alphabet"}>
                www.busuu.com
              </Link>
            </Text>
          </>
        ),
        `Basically, most hiragana symbols can be presented as combination of vowels (a, i, u, e, o) and consonants (k, s, t, n, h, m, y, r, w).However you may noticed that some sounds are written differently(like "shi" instead of "si", "tsu" instead of "tu", or "o" instead of "wo").This is due to Japanese pronunciation peculiarities, so sounds try torepresent as close as possible.`,
        `By the way, the method of representing Japanese syllabaries with latin letters called Romaji. Romaji is not one of Japanese writing systems.It can be helpful in some situations, though romaji is not a reliable substitute for hiragana, katakana, or kanji.`
      ]
    },
    {
      id: 5,
      title: `Katakana`,
      content: [
        () => (
          <>
            <Image
              source={{
                uri: "https://www.busuu.com/user/pages/japanese/alphabet/_04-body-2/katakana-chart-japanese-alphabet-busuu.jpg"
              }}
              style={{ ...styles.img, aspectRatio: 100 / 144 }}
            />
            <Text style={styles.caption}>
              Image from{" "}
              <Link url={"https://www.busuu.com/en/japanese/alphabet"}>
                www.busuu.com
              </Link>
            </Text>
          </>
        )
      ]
    },
    { id: 6, title: `Dakuten, Handakuten, and Yoon`, content: [``] }
  ])

  return (
    <>
      <StatusBar style="light" />
      <ScrollView style={styles.container}>
        {article.map((section, index) => (
          <View key={section.id} style={styles.section}>
            {section.title ? (
              <Text variant="titleLarge" style={styles.sectionTitle}>
                {section.title}
              </Text>
            ) : null}
            {section.content.map((block, index) => (
              <View key={index}>
                {typeof block === "function" ? (
                  block()
                ) : typeof block === "string" ? (
                  <Text variant="bodyLarge" style={styles.paragraph}>
                    {block}
                  </Text>
                ) : (
                  <Text
                    variant="bodyLarge"
                    style={styles.errAlert}
                  >{`Can't handle ${String(block)}`}</Text>
                )}
              </View>
            ))}
          </View>
        ))}
      </ScrollView>
    </>
  )
}

export default LearnScreen
