import React, { useState } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

import { Provider as StoreProvider } from "react-redux"
import store from "@Store/store"
import theme from "@Store/theme"

import {
  Avatar,
  MD3LightTheme,
  Provider as PaperProvider
} from "react-native-paper"

import LearnScreen from "@Screens/Learn"
import QuizScreen from "@Screens/Quiz"
import HiraganaScreen from "@Screens/Hiragana"

// For some reason this shit throws an error when is imported first
// So I decided just to put it in the end
import HomeScreen from "@Screens/Home"
import { Image } from "react-native"
import _ from "lodash"

import chessIcon from "@/icons/chess.svg"
import backpackIcon from "@/icons/backpack.svg"

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
        title: "Explaining Japanese"
        // headerLeft: () => <Avatar.Image source={backpackIcon} size={32} />
      }
    },
    {
      name: "Hiragana",
      component: HiraganaScreen,
      options: {
        title: "Learn Hiragana"
      }
    },
    {
      name: "Quiz",
      component: QuizScreen,
      options: {
        title: "Quiz"
        // headerLeft: () => <Avatar.Image source={chessIcon} size={24} />
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
              headerStyle: {
                backgroundColor: theme.colors.primary
              },
              headerTitleStyle: {
                color: "#fff",
                ...theme.fonts.titleLarge
              }
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
