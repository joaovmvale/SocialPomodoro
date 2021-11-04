import React from "react";

import Home from "../pages/Home";
import Feed from "../pages/Feed";
import Pomodoro from "../pages/Pomodoro";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";

const AppTab = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppTab.Navigator
      initialRouteName="Feed"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Feed":
              iconName = "home";
              size = 40;
              break;
            case "Home":
              iconName = "open";
              size = 40;
              break;
            case "Pomodoro":
              iconName = "stopwatch";
              size = 40;
              break;
            default:
              iconName = "help";
              break;
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#ffc17b",
        tabBarInactiveTintColor: "#777",
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#8e3768",
          borderTopWidth: 3,
          borderTopColor: "black",
        },
      })}
    >
      <AppTab.Screen name="Feed" component={Feed} />
      <AppTab.Screen name="Home" component={Home} />
      <AppTab.Screen name="Pomodoro" component={Pomodoro} />
    </AppTab.Navigator>
  );
}
