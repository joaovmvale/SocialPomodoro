import React, { useEffect, useState, useContext } from "react";
import { View, Text, Alert, StyleSheet, Dimensions, FlatList, KeyboardAvoidingView } from "react-native";
import { Button, TextInput } from "react-native-paper";

import axios from "axios";
import firebase from "../../utils/Firebase";
import AuthContext from "../../contexts/auth";
import { Ionicons } from "@expo/vector-icons";

import Message from "./message"
export default function Conversation() {

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { user, currentChat } = useContext(AuthContext);

  useEffect(() => {

    loadMessages()

    console.log()


  }, [])

  async function sendMessage(e) {

    e.stopPropagation()

    let docRef = firebase.firestore().collection('Conversations').doc(currentChat).
      collection('Messages').doc()
    let docID = docRef.id
    let currenTime;
    await axios.get("http://worldtimeapi.org/api/timezone/America/Sao_Paulo").then((res) => {
      currenTime = res.data.unixtime;
    })

    console.log(currenTime);

    let messageObject = {

      id: docID,
      createdTime: new Date(currenTime * 1000),
      message: newMessage,
      userID: user.uid

    }

    docRef.set(messageObject)

    setNewMessage('')

  }

  async function loadMessages() {

    firebase.firestore().collection('Conversations').doc(currentChat).
      collection('Messages').onSnapshot(messagesSnapshot => {

        let list = []
        messagesSnapshot.forEach(message => {

          let messageTimeSeconds = message.data().createdTime.seconds
          let messageOBJ = { ...message.data(), messageTimeSeconds }
          messageOBJ.createdTime = new Date(messageTimeSeconds * 1000)

          list.unshift(messageOBJ)
          list.sort((a, b) => { return a.messageTimeSeconds - b.messageTimeSeconds })
          setMessages([...list])

        })

      })
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior="padding"
      enabled
    >

      <View style={styles.messages}>

        <FlatList

          showsVerticalScrollIndicator={false}
          data={messages}
          renderItem={({ item }) => {
            return <Message messageOBJ={item}></Message>;
          }}
        />

      </View>

      <View style={styles.inputView}>
        <TextInput style={styles.input}
          placeholder="Escreva algo" onChangeText={setNewMessage} value={newMessage}></TextInput>
        <Ionicons style={styles.button} name="paper-plane-outline" size={26} onPress={sendMessage}></Ionicons>
      </View>

    </KeyboardAvoidingView>

  );
}

const styles = StyleSheet.create({
  messages: {
    padding: 25,
    paddingTop: 5,
    paddingBottom: 1,
    height: Dimensions.get('window').height - 180,
    maxHeight: Dimensions.get('window').height - 180
  },
  inputView: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50
  },
  input: {
    width: '80%',
    height: '100%',
  },
  button: {
    width: '20%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: "#e7e7e7"
  }
});
