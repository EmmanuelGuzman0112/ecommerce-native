import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Order from "../../Screens/Order/Index";


const OrderStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#FFF" },
        headerTitleStyle: { color: "#000" },
        headerBackTitleStyle: { color: "#000" },
      }}
    >
      <Stack.Screen
        name="Ordenes"
        component={Order}
        options={{ title: "Order" }}
      />
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
