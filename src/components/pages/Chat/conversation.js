import React, { useState, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { Button, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";
import AuthContext from "../../contexts/auth";

export default function Chat() {

  const { user } = useContext(AuthContext);

  return (
    <View>
      
    </View>
  );
}
