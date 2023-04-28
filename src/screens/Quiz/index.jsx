import {
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  View,
  FlatList
} from "react-native"

import GrowContainer from "@/components/GrowContainer"
import { fullHiraganaSelector } from "@/store/hiraganaSlice"
import {
  quizStateSelector,
  setScore,
  setState as setQuizState,
  setWordIndex
} from "@/store/quizSlice"

// organize-imports-ignore
import Constants from "expo-constants"

import { StatusBar } from "expo-status-bar"
import _ from "lodash"
import { Card, Text, useTheme } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"
import { useMemo, useState } from "react"
import { createStackNavigator } from "@react-navigation/stack"
import QuizListScreen from "./QuizList"
import QuestionScreen from "./QuestionScreen"
import Results from "./Results"

const Stack = createStackNavigator()

function Quiz({ navigation, route }) {
  const [screens, setScreens] = useState([
    {
      name: "QuizList",
      component: QuizListScreen
    },
    {
      name: "QuizQuestion",
      component: QuestionScreen
    },
    { name: "QuizResults", component: Results }
  ])

  return (
    <Stack.Navigator
      initialRouteName="QuizList"
      screenOptions={{ headerShown: false }}
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
  )
}

export default Quiz
