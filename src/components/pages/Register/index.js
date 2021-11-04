import React, { useState } from "react";

import {
  View,
  Text,
  TextInput,
  Alert,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { Button } from "react-native-paper";

import { TextInputMask } from "react-native-masked-text";

import firebase from "../../utils/Firebase";

import Styles from "./style";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [birth, setBirth] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    Keyboard.dismiss();
    if (password !== passwordConfirm) {
      Alert.alert("Senhas não conferem");
      setPassword("");
      setPasswordConfirm("");
      return;
    }
    setLoading(true);

    try {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(async (response) => {
          await firebase
            .firestore()
            .collection("Users")
            .doc(response.user.uid)
            .set({
              name,
              email,
              birth,
              id: response.user.uid
            })
            .then(() => {
              setName("");
              setEmail("");
              setPassword("");
              setPasswordConfirm("");
              setBirth("");
              Alert.alert("Usuário criado com sucesso");
              navigation.navigate("Login");
            });
        });
    } catch (error) {
      Alert.alert("Erro ao cadastrar usuário", error.message);
      setName("");
      setEmail("");
      setPassword("");
      setPasswordConfirm("");
      setBirth("");
    }

    setLoading(false);
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={Styles.container}>
        <Text style={Styles.title}>Cadastro</Text>
        <TextInput
          style={Styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <TextInput
          style={Styles.input}
          placeholder="Confirmar senha"
          secureTextEntry={true}
          value={passwordConfirm}
          onChangeText={(text) => setPasswordConfirm(text)}
        />
        <TextInputMask
          type={"datetime"}
          options={{
            format: "DD/MM/YYYY",
          }}
          style={Styles.input}
          placeholder="Data de nascimento"
          value={birth}
          onChangeText={(text) => setBirth(text)}
        />
        <Button
          mode="contained"
          style={Styles.button}
          loading={loading}
          onPress={handleRegister}
        >
          Cadastrar
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
}
