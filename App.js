import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Loading from "./src/navigation/Loading";
import Login from "./src/navigation/Login";
import Register from "./src/navigation/Register";
import Home from "./src/navigation/Home";

const AuthStack = createStackNavigator();
const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={Login} />
    <AuthStack.Screen name="Register" component={Register} />
  </AuthStack.Navigator>
);

const AppTab = createBottomTabNavigator();
const AppTabScreen = () => (
  <AppTab.Navigator>
    <AppTab.Screen name="Home" component={Home} />
  </AppTab.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(!isLoading);
    }, 500);
  }, []);

  return (
    <NavigationContainer>
      {isLoading ? (
        <Loading />
      ) : userToken ? (
        <AppTabScreen />
      ) : (
        <AuthStackScreen />
      )}
    </NavigationContainer>
  );
};
