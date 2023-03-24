import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { Avatar, Button, Text } from "react-native-paper"
import profileIconFemale from "@/icons/profile.svg"
import profileIconMale from "@/icons/account.svg"
import { useSelector } from "react-redux"
import { userSelector } from "@Store/userSlice"

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

  return (
    <View style={styles.container}>
      <Avatar.Image source={profileIconMale} size={128} style={{}} />
      <View style={{ flex: 1, paddingLeft: 8 }}>
        <Text variant="titleLarge" style={{ fontWeight: "bold" }}>
          {user.name}
        </Text>
        <Text variant="bodyMedium">{`Level: ${user.xp}`}</Text>
        <Text variant="bodyMedium">{`Accuracy: ${userAccuracy}%`}</Text>
      </View>
    </View>
  )
}

export default UserProfile
