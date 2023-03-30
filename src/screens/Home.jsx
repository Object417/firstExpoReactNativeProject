import GrowContainer from "@/components/GrowContainer"
import StyledButton from "@/components/StyledButton"
import UserProfile from "@/components/UserProfile"
import { StyleSheet } from "react-native"
import { useTheme } from "react-native-paper"

import BackpackIcon from "@/icons/backpack"
import ChessIcon from "@/icons/chess"
import HiraganaIcon from "@/icons/japanese-a"

import HomeBg from "@/imgs/home-bg"
import Constants from "expo-constants"
import { StatusBar } from "expo-status-bar"

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16
  },
  bgImg: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1
  }
})

function Home({ navigation, route }) {
  const theme = useTheme()

  return (
    <GrowContainer>
      <StatusBar style="dark" />
      <HomeBg style={styles.bgImg} />
      <GrowContainer
        style={{ ...styles.container, paddingTop: Constants.statusBarHeight }}
      >
        <UserProfile />
        <GrowContainer style={{ justifyContent: "center" }}>
          <StyledButton
            icon={({ size, color }) => (
              <ChessIcon style={{ width: size, height: size }} />
            )}
            onPress={() => navigation.navigate("Quiz")}
            style={{ marginVertical: 4 }}
          >
            Start Quiz
          </StyledButton>
          <StyledButton
            icon={({ size, color }) => (
              <HiraganaIcon style={{ width: size, height: size }} />
            )}
            onPress={() => navigation.navigate("Hiragana")}
            style={{ marginVertical: 4 }}
          >
            Learn Hiragana
          </StyledButton>
          <StyledButton
            icon={({ size, color }) => (
              <BackpackIcon style={{ width: size, height: size }} />
            )}
            onPress={() => navigation.navigate("Learn")}
            style={{ marginVertical: 4 }}
          >
            Explaining Japanese
          </StyledButton>
        </GrowContainer>
      </GrowContainer>
    </GrowContainer>
  )
}

export default Home
