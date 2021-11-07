import React from "react";
import { useState, createContext, useEffect } from "react";

import firebase from "../utils/Firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState();

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
  });

  async function loadPosts() {

    let list = []
    const usersSnapshot = await firebase.firestore().collection("Users").get()
    usersSnapshot.forEach(async user => {
      const postsSnapshot = await user.ref.collection("Posts").get()

      postsSnapshot.forEach(post => {
        list.unshift({ ...post.data(), userData: user.data() })
        setPosts(list)
      })
    })
  }

  async function addPost(newPost) {

    let list = [newPost, ...posts]
    setPosts(list)

  }

  function deletePostCTX(postID) {

    let list = []
    posts.forEach(post => {

      if (post.id != postID)
        list.push(post)

    })
    setPosts(list)

  }


  const value = {
    isLoggedIn,
    posts,
    user,
    loadPosts,
    addPost,
    deletePostCTX
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
