import React from "react";
import { Image } from "react-native";

import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Pomodoro from "../pages/Pomodoro";
import AddPost from "../pages/AddPost";
import Chat from "../pages/Chat/index";
import Conversation from "../pages/Chat/conversation";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();
const AppStack = createStackNavigator();


function ChatNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Chat" component={Chat} />
      <AppStack.Screen name="Conversation" component={Conversation} />
    </AppStack.Navigator>
  );
}

export default function AppRoutes() {

  return (
    <AppTab.Navigator

      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        
        tabBarIcon: ({ size, specificStyle, color }) => {
          let isIcon = true;
          let iconName;

          switch (route.name) {
            case "Feed":
              iconName = "home-outline";
              size = 30;
              break;
            case "ChatNavigator":
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
                padding: 8,
              };
              break;
            case "AddPost":
              iconName = "add-circle-outline";
              size = 30;
              break;
            case "Profile":
              isIcon = false;
              size = 30;
              break;

            default:
              iconName = "help";
              break;
          }

          if (isIcon)
            return (
              <Ionicons
                name={iconName}
                size={size}
                style={specificStyle}
                color={color}
              />
            );
          else
            return (
              <Image
                style={{ width: size, height: size }}
                source={require("../../../assets/favicon.png")}
              />
            );
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "#b4b4b4",
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#292f36",
          color: "black",
        }
      })}
    >
      <AppTab.Screen name="Feed" component={Feed} />
      <AppTab.Screen name="ChatNavigator" component={ChatNavigator} />
      <AppTab.Screen name="Pomodoro" component={Pomodoro} />
      <AppTab.Screen name="AddPost" component={AddPost} />
      <AppTab.Screen name="Profile" component={Home} />
    </AppTab.Navigator>
  );
}
