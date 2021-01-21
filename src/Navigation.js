import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Compras from "./screens/Compras";
import Vendas from "./screens/Vendas";

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Compras" component={Compras} />
        <Stack.Screen name="Vendas" component={Vendas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
