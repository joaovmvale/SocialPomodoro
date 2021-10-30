import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export default function Loading({}) {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
