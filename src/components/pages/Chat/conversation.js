import React, { useEffect, useState, useContext } from "react";
import { View, Text, Alert, StyleSheet, Dimensions, FlatList } from "react-native";
import { Button, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";
import AuthContext from "../../contexts/auth";
import { Ionicons } from "@expo/vector-icons";

import Message from "./message"

export default function Conversation() {

  const [newMessage, setNewMessage] = useState('')
  const [messages, setMessages] = useState([])
  const { user, currentChat } = useContext(AuthContext);

  useEffect(()=>{

    loadMessages()

  }, [])

  function sendMessage(){

    let docRef = firebase.firestore().collection('Conversations').doc(currentChat).
    collection('Messages').doc()
    let docID = docRef.id


    let messageObject = {
    
      id: docID,
      createdTime: new Date(),
      message: newMessage,
      userID: user.uid

    }

    docRef.set(messageObject)


  } 

  async function loadMessages(){

    firebase.firestore().collection('Conversations').doc(currentChat).
    collection('Messages').onSnapshot(messagesSnapshot=>{

      let list = []
      messagesSnapshot.forEach(message=>{

        let messageOBJ = {...message.data()}
        messageOBJ.createdTime = new Date(message.data().createdTime.seconds * 1000)

        list.unshift(messageOBJ)  
        setMessages(list)

      })

    })
  }


  return (
    <View style={styles.conversation}>
      <View style={styles.messages}>
        <FlatList
            showsVerticalScrollIndicator={true}
            data={messages}
            renderItem={({ item }) => {
              return <Message messageOBJ={item}></Message>;
            }}
          />
      </View>
       
      <View style={styles.inputView}>
        <TextInput placeholder="Escreva algo" onChangeText={setNewMessage}></TextInput>
        <Ionicons style={styles.button} name="paper-plane-outline" size={26} onPress={sendMessage}></Ionicons>
      </View>
  
    </View>
  );
}

const styles = StyleSheet.create({
  conversation: {
    height: Dimensions.get('window').height - 160
  },
  inputView:{

    marginTop: 'auto',
    position: 'relative',
    justifyContent: 'center'

  },
  messages:{
    height: Dimensions.get('window').height - 200,
    padding: 25
  },  
  button:{

    position: 'absolute',
    right: 18,

  }
});
