import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";

import Post from "../Post";
import AuthContext from "../../contexts/auth";

export default function Feed() {
  const { posts, loadPosts } = useContext(AuthContext);

  useEffect(() => {
    loadPosts();
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
