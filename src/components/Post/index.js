import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native"; 
import { Ionicons } from '@expo/vector-icons';

import firebase from '../Firebase'

var storage = firebase.storage()

export default function Post(props){

    const [imageLink, setImageLink] = useState('https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/error-image-generic.png?alt=media&token=cac1d2ab-5df2-493b-8f76-ffc8abc65dbf')
    const [profilePictureLink, setProfilePictureLink] = useState('https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/error-image-generic.png?alt=media&token=cac1d2ab-5df2-493b-8f76-ffc8abc65dbf')

    useEffect(()=>{

        const fetchData = async ()=>{
            const imageURL = await storage.ref('PostsImages/' + props.postObject.id + '.jpg').getDownloadURL()
            const profilePictureURL = await storage.ref('UsersProfiles/' + props.postObject.userData.id + '.jpg').getDownloadURL()
            setImageLink(imageURL)
            setProfilePictureLink(profilePictureURL)
        }

        fetchData()

    }, [])

    return (

        <View style={styles.post}>

            <View style={styles.header}>
                <Image style={styles.profilePicture} source={{uri: profilePictureLink}}/>
                <View>
                    <Text style={styles.author}>{props.postObject.userData.name}</Text>
                    <Text style={styles.description}>{props.postObject.userData.cityState}</Text>
                </View>
            </View>
            
            <Image style={styles.image} source={{uri: imageLink}}></Image>

            <View style={styles.buttons}>

                <Ionicons style={styles.button} name='heart-outline' size={30} color='black' />
                <Ionicons style={styles.button} name='chatbubble-outline' size={27} color='black' />
                <Text style={styles.likes}>Curtido por: Samuel, Josh e Mike</Text>

            </View>

            <View style={styles.descriptionView}>
                
                <Text style={styles.description}>
                    <Text style={styles.descriptionName}>{props.postObject.userData.name}: </Text>
                    {props.postObject.description}
                </Text>

            </View>

            <View style={styles.commentaryView}>

                <View style={styles.commentary}>
                    <Ionicons style={styles.commentaryIcon} name='chatbox-outline' size={27} color='black' />
                    <Text>Adicione um comentário</Text>
                </View>

            </View>


        </View>

    )

}

const styles = StyleSheet.create({

    post: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 50
    },

    header: {
        alignItems: "center",
        paddingLeft: 10,
        paddingBottom: 20,
        flexDirection: "row",
        width: '100%'
    },

    profilePicture: {

        width: 60,
        height: 60,
        borderRadius: 3000,
        backgroundColor: "pink",
        marginRight: 15

    },

    image: {

        width: '100%',
        height: 300,
        backgroundColor: "black"

    },

    author:{
        color: "black",
        fontSize: 23
    },  

    descriptionView:{

        width: '100%',
        paddingLeft: 10,
        marginTop: 9

    },

    description:{
        color: "black"
    },

    descriptionName:{
        fontWeight: 'bold'
    },  

    buttons: {
        
        width: '100%',
        height: 50,
        paddingLeft: 10,
        flexDirection: "row",
        alignItems: "center",

    },

    button: {

        marginRight: 5

    },

    likes: {
        marginLeft: 10
    },

    commentaryView:{
        width: '98%',
        alignItems: 'center',
        marginTop: 9,
    },

    commentary: {

        width: '100%',
        height: 50,
        borderWidth: .8,
        borderColor: 'grey',
        marginTop: 20, 
        flexDirection: 'row',
        alignItems: 'center',
        padding: 8,
        borderRadius: 2

    },
    commentaryIcon:{

        marginRight: 10

    },
});