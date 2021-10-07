import React from "react";
import { StyleSheet, View, Text, Image } from "react-native"; 

export default function Post(props){

    return (

        <View>

            <View style={styles.header}>
                <Image style={styles.profilePicture}/>
                <View>
                    <Text>{props.postObject.Author}</Text>
                    <Text>Solzão no RJ</Text>
                </View>
            </View>

            <Image style={styles.image}></Image>

            <View style={styles.buttons}>

                <Image style={styles.button}/>
                <Image style={styles.button}/>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    header: {
        width: 300,
        alignItems: "center",
        paddingBottom: 20,
        flexDirection: "row"
    },

    profilePicture: {

        width: 60,
        height: 60,
        borderRadius: 3000,
        backgroundColor: "pink",
        marginRight: 20

    },

    image: {
        width: 300,
        height: 230,
        backgroundColor: "black"

    },

    buttons: {
        
        width: 300,
        height: 50,
        backgroundColor: "red",
        flexDirection: "row",
        alignItems: "center"

    },

    button: {

        width: 40,
        height: 40,
        backgroundColor: "yellow",
        marginRight: 20

    }

});