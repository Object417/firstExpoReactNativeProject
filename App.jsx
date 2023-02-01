import React from "react"

import { MD3LightTheme, Provider as PaperProvider } from "react-native-paper"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"

import { default as AboutScreen } from "./src/screens/About"
import { default as HomeScreen } from "./src/screens/Home"

import CustomNavigationHeader from "./src/components/CustomNavigationHeader"
// import StackScreenWrapper from "./src/components/StackScreenWrapper"

// const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationHeader {...props} />
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="About"
            component={AboutScreen}
            options={{
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="school"
                  color={color}
                  size={size}
                />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
