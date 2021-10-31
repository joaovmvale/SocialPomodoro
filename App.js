import "react-native-gesture-handler";

import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AuthProvider } from "./src/components/contexts/auth";
import AuthContext from "./src/components/contexts/auth";

import AuthRoutes from "./src/components/routes/auth.routes";
import AppRoutes from "./src/components/routes/app.routes";

import Loading from "./src/components/pages/Loading";

export default function App() {
  const { signed } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {signed ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
