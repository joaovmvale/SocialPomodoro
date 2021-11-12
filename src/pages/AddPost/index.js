import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Image,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from "react-native";
import { Button, Avatar, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";
import AuthContext from "../../contexts/auth";
import * as ImagePicker from "expo-image-picker";

import Styles from "./style";

export default function AddPost({ navigation }) {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/default-upload-image.png.png?alt=media&token=8292a6e7-7c5f-4295-bcf0-c083e3f4611e"
  );
  const { user, addPost } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Sorry, we need camera roll permissions to make this work!"
          );
        }
      }
    })();
  }, []);

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

  async function handlePost() {
    try {
      let userRef = firebase.firestore().collection("Users").doc(user.uid);
      let docRef = userRef.collection("Posts").doc();
      let id = docRef.id;

      docRef.set({ id, description });
      let userDoc = await userRef.get();
      let postDoc = await docRef.get();
      var postObject = { ...postDoc.data(), userData: userDoc.data() };

      if (image) {
        const response = await fetch(image);
        const blob = await response.blob();

        await firebase
          .storage()
          .ref("PostsImages/" + id + ".jpg")
          .put(blob);

        setImage(
          "https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/default-upload-image.png.png?alt=media&token=8292a6e7-7c5f-4295-bcf0-c083e3f4611e"
        );
        setDescription("");
      }
    } catch (error) {
      Alert.alert("Erro", error.message);
    }


    navigation.navigate('Feed')

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={Styles.postContainer}>
        <View style={Styles.profileContainer}>
          <Avatar.Image
            style={Styles.profileAvatar}
            size={50}
            source={
              user.photoURL
                ? { uri: user.photoURL }
                : require("../../../assets/heart.png")
            }
          />
          <Text style={Styles.profileName}>
            {user.displayName ? user.displayName : "ERR_NAME"}
          </Text>
        </View>
        <TextInput
          style={Styles.postDescription}
          value={description}
          onChangeText={setDescription}
          placeholder="Insira a descrição aqui :)"
          selectionColor="#000000"
          multiline={true}
        />

        <TouchableOpacity style={Styles.imageContainer} onPress={pickImage}>
          <Image style={Styles.postImage} source={{ uri: image }} />
          <Text style={Styles.postImageText}>Adicionar uma imagem...</Text>
        </TouchableOpacity>

        <View style={Styles.buttonsContainer}>
          <Button
            style={Styles.button}
            labelStyle={{ color: "#000000" }}
            onPress={handlePost}
          >
            ENVIAR POST
          </Button>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
