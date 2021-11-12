import React, { useState, useContext } from "react";
import { View, Text, Alert, StyleSheet, Dimensions, FlatList, KeyboardAvoidingView } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useEffect } from "react/cjs/react.development";

import AuthContext from "../../contexts/auth";

export default function Conversation(props) {

    const { user } = useContext(AuthContext);
    const [userMessage, setUserMessage] = useState({})
    const [userTextColor, setUserTextColor] = useState({})
    const [messageTime, setMessageTime] = useState('')

    useEffect(() => {

        userStyle()
        createMessageTime()

    }, [])

    function createMessageTime() {

        let hours = "0" + props.messageOBJ.createdTime.getHours()
        let minutes = props.messageOBJ.createdTime.getMinutes()

        let string = hours + ":" + minutes
        setMessageTime(string)
    }

    function userStyle() {

        let userMessage = {
            alignSelf: 'flex-end',
            backgroundColor: '#28a475',
            color: 'white'
        }

        let white = {
            color: 'white'
        }

        if (props.messageOBJ.userID == user.uid) {
            setUserMessage(userMessage)
            setUserTextColor(white)
        }

    }

    return (
            <View style={{ ...styles.message, ...userMessage }}>
                <Text style={{ ...userTextColor }}>{props.messageOBJ.message}</Text>
                <Text style={{ ...styles.timeStamp, ...userTextColor }}>{messageTime}</Text>
            </View>
    );
}

const styles = StyleSheet.create({

    message: {
        height: 20,
        borderWidth: .3,
        padding: 19,
        alignItems: 'center',
        borderRadius: 10,
        alignSelf: 'flex-start',
        marginBottom: 2,
        flexDirection: 'row'
    },
    timeStamp: {

        marginLeft: 10,
        marginTop: 28,
        fontSize: 12,
        marginBottom: 20

    }


});
