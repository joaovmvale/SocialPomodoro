import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import firebase from "../../utils/Firebase";
import PostOptions from "./PostOptions";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

var storage = firebase.storage();

export default function Post(props) {
  const [imageLink, setImageLink] = useState(
    "https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/error-image-generic.png?alt=media&token=cac1d2ab-5df2-493b-8f76-ffc8abc65dbf"
  );
  const [profilePictureLink, setProfilePictureLink] = useState(
    "https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/defaultprofile.png?alt=media&token=80dd74fb-e94b-44ed-9085-7546d681ee80"
  );
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(async () => {
        const imageURL = await storage
          .ref("PostsImages/" + props.postObject.id + ".jpg")
          .getDownloadURL()
          
          setImageLink(imageURL);

        setImageLink(imageURL);

        try {
          const profilePictureURL = await storage
            .ref("UsersProfiles/" + props.postObject.userData.id + ".jpg")
            .getDownloadURL();

          setProfilePictureLink(profilePictureURL);
        } catch {}
      }, 1200);
    };

    fetchData();
  }, []);

  return (
    <TouchableWithoutFeedback
      style={styles.post}
      onPress={() => setDropdown(false)}
    >
      <View style={styles.header}>
        <Image
          style={styles.profilePicture}
          source={{ uri: profilePictureLink }}
        />
        <View>
          <Text style={styles.author}>{props.postObject.userData.name}</Text>
          <Text style={styles.description}>
            {props.postObject.userData.cityState}
          </Text>
        </View>
        <Ionicons
          style={styles.more}
          name="ellipsis-vertical-outline"
          size={30}
          color="black"
          onPress={() => setDropdown(!dropdown)}
        />
        <PostOptions id={props.postObject.id} display={dropdown} />
      </View>

      <Image style={styles.image} source={{ uri: imageLink }}></Image>

      <View style={styles.buttons}>
        <Ionicons
          style={styles.button}
          name="heart-outline"
          size={30}
          color="black"
        />
        <Ionicons
          style={styles.button}
          name="chatbubble-outline"
          size={27}
          color="black"
        />
        <Text style={styles.likes}>Curtido por: Samuel, Josh e Mike</Text>
      </View>

      <View style={styles.descriptionView}>
        <Text style={styles.description}>
          <Text style={styles.descriptionName}>
            {props.postObject.userData.name}:{" "}
          </Text>
          {props.postObject.description}
        </Text>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  post: {
    width: "100%",
    alignItems: "center",
    marginBottom: 10,
    padding: 5
  },

  header: {
    alignItems: "center",
    paddingLeft: 10,
    paddingBottom: 20,
    flexDirection: "row",
    width: "100%",
  },

  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 3000,
    backgroundColor: "pink",
    marginRight: 15,
  },

  image: {
    width: "100%",
    height: 300,
    backgroundColor: "black",
  },

  author: {
    color: "black",
    fontSize: 23,
  },

  more: {
    marginLeft: "auto",
    marginRight: 10,
    fontSize: 24,
    padding: 10,
  },

  descriptionView: {
    width: "100%",
    paddingLeft: 10,
    marginTop: 2
  },

  description: {
    color: "black",
  },

  descriptionName: {
    fontWeight: "bold",
  },

  buttons: {
    width: "100%",
    height: 50,
    paddingLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },

  button: {
    marginRight: 5,
  },

  likes: {
    marginLeft: 10,
  },

});
