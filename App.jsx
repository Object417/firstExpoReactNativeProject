import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { Provider as PaperProvider, Text } from "react-native-paper"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { default as AboutScreen } from "./src/screens/About"
import { default as HomeScreen } from "./src/screens/Home"
import CustomNavigationHeader from "./src/components/CustomNavigationHeader"
import StackScreenWrapper from "./src/components/StackScreenWrapper"

const Stack = createNativeStackNavigator()

function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            header: (props) => <CustomNavigationHeader {...props} />
          }}
        >
          <Stack.Screen name="Home">
            {(props) => (
              <StackScreenWrapper {...props} Component={HomeScreen} />
            )}
          </Stack.Screen>

          <Stack.Screen name="About">
            {(props) => (
              <StackScreenWrapper {...props} Component={AboutScreen} />
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  )
}

export default App
