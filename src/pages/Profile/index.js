import React, { useState, useContext } from "react";
import { View, Text, Alert, Image } from "react-native";
import { Button, Avatar } from "react-native-paper";
import AuthContext from "../../contexts/auth";

import firebase from "../../utils/Firebase";

import Styles from "./style";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [avatar, setAvatar] = useState("https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/defaultprofile.png?alt=media&token=8292a6e7-7c5f-4295-bcf0-c083e3f4611e");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setAvatar(user.photoURL);
    }
  });

  async function handleLogout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      Alert.alert("Erro ao sair", error.message);
    }
  }

  return (
    <View style={Styles.container}>
      <Avatar.Image
        style={Styles.profileAvatar}
        size={50}
        source={
          avatar
        }
      />
      <Text>{user.displayName}</Text>
      <Button mode="contained" onPress={handleLogout}>LOGOUT</Button>
    </View>
  );
}
