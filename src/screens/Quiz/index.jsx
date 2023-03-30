import { StyleSheet } from "react-native"

import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState } from "react"
import QuizScreen from "./Quiz"
import QuizResultsScreen from "./Results"
import QuizStartScreen from "./Start"

const styles = StyleSheet.create({
  container: {}
})

const Stack = createNativeStackNavigator()

function Quiz({ navigation, route }) {
  const [screens, setScreens] = useState([
    { name: "Start Quiz", component: QuizStartScreen },
    { name: "Quiz In Progress", component: QuizScreen },
    { name: "Quiz Results", component: QuizResultsScreen }
  ])

  return (
    <Stack.Navigator
      initialRouteName="Start Quiz"
      screenOptions={{
        headerShown: false
      }}
    >
      {screens.map(({ name, component }) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  )
}

export default Quiz
