import React from "react";
import Home from "../pages/Home";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const AppStack = createBottomTabNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={Home} />
    </AppStack.Navigator>
  );
}
