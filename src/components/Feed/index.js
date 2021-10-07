import React, {useEffect, useState} from "react";
import {View, FlatList} from "react-native"; 

import Post from "../Post"
import firebase from "../Firebase"

const firestore = firebase.firestore()

export default function Feed(){

    const [posts, setPosts] = useState([])

    useEffect(()=>{

        firestore.collection("Posts").onSnapshot((snapshot)=>{
            const list = []
            snapshot.forEach((doc) =>{

                list.push(doc.data())

            })
            
            setPosts(list)

        })

        return () => { unmounted = true };

    }, [])


    return (

        <View>
            <FlatList showsVerticalScrollIndicator={false}
             data={posts}
             renderItem={({item})=>{
                 return(
                    <Post postObject={item}></Post>
                 )

             }}/>
        </View>

    )

}

