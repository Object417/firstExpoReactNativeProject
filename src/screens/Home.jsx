import GrowContainer from "@Components/GrowContainer"
import UserProfile from "@Components/UserProfile"
import { View, StyleSheet, Image } from "react-native"
import {
  Button,
  Provider as PaperProvider,
  Text,
  useTheme
} from "react-native-paper"
import StyledButton from "@Components/StyledButton"

import chessIcon from "@/icons/chess.svg"
import hiraganaIcon from "@/icons/japanese-a.svg"
import backpackIcon from "@/icons/backpack.svg"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  }
})

function Home({ navigation, route }) {
  const theme = useTheme()

  return (
    <GrowContainer style={styles.container}>
      <UserProfile />
      <GrowContainer style={{ justifyContent: "center", gap: 16 }}>
        <StyledButton
          icon={chessIcon}
          onPress={() => navigation.navigate("Quiz")}
        >
          Start Quiz
        </StyledButton>
        <StyledButton
          icon={hiraganaIcon}
          onPress={() => navigation.navigate("Hiragana")}
        >
          Learn Hiragana
        </StyledButton>
        <StyledButton
          icon={backpackIcon}
          onPress={() => navigation.navigate("Learn")}
        >
          Explaining Japanese
        </StyledButton>
      </GrowContainer>
    </GrowContainer>
  )
}

export default Home
