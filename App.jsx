import React, { useState } from "react"

import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { default as AboutScreen } from "./src/screens/About"
import { default as HomeScreen } from "./src/screens/Home"
import { default as QuizScreen } from "./src/screens/Quiz"

import CustomNavigationHeader from "./src/components/CustomNavigationHeader"
import { Provider as StoreProvider } from "react-redux"
import store from "./src/store/store"

const Tab = createBottomTabNavigator()

function App() {
  const [screens, setScreens] = useState([
    {
      name: "Home",
      component: HomeScreen,
      icon: { name: "home" }
    },
    {
      name: "About",
      component: AboutScreen,
      icon: { name: "school" }
    },
    {
      name: "Quiz",
      component: QuizScreen,
      icon: { name: "gamepad" }
    }
  ])

  return (
    <StoreProvider store={store}>
      <PaperProvider theme={MD3LightTheme}>
        <NavigationContainer>
          <Tab.Navigator
            initialRouteName="About"
            screenOptions={{
              header: (props) => <CustomNavigationHeader {...props} />
            }}
          >
            {screens.map(({ name, component, icon }) => (
              <Tab.Screen
                key={name}
                name={name}
                component={component}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                      name={icon.name}
                      color={icon.color || color}
                      size={icon.size || size}
                    />
                  )
                }}
              />
            ))}
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App
