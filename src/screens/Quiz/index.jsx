import { StyleSheet, View } from "react-native"
import { Text } from "react-native-paper"
import { useSelector } from "react-redux"
import { quizStateSelector } from "../../store/quizSlice"

import { default as QuizStartScreen } from "./Start"
import { default as QuizResultsScreen } from "./Results"
import { default as QuizScreen } from "./Quiz"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { useState } from "react"

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
