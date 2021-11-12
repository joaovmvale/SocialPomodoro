import React, { useState, createContext, useEffect } from "react";
import firebase from "../utils/Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();
  const [currentChat, setCurrentChat] = useState('')

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUser(user);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    loadPosts()

  }, []);


  function changeCurrentChat(conversationID) {

    setCurrentChat(conversationID)

  }

  // async function loadPosts() {

  //   const usersSnapshot = await firebase.firestore().collection("Users").get()
  //   usersSnapshot.forEach(async user => {

  //     user.ref.collection("Posts").get().then(postsSnapshot => {
  //       setPosts(postsSnapshot.docs.map(post => {

  //         let postData = post.data()
  //         let userData = user.data()

  //         let postObject = { ...postData, userData }

  //         return postObject

  //       }))
  //     })
  //   })

  // }

  async function loadPosts(){

    const usersSnapshot = await firebase.firestore().collection("Users").get()
    let list = []
    usersSnapshot.forEach(async user=>{

      await user.ref.collection("Posts").onSnapshot(postsSnapshot=>{
        postsSnapshot.docChanges().forEach(change=>{

          if(change.type == 'added'){
            let postData = change.doc.data()
            let userData = user.data()
  
            let postObject = {...postData, userData}
            
            list.unshift(postObject)
            
          } else if(change.type == 'removed'){

            let index = list.findIndex(()=>change.doc.data())
            list.splice(index-1, 1)
          }

          list.sort((a, b)=>b.createdTime - a.createdTime)
          setPosts(list)
 
        })

      })

    })

  }


  const value = {
    isLoggedIn,
    posts,
    user,
    currentChat,
    loadPosts,
    changeCurrentChat
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
