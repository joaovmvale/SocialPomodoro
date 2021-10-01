import React from "react";
import { View, Text } from "react-native";

export default function Title() {
  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 24,
          fontWeight: "bold",
          marginBottom: 10,
        }}
      >
        POMODORO
      </Text>
    </View>
  );
}
