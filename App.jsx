import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useState } from "react"

import store from "@Store/store"
import theme from "@Store/theme"
import { Provider as StoreProvider } from "react-redux"

import { Provider as PaperProvider } from "react-native-paper"

import HiraganaScreen from "@Screens/Hiragana"
import LearnScreen from "@Screens/Learn"
import QuizScreen from "@Screens/Quiz"

// For some reason this shit throws an error when is imported first
// So I decided just to put it in the end
import HomeScreen from "@Screens/Home"

import backpackIcon from "@/icons/backpack.svg"
import chessIcon from "@/icons/chess.svg"
import hiraganaIcon from "@/icons/japanese-a.svg"
import CustomNavigationHeader from "@Components/CustomNavigationHeader"

const Stack = createStackNavigator()

function App() {
  const [screens, setScreens] = useState([
    {
      name: "Home",
      component: HomeScreen,
      options: {
        headerShown: false
      }
    },
    {
      name: "Learn",
      component: LearnScreen,

      options: {
        title: "Explaining Japanese",
        icon: backpackIcon
      }
    },
    {
      name: "Hiragana",
      component: HiraganaScreen,
      options: {
        title: "Learn Hiragana",
        icon: hiraganaIcon
      }
    },
    {
      name: "Quiz",
      component: QuizScreen,
      options: {
        title: "Quiz",
        icon: chessIcon
      }
    }
  ])

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: (props) => <CustomNavigationHeader {...props} />
            }}
          >
            {screens.map(({ name, component, options }) => (
              <Stack.Screen
                key={name}
                name={name}
                component={component}
                options={options}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App
