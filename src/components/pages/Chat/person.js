import React, { useState, useContext } from "react";
import { View, Text, Alert, Image, StyleSheet, Touchable } from "react-native";
import { Button, TextInput } from "react-native-paper";

import firebase from "../../utils/Firebase";
import AuthContext from "../../contexts/auth";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";


export default function Person(props) {

  const { user } = useContext(AuthContext);



  return (
    <TouchableOpacity style={styles.person} onPress={()=>Alert.alert("oi")}>

        <Image style={styles.otherUserPic} source={{uri: props.conversationObject.otherUserImage}}></Image>
        <View>
            <Text style={styles.otherPersonName}>{props.conversationObject.otherUserName}</Text>
            <Text>eae man blz</Text>
        </View>

        <Ionicons
            style={styles.more}
            name="ellipsis-vertical-outline"
            size={22}
            color="black"
            onPress={()=>setDropdown(!dropdown)}
        />

    </TouchableOpacity>
   

  );
}

const styles = new StyleSheet.create({

    person:{

        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 15,
        paddingTop: 20

    },

    otherPersonName:{

        fontSize: 20,
        marginBottom: 5

    },

    otherUserPic:{
        width: 65,
        height: 65,
        borderRadius: 65,
        marginRight: 20
    },

    more:{

        marginLeft: 'auto',
        margin: 20

    }

})