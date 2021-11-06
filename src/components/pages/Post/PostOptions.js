import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";
import firebase from '../../utils/Firebase'
import AuthContext from "../../contexts/auth";

export default function PostOptions(props) {

  const { user, deletePostCTX } = useContext(AuthContext);

  async function deletePost(){

    deletePostCTX(props.id)

    try{
      await firebase.firestore()
      .collection("Users")
      .doc(user.uid)
      .collection("Posts")
      .doc(props.id).delete()

      await firebase.storage()
      .ref("PostsImages/" + props.id + ".jpg").delete()
    }
    catch(er){
      console.log(er)
    }

  }
 
  return (
    <View style={props.display ? styles.options : {display: 'none'}}>
        <Button style={styles.buttonOption} title="Apagar Post" color="black" onPress={deletePost}></Button>
    </View>
  );

}

const styles = StyleSheet.create({
  options:{

    position: 'absolute',
    zIndex: 2,
    elevation: 2,
    right: 0,
    top: 0,
    marginRight: 5,
    width: 200,
    height: 200,
    backgroundColor: 'white',
    borderWidth: .4

  },
  buttonOption:{
    padding: 20,
    backgroundColor: 'black'
  }
});
