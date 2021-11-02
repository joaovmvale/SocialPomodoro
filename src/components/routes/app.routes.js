import React from "react";
import Home from "../pages/Home";
import Feed from "../pages/Feed";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppStack = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
      <AppStack.Screen name="Feed" component={Feed} />
    </AppStack.Navigator>
  );
}
