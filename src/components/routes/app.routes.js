import React from "react";
import { Image, Button } from "react-native";

import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Pomodoro from "../pages/Pomodoro";
import AddPost from "../pages/AddPost";
import Chat from '../pages/Chat/index'

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

const AppStack = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator
      initialRouteName="Feed"

      screenOptions={({ route }) => ({
        tabBarIcon: ({ size, specificStyle, color }) => {
          let isIcon = true
          let iconName;

          switch (route.name) {
            case "Feed":
              iconName = "home-outline";
              size = 30;
              break;
            case "Chat":
              iconName = "chatbubbles-outline";
              size = 30;
              break;
            case "Pomodoro":
              iconName = "stopwatch-outline";
              size = 40;
              specificStyle = {

                backgroundColor: "#292f36",
                borderRadius: 200,
                marginBottom: 20,
                padding: 8

              }
              break;
            case "AddPost":
              iconName = "add-circle-outline";
              size = 30;
              break;
            case "Profile":
              isIcon = false;
              size = 30
              break;
            

            default:
              iconName = "help";
              break;
          }

          if(isIcon)
            return <Ionicons name={iconName} size={size} style={specificStyle} color={color}/>
          else
           return <Image style={{width: size, height: size}} source={require('../../../assets/favicon.png')} />
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#b4b4b4',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#292f36",
          color: 'black'
        },
        
      })}
    >
      <AppStack.Screen name="Feed" component={Feed}/>
      <AppStack.Screen name="Chat" component={Chat} />
      <AppStack.Screen name="Pomodoro" component={Pomodoro} />
      <AppStack.Screen name="AddPost" component={AddPost} />
      <AppStack.Screen name="Profile" component={Home} />
    </AppStack.Navigator>
  );
}