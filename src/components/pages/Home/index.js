import React, { useState, useContext } from "react";

import { View, Text, Alert } from "react-native";

import { Button, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";

import AuthContext from "../../contexts/auth";

export default function Home() {
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);

  async function handleLogout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      Alert.alert("Erro ao sair", error.message);
    }
  }

  async function handlePost() {
    try {
      await firebase
        .firestore()
        .collection("Users")
        .doc(user.uid)
        .collection("Posts")
        .doc(user.uid)
        .set({ description });
    } catch (error) {
      Alert.alert("Erro", error.message);
    }
  }

  return (
    <View>
      <Text>Home</Text>
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button onPress={handleLogout}>LOGOUT</Button>
      <Button onPress={handlePost}>INVIAR POST</Button>
    </View>
  );
}
