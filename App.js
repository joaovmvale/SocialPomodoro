import React from "react";
import { StyleSheet, View, Image} from "react-native";
import { Ionicons } from '@expo/vector-icons';

import Feed from "./src/components/Feed";


export default function App() {
  return (
    <View style={styles.container}>
      <Feed/>
      <View style={styles.toolbar}>
        <Ionicons style={styles.toolbarIcon} name="home-outline" size={30} color="white"></Ionicons>
        <Ionicons style={styles.toolbarIcon} name="chatbubbles-outline" size={30} color="white"></Ionicons>
        <Ionicons style={styles.pomodoroIcon} name="stopwatch-outline" size={50} color="white"></Ionicons>
        <Ionicons style={styles.toolbarIcon} name="add-circle-outline" size={30} color="white"></Ionicons>
        <Image style={styles.profilePicture} source={require('./assets/favicon.png')}/>
        
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    padding: 0,

  },
  toolbar:{
    width: '100%',
    height: 45,
    backgroundColor: "#292f36",
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10

  },
  toolbarIcon:{

    marginRight: 30    

  }
  ,
  pomodoroIcon:{

    backgroundColor: "#292f36",
    borderRadius: 200,
    marginRight: 30,
    marginBottom: 20
  },

  profilePicture: {

    width: 35,
    height: 35,
    borderRadius: 3000,
    backgroundColor: "pink",
    marginRight: 15
  }
});