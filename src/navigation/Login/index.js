import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Button, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";

import Styles from "./style";

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [fLoading, setFLoading] = useState(false);

  async function handleLogin() {
    Keyboard.dismiss();
    setEmail("");
    setPassword("");
    setLoading(true);

    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      Alert.alert("Autenticado!");
    } catch (error) {
      Alert.alert("Erro ao autenticar", error.message);
      setPassword("");
    }

    setLoading(false);
  }

  async function forgotPassword() {
    setFLoading(true);
    if (email === "") {
      Alert.alert("Informe seu e-mail");
      setFLoading(false);
      return;
    }
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      setEmail("");
      Alert.alert("Email enviado com sucesso!");
    } catch (error) {
      Alert.alert(error.message);
    }
    setFLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.container}>
        <Text style={Styles.title}>SOCIAL POMODORO</Text>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          mode="outlined"
          style={Styles.input}
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
          mode="outlined"
          style={Styles.input}
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={Styles.forgotPassword}
          labelStyle={Styles.buttonLabel}
          mode="text"
          onPress={forgotPassword}
          loading={fLoading}
        >
          Esqueceu sua senha?
        </Button>
        <Button
          style={Styles.button}
          mode="contained"
          loading={loading}
          onPress={handleLogin}
        >
          Login
        </Button>
        <Button
          style={Styles.button}
          mode="contained"
          onPress={() => navigation.navigate("Register")}
        >
          Cadastrar
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}
