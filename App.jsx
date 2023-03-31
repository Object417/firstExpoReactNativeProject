import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useState } from "react"

import store from "@/store/store"
import theme from "@/store/theme"
import { Provider as StoreProvider } from "react-redux"

import { Provider as PaperProvider } from "react-native-paper"

import HiraganaScreen from "@/screens/Hiragana"
import LearnScreen from "@/screens/Learn"
import QuizScreen from "@/screens/Quiz"

// For some reason this shit throws an error when is imported first
// So I decided just to put it in the end
import HomeScreen from "@/screens/Home"

import BackpackIcon from "@/icons/backpack"
import ChessIcon from "@/icons/chess"
import HiraganaIcon from "@/icons/japanese-a"

import CustomNavigationHeader from "@/components/CustomNavigationHeader"

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
        icon: (props) => <BackpackIcon {...props} />
      }
    },
    {
      name: "Hiragana",
      component: HiraganaScreen,
      options: {
        title: "Learn Hiragana",
        icon: (props) => <HiraganaIcon {...props} />
      }
    },
    {
      name: "Quiz",
      component: QuizScreen,
      options: {
        title: "Quiz",
        icon: (props) => <ChessIcon {...props} />
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
