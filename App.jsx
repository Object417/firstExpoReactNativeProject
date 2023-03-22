import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { Provider as StoreProvider } from "react-redux"
import store from "@Store/store"

import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper"

import LearnScreen from "@Screens/Learn"
import QuizScreen from "@Screens/Quiz"
import HiraganaScreen from "@Screens/Hiragana"

// For some reason this shit throws an error when is imported first
// So I decided just to put it in the end
import HomeScreen from "@Screens/Home"

const Stack = createStackNavigator()

function App() {
  const [screens, setScreens] = useState([
    {
      name: "Home",
      component: HomeScreen,
      icon: { name: "home" }
    },
    {
      name: "Learn",
      component: LearnScreen,
      icon: { name: "learn" }
    },
    {
      name: "Hiragana",
      component: HiraganaScreen,
      icon: { name: "hiragana" }
    },
    {
      name: "Quiz",
      component: QuizScreen,
      icon: { name: "quiz" }
    }
  ])

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            {screens.map(({ name, component, icon }) => (
              <Stack.Screen key={name} name={name} component={component} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App
