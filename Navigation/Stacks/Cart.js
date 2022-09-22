import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../Screens/Cart/index";


const CartStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFF" },
        headerTitleStyle: { color: "#000" },
        headerBackTitleStyle: { color: "#000" },
      }}
    >
      <Stack.Screen name="Carrito" component={Cart} options={{ title: "Cart" }} />
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
