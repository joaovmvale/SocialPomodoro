import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";
import AuthContext from "../../contexts/auth";
import { FlatList } from "react-native-gesture-handler";
import { useEffect } from "react/cjs/react.development";

import Person from "../Chat/person";

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    async function loadConversations() {
      let conversations = [];
      const conversationsSnapshot = await firebase
        .firestore()
        .collection("Conversations")
        .get();
      conversationsSnapshot.forEach(async (conversation) => {
        let peopleInvolved = conversation.data().peopleInvolved;
        if (peopleInvolved.includes(user.uid)) {
          let otherUserID =
            peopleInvolved[0] == user.uid
              ? peopleInvolved[1]
              : peopleInvolved[0];

          let conversationObject = {
            id: conversation.data().id,
            otherUserID,
            otherUserImage: await loadProfiles(otherUserID),
            otherUserName: await loadNames(otherUserID),
            messages: Array.from(
              await conversation.ref.collection("Messages").get()
            ),
          };

          conversations.push(conversationObject);
          setConversations(conversations);
        }
      });
    }

    async function loadProfiles(personID) {
      try {
        return await firebase
          .storage()
          .ref("UsersProfiles/" + personID)
          .getDownloadURL();
      } catch {
        return "https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/defaultprofile.png?alt=media&token=80dd74fb-e94b-44ed-9085-7546d681ee80";
      }
    }

    async function loadNames(personID) {
      let userRef = await firebase
        .firestore()
        .collection("Users")
        .doc(personID);

      let userDoc = await userRef.get();
      return userDoc.data().name;
    }

    loadConversations();
  }, []);

  return (
    <View style={styles.chat}>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder="Procure alguém"
        ></TextInput>
      </View>

      <FlatList
        showsVerticalScrollIndicator={true}
        data={conversations}
        renderItem={({ item }) => {
          return <Person conversationObject={item} />;
        }}
      />
    </View>
  );
}

const styles = new StyleSheet.create({
  chat: {
    paddingTop: 25,
  },

  inputView: {
    width: "100%",
  },

  input: {
    width: "100%",
    height: 60,
  },
});
