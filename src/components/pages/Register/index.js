import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Alert,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Button } from "react-native-paper";
import { TextInputMask } from "react-native-masked-text";
import * as ImagePicker from "expo-image-picker";

import firebase from "../../utils/Firebase";

import Styles from "./style";

export default function Register({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [birth, setBirth] = useState("");
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/default-upload-image.png.png?alt=media&token=8292a6e7-7c5f-4295-bcf0-c083e3f4611e"
  );
  const [loading, setLoading] = useState(false);

  async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

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
          response.user.updateProfile({
            displayName: name,
            photoURL: image,
          });
          await firebase
            .firestore()
            .collection("Users")
            .doc(response.user.uid)
            .set({
              name,
              email,
              birth,
              id: response.user.uid,
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
        <TouchableOpacity style={Styles.imageContainer} onPress={pickImage}>
          <Image style={Styles.postImage} source={{ uri: image }} />
          <Text style={Styles.postImageText}>Imagem de perfil</Text>
        </TouchableOpacity>
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
