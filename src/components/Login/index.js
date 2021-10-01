import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert } from "react-native";
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

  function teste() {
    firebase.collection("usuarios").add({
      name: name,
      password: password,
    });
  }

  return (
    <View>
      <Text style={Styles.titulo}>Login</Text>
      <TextInput
        onChangeText={setName}
        value={name}
        style={Styles.input}
        placeholder="Insira seu e-mail"
      />
      <Text style={Styles.titulo}>Senha</Text>
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={Styles.input}
        placeholder="Insira sua senha"
      />
      <Button onPress={authenticate} title="Entrar" />
    </View>
  );
}
