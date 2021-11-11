import React from "react";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default function AuthRoutes() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name="Login" component={Login} options={{headerShown: false}}/>
      <AuthStack.Screen name="Register" component={Register} />
    </AuthStack.Navigator>
  );
}
