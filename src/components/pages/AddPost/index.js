import React, { useEffect, useState, useContext} from "react";
import { StyleSheet, View, TextInput, Dimensions, Image, Button, Alert, TouchableOpacity} from "react-native";
import firebase from '../../utils/Firebase'
import AuthContext from "../../contexts/auth";
import * as ImagePicker from 'expo-image-picker'

export default function AddPost({navigation}) {

  const [description, setDescription] = useState('')
  const [image, setImage] = useState('https://firebasestorage.googleapis.com/v0/b/socialpomodoro-b18de.appspot.com/o/error-image-generic.png?alt=media&token=cac1d2ab-5df2-493b-8f76-ffc8abc65dbf')
  const { user, addPost } = useContext(AuthContext);


  useEffect(() => {

    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          Alert.alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }

  };

  async function handlePost(){

    try {

      let userRef = firebase
      .firestore()
      .collection("Users")
      .doc(user.uid)

      let docRef = userRef
      .collection("Posts")
      .doc()

      let id = docRef.id
      docRef.set({id, description})

      let userDoc = await userRef.get()
      let postDoc = await docRef.get()
      var postObject = {...postDoc.data(), userData: userDoc.data() }

      if(image){    

        const response = await fetch(image);
        const blob = await response.blob();

        await firebase.storage().ref('PostsImages/' + id + '.jpg').put(blob)

      }
       
    } catch (error) {
      Alert.alert("Erro", error.message);
    }

    addPost(postObject)

    navigation.navigate('Feed')

  }

  return (
    <View style={styles.addPost}>
        <View style={styles.previewImages}>
          <TouchableOpacity onPress={pickImage} title="">
            <Image style={styles.previewImage} source={{uri: image}}/>
          </TouchableOpacity>
        </View>
    
        <TextInput style={styles.input} onChangeText={setDescription}></TextInput>
        <View style={styles.buttons}>
          <Button style={styles.button} title="Enviar" onPress={handlePost} />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  addPost: {
    marginRight: 0,
    width: "100%",
    backgroundColor: "white",
    paddingBottom: 30,
    height: Dimensions.get('window').height,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{

    marginTop: 35,
    borderWidth: .3,
    borderColor: 'black',
    width: '98%',
    height: 300,
    fontSize: 16,
    padding: 10,
    textAlignVertical: 'top'
  },
  previewImages:{

    width: '100%'

  }
  ,
  previewImage:{
  
    marginLeft: 15,
    width: 60,
    height: 60,
    borderWidth: .3,
    borderColor: 'black',

  },
  buttons:{
    width: '100%',
    alignItems: 'flex-end',
    paddingTop: 15,
    paddingRight: 10
  },
  button:{

   width: 300,
   height: 300,
  

  }
});
