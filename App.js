import React from "react";
import { StyleSheet, View } from "react-native";

import Title from "./src/components/Title";
import Login from "./src/components/Login";

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#34495e",
    alignItems: "center",
    justifyContent: "center",
  },
});
