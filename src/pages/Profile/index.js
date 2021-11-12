import React, { useState, useContext } from "react";

import { View, Text, Alert } from "react-native";

import { Button, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";

export default function Profile() {
  const [description, setDescription] = useState("");

  async function handleLogout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      Alert.alert("Erro ao sair", error.message);
    }
  }

  async function handlePost() {

  }

  return (
    <View>
      <Text>Home</Text>
      <TextInput
        value={description}
        onChangeText={(text) => setDescription(text)}
      />
      <Button onPress={handleLogout}>LOGOUT</Button>
    </View>
  );
}
