import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { Avatar, Button } from "react-native-paper";
import AuthContext from "../../contexts/auth";

import firebase from "../../utils/Firebase";

import Styles from "./style";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [avatar, setAvatar] = useState("https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/defaultprofile.png?alt=media&token=8292a6e7-7c5f-4295-bcf0-c083e3f4611e");

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
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
      <View style={Styles.header}>
        <Avatar.Image size={50} source={{ uri: avatar }} />
        <Text style={Styles.name}>{user.displayName}</Text>
      </View>
      <View style={Styles.body}>
        <Text style={Styles.label}>Email: {user.email}</Text>
        <Text style={Styles.label}>Criado em: {
          new Date(user.metadata.creationTime).toLocaleDateString()
        }</Text>
        <Text style={Styles.label}>Último acesso: {
          new Date(user.metadata.lastSignInTime).toLocaleDateString()
        }</Text>
      </View>
      <Button style={Styles.button} mode="contained" onPress={handleLogout}>
        Sair
      </Button>
    </View>
  );
}
