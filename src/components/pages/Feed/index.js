import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Post from "../Post";
import firebase from "../../utils/Firebase";

import Styles from "./style";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    firebase
      .firestore()
      .collection("Users")
      .onSnapshot((usersSnapshot) => {
        let list = [];

        usersSnapshot.forEach(async (userDoc) => {
          await userDoc.ref
            .collection("Posts")
            .get()
            .then((postSnapshot) => {
              postSnapshot.forEach(async (postDoc) => {
                list.push({ ...postDoc.data(), userData: userDoc.data() });
                setPosts(list);
              });
            });
        });
      });
  }, []);

  return (
    <View style={Styles.feed}>
      <FlatList
        showsVerticalScrollIndicator={true}
        data={posts}
        renderItem={({ item }) => {
          return <Post postObject={item}></Post>;
        }}
      />
    </View>
  );
}
