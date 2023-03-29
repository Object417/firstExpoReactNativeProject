import GrowContainer from "@Components/GrowContainer"
import StyledButton from "@Components/StyledButton"
import UserProfile from "@Components/UserProfile"
import { ImageBackground, StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

import backpackIcon from "@/icons/backpack.svg"
import chessIcon from "@/icons/chess.svg"
import hiraganaIcon from "@/icons/japanese-a.svg"

import homeBg from "@/imgs/homeBg.svg"
import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  }
})

function Home({ navigation, route }) {
  const theme = useTheme()

  return (
    <GrowContainer>
      <StatusBar style="dark" />
      <ImageBackground
        source={homeBg}
        resizeMode="cover"
        style={{ flexGrow: 1 }}
      >
        <GrowContainer
          style={{ ...styles.container, paddingTop: Constants.statusBarHeight }}
        >
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
      </ImageBackground>
    </GrowContainer>
  )
}

export default Home
