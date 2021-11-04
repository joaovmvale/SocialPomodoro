import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Post from "../Post";
import firebase from "../../utils/Firebase";

const firestore = firebase.firestore();

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    firestore.collection("Users").onSnapshot((usersSnapshot) => {

      usersSnapshot.forEach(async (userDoc) => {
        await userDoc.ref
          .collection("Posts").onSnapshot(postsSnapshot=>{
            let list = [];
            setPosts([])
            postsSnapshot.forEach(async (postDoc) => {
    
              list.unshift({ ...postDoc.data(), userData: userDoc.data() });
              setPosts(list);
              
            });
          })
      });
    });
  }, []);

  return (
    <View style={styles.feed}>
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

const styles = StyleSheet.create({
  feed: {
    marginRight: 0,
    width: "100%",
    paddingTop: 50,
    backgroundColor: "white",
    paddingBottom: 30,
    color: "red",
  },
});
