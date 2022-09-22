import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNatigation from "./Navigation";
import TabNavigator from "./Navigation/Tabs";
import Layout from "./Screens/Layout";
import { auth } from "./Firebase/config";
import ShopProvider from "./Context/shopProvider";

export default function App() {
  return (
    <ShopProvider>
      <MainNatigation />
    </ShopProvider>
  );
}
