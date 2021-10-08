import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebase from "../Firebase";

import Styles from "./style";

export default function Login() {
  const [name, setName] = useState(null);
  const [password, setPassword] = useState(null);

  async function authenticate() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(name, password)
      .then(() => {
        Alert.alert("Autenticado!");
      })
      .catch((e) => {
        Alert.alert(e.message);
      });
  }

  async function register() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(name, password)
      .then(() => {
        Alert.alert("Usuário criado com sucesso!");
      })
      .catch((e) => {
        Alert.alert(e.message);
      });
  }

  return (
    <View>
      <Text style={Styles.title}>Login</Text>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setName}
        value={name}
        style={Styles.input}
        placeholder="Insira seu e-mail"
      />
      <Text style={Styles.title}>Senha</Text>
      <TextInput
        secureTextEntry={true}
        autoCorrect={false}
        onChangeText={setPassword}
        value={password}
        style={Styles.input}
        placeholder="Insira sua senha"
      />
      <Button onPress={authenticate} title="Entrar" />
      <Text></Text>
      <Button onPress={""} title="Registrar-se" />
    </View>
  );
}
