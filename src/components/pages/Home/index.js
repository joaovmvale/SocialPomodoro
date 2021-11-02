import React from "react";

import { View, Text, Alert } from "react-native";

import { Button } from "react-native-paper";

import firebase from "../../utils/Firebase";

export default function Home() {
  async function handleLogout() {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      Alert.alert("Erro ao sair", error.message);
    }
  }
  return (
    <View>
      <Text>Home</Text>
      <Button onPress={handleLogout}>LOGOUT</Button>
    </View>
  );
}
