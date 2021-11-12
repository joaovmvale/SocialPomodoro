import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import AuthContext from "../contexts/auth";

import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";

export default function Index() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <NavigationContainer>
      {isLoggedIn ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  );
}
