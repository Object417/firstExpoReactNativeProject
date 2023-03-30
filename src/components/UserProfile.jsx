import { setUserSex, userSelector } from "@Store/userSlice"
import { SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native"
import { Avatar, Text } from "react-native-paper"
import { useDispatch, useSelector } from "react-redux"

import FemaleProfileIcon from "@/icons/female-profile"
import MaleProfileIcon from "@/icons/male-profile"

function UserProfile() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",
      paddingTop: 16
    },
    growItem: {
      flex: 1
    }
  })

  const user = useSelector(userSelector)

  const totalAnswers = user.correctAnswers + user.wrongAnswers
  const userAccuracy =
    user.correctAnswers + user.wrongAnswers === 0
      ? 0
      : Math.round((user.correctAnswers * 100) / totalAnswers)

  const dispatch = useDispatch()
  function toggleUserSex() {
    dispatch(setUserSex(user.sex === "male" ? "female" : "male"))
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={toggleUserSex}>
        <Avatar.Image
          size={128}
          source={({ size }) =>
            user.sex === "male" ? <MaleProfileIcon /> : <FemaleProfileIcon />
          }
        />
      </TouchableOpacity>

      <View style={{ flex: 1, paddingLeft: 8 }}>
        <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
          {user.name}
        </Text>
        <Text variant="bodyMedium">{`Level: ${user.xp}`}</Text>
        <Text variant="bodyMedium">{`Accuracy: ${userAccuracy}%`}</Text>
      </View>
    </SafeAreaView>
  )
}

export default UserProfile
