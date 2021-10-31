import React, {useEffect, useState} from "react";
import {StyleSheet, View, FlatList} from "react-native"; 

import Post from "../Post"
import firebase from "../Firebase"

const firestore = firebase.firestore()

export default function Feed(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{

        firestore.collection("Users").onSnapshot((usersSnapshot)=>{
            let list = []
            
            usersSnapshot.forEach(async userDoc=>{

                await userDoc.ref.collection('Posts').get().then(postSnapshot=>{
                    postSnapshot.forEach(async postDoc=>{
                        list.push({...postDoc.data(), userData: userDoc.data()})
                        setPosts(list)
                    })
                })

            })
        })


    }, [])


    return (

        <View style={styles.feed}>
            <FlatList showsVerticalScrollIndicator={true}
             data={posts}
             renderItem={({item})=>{
                 return(
                    <Post postObject={item}></Post>
                 )

             }}/>
        </View>

    )

}

const styles = StyleSheet.create({

    feed:{

        marginRight: 0,
        width: '100%',
        paddingTop: 50,
        backgroundColor: 'white',
        paddingBottom: 30,
        color: 'red'

    }

})
